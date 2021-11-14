Vue.component("forum-new-post-modal", {
    template: `
    <div id="forum-new-post-modal" class="darken-background">
        <div class="new-article forum-modal">
            <form action="forum-new.php" method="POST">
                <span class="info">發表文章</span>
                <div class="cross"> 
                    <i @click="returning" class="fas fa-times fa-2x"></i>
                </div>
                <input type="text" class="title forum-title" placeholder="請輸入文章標題" name="title" required>
                <select class="category" name="category" id="" required>
                    <option value="" disabled selected>請選擇分類</option>
                    <option value="閒聊">閒聊</option>
                    <option value="裝備">裝備</option>
                    <option value="心得">心得</option>
                    <option value="問題">問題</option>
                </select>
                <textarea class="new-article-content" name="content" id="" cols="30" rows="10" required></textarea>
                <div class="upload-images">
                    <div class="single-image image-one-wrapper" @dragover.prevent @drop.prevent="dropFirstImage" >
                        <div class="rectangle rectangle-one"></div>
                        <img class="the-image-one the-image" src="" name="image-one">
                    </div>
                    <div class="single-image image-two-wrapper" @dragover.prevent @drop.prevent="dropSecondImage">
                        <div class="rectangle rectangle-two"></div>
                        <img class="the-image-two the-image" src=""  name="image-two">
                    </div>
                    <div class="single-image image-three-wrapper" @dragover.prevent @drop.prevent="dropThirdImage">
                        <div class="rectangle rectangle-three"></div>
                        <img class="the-image-three the-image" src=""  name="image-three">
                    </div>
                </div>
                
                <button class="send-forum-content" type="submit" @click="test">送出</button>
            </form>
        </div>
    </div>
    `,
       //am I uploading successfully?
    methods: {
        test() {
            console.log("testing")
        },
        returning() {
            this.$emit("closing");
        },
        dropFirstImage(e) {
            let file = e.dataTransfer.files[0];
            let readFile = new FileReader();

            let rectangle = document.querySelector(".rectangle");
            let imageOne = document.querySelector(".image-one-wrapper");
            let theImage = document.querySelector("img.the-image-one"); 

            readFile.readAsDataURL(file);
            
            readFile.addEventListener("load", function(){    
                
                    theImage.src = readFile.result;
                    theImage.style.width = "100%";
                    theImage.style.height = "100%";
                    theImage.style.objectFit = "contain"; 
                    rectangle.style.display = "none";
                    imageOne.appendChild(theImage);
                
            })         
        },
        dropSecondImage(e) {
            let file = e.dataTransfer.files[0];
            let readFile = new FileReader();

            let rectangleTwo = document.querySelector(".rectangle-two");
            let imageOne = document.querySelector(".image-two-wrapper");
            let theImage = document.querySelector("img.the-image-two"); 

            readFile.readAsDataURL(file);
            
            readFile.addEventListener("load", function(){    
                
                    theImage.src = readFile.result;
                    theImage.style.width = "100%";
                    theImage.style.height = "100%";
                    theImage.style.objectFit = "contain"; 
                    rectangleTwo.style.display = "none";
                    imageOne.appendChild(theImage);
                
            })  
        },
        dropThirdImage(e) {
            let file = e.dataTransfer.files[0];
            let readFile = new FileReader();

            let rectangleThree = document.querySelector(".rectangle-three");
            let imageOne = document.querySelector(".image-three-wrapper");
            let theImage = document.querySelector("img.the-image-three"); 

            readFile.readAsDataURL(file);
            
            readFile.addEventListener("load", function(){    
                
                    theImage.src = readFile.result;
                    theImage.style.width = "100%";
                    theImage.style.height = "100%";
                    theImage.style.objectFit = "contain"; 
                    rectangleThree.style.display = "none";
                    imageOne.appendChild(theImage);
                
            })
        }
    },
});


