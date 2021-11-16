Vue.component("forum-new-post-modal", {
    template: `
    <div id="forum-new-post-modal" class="darken-background">
        <div class="new-article forum-modal">
            <form @submit.prevent="send" action="./php/forum-new.php" method="POST">
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
                        <img class="the-image-two the-image" src="" name="image-two">
                    </div>
                    <div class="single-image image-three-wrapper" @dragover.prevent @drop.prevent="dropThirdImage">
                        <div class="rectangle rectangle-three"></div>
                        <img class="the-image-three the-image" src="" name="image-three">
                    </div>
                </div>
                
                <button class="send-forum-content" type="submit">送出</button>
            </form>
            
        </div>
    </div>
    `,
     methods: {
        send() {    // @click.prevent="send"
            let forumTitle = document.querySelector(".forum-title").value;
            
            let timeOfPost = new Date();
            let year = timeOfPost.getFullYear();
            let month = timeOfPost.getMonth() + 1;
            let date = timeOfPost.getDate();
            let hour = timeOfPost.getHours();
            let minute = timeOfPost.getMinutes();
            
            let correctTimeOfPost = `${year}年${month}月${date}日 ${hour}:${minute}`;
            let category = document.querySelector(".category").value;
            let newArticleContent = document.querySelector(".new-article-content").value;
            let theImageOne = document.querySelector(".the-image-one").src;
            let theImageTwo = document.querySelector(".the-image-two").src;
            let theImageThree = document.querySelector(".the-image-three").src;
            
            if(forumTitle.trim().length !== 0 && category.trim().length !== 0 && newArticleContent.trim().length !== 0) {
                let theText = {
                    "ArticleNumber": (Math.floor(Math.random() * 1000000000)),
                    "AuthorName": "Maggie Wang default",
                    "AuthorAvatar": "./src/images/img/forum/smile.jpg",
                    "PostTime": correctTimeOfPost,
                    "ArticleTitle": forumTitle,
                    "ArticleCategory": category,
                    "ArticleContent": newArticleContent,
                    "PostPhotoOne": theImageOne,
                    "PostPhotoTwo": theImageTwo,
                    "PostPhotoThree": theImageThree,
                    "ViewsCount": 0,
                    "LikesCount": 0,
                    "CommentsCount": 0
                }
                
                this.$emit("send-all-the-text", theText)
                
                // category = ""
                // newArticleContent = ""
                // theImageOne = ""
                // theImageTwo = ""
                // theImageThree = ""
            } else {
                console.log("no");
                return
            }
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


