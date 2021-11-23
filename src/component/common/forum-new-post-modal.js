Vue.component("forum-new-post-modal", {
    template: `
    <div id="forum-new-post-modal" class="darken-background">
        <div class="new-article">
                <span class="info">發表文章</span>
                <div class="cross">
                    <i @click="returning" class="fas fa-times fa-2x"></i>
                </div>
                <input type="text" class="title forum-title" placeholder="請輸入文章標題" name="title" v-model="forumTitle" required>
                <select class="category" name="category" id="" v-model="category" required>
                    <option value="" disabled selected>請選擇分類</option>
                    <option value="閒聊">閒聊</option>
                    <option value="裝備">裝備</option>
                    <option value="心得">心得</option>
                    <option value="問題">問題</option>
                </select>
                <textarea class="new-article-content" name="content" id="" cols="30" rows="10" v-model="newArticleContent" required></textarea>
                <div class="upload-images">

                    <div class="single-image image-one-wrapper">
                        <div class="rectangle rectangle-one"></div>
                        <img class="the-image-one the-image" src="" name="photo-one">
                        <input type="file" id="insert-one" class="insert-photo insert-one" @change="updateImageDisplayOne">
                    </div>

                    <div class="single-image image-two-wrapper">
                        <div class="rectangle rectangle-two"></div>
                        <img class="the-image-two the-image" src="" name="photo-two">
                        <input type="file" id="insert-two" class="insert-photo insert-two" @change="updateImageDisplayTwo">
                    </div>

                    <div class="single-image image-three-wrapper">
                        <div class="rectangle rectangle-three"></div>
                        <img class="the-image-three the-image" src="" name="photo-three">
                        <input type="file" id="insert-three" class="insert-photo insert-three" @change="updateImageDisplayThree">
                    </div>
                </div>
                
                <button class="send-forum-content" type="submit" @click="send">送出</button>
        </div>
    </div>
    `,
    data() {
        return {
            forumTitle: "",
            timeOfPost: "",
            correctTimeOfPost: "",
            category: "",
            newArticleContent: "",
            theImageOne: "",
            theImageTwo: "",
            theImageThree: ""
        }
    },

    methods: {
        send() {          
            if(this.forumTitle.trim().length !== 0 && this.category.trim().length !== 0 && this.newArticleContent.trim().length !== 0) {
                axios({
                method: 'post',
                url: './php/forum-new.php',
                //API要求的資料
                data: { 
                        title: this.forumTitle, 
                        category: this.category,
                        content: this.newArticleContent,
                        photos: [this.theImageOne, this.theImageTwo, this.theImageThree]           
                    }
                })
                .then((res) => {
                    // this.$emit("sending");
                })
                .catch((error) => console.log(error))
                
            } else {
                return
            }
        },
        returning() {
            this.$emit("closing");
        },
        updateImageDisplayOne(){
            let insertOne = document.querySelector("#insert-one");
            let rectangleOne = document.querySelector(".rectangle-one");

            console.log(insertOne.files[0]);
            this.theImageOne = document.querySelector(".the-image-one");
            this.theImageOne.src = window.URL.createObjectURL(insertOne.files[0]);
            if(this.theImageOne.src !== "") {
                rectangleOne.style.display = "none";
            }
        },
        updateImageDisplayTwo(){
            let insertTwo = document.querySelector("#insert-two");
            let rectangleTwo= document.querySelector(".rectangle-two");

            // console.log(insertTwo.files[0]);
            this.theImageTwo = document.querySelector(".the-image-two");
            this.theImageTwo.src = window.URL.createObjectURL(insertTwo.files[0]);
            if(this.theImageTwo.src !== "") {
                rectangleTwo.style.display = "none";
            }
        },
        updateImageDisplayThree(){
            let insertThree = document.querySelector("#insert-three");
            let rectangleThree = document.querySelector(".rectangle-three");

            // console.log(insertThree.files[0]);
            this.theImageThree = document.querySelector(".the-image-three");
            this.theImageThree.src = window.URL.createObjectURL(insertThree.files[0]);
            if(this.theImageThree.src !== "") {
                rectangleThree.style.display = "none";
            }
        }
        // dropFirstImage(e) {
        //     let file = e.dataTransfer.files[0];
        //     let readFile = new FileReader();
            
        //     let rectangle = document.querySelector(".rectangle");
        //     let imageOne = document.querySelector(".image-one-wrapper");
        //     let theImage = document.querySelector("img.the-image-one"); 

        //     readFile.readAsDataURL(file);
            
        //     readFile.addEventListener("load", function(){    
                
        //             theImage.src = readFile.result;
        //             theImage.style.width = "100%";
        //             theImage.style.height = "100%";
        //             theImage.style.objectFit = "contain"; 
        //             rectangle.style.display = "none";
        //             imageOne.appendChild(theImage);
                
        //     })         
        // },
        // dropSecondImage(e) {
        //     let file = e.dataTransfer.files[0];
        //     let readFile = new FileReader();

        //     let rectangleTwo = document.querySelector(".rectangle-two");
        //     let imageOne = document.querySelector(".image-two-wrapper");
        //     let theImage = document.querySelector("img.the-image-two"); 

        //     readFile.readAsDataURL(file);
            
        //     readFile.addEventListener("load", function(){    

        //             theImage.src = readFile.result;
        //             theImage.style.width = "100%";
        //             theImage.style.height = "100%";
        //             theImage.style.objectFit = "contain"; 
        //             rectangleTwo.style.display = "none";
        //             imageOne.appendChild(theImage);
                
        //     })  
        // },
        // dropThirdImage(e) {
        //     let file = e.dataTransfer.files[0];
        //     let readFile = new FileReader();

        //     let rectangleThree = document.querySelector(".rectangle-three");
        //     let imageOne = document.querySelector(".image-three-wrapper");
        //     let theImage = document.querySelector("img.the-image-three"); 

        //     readFile.readAsDataURL(file);
            
        //     readFile.addEventListener("load", function(){    
        //             theImage.src = readFile.result;
        //             theImage.style.width = "100%";
        //             theImage.style.height = "100%";
        //             theImage.style.objectFit = "contain"; 
        //             rectangleThree.style.display = "none";
        //             imageOne.appendChild(theImage);
        //     })
        // }
    },
});


