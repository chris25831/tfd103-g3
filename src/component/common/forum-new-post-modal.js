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
                
                
                <button class="send-forum-content" type="submit" @click="send">送出</button>
        </div>
    </div>
    `,
    data() {
        return {
            user: "",
            forumTitle: "",
            timeOfPost: "",
            correctTimeOfPost: "",
            category: "",
            newArticleContent: "",
            
        }
    },

    methods: {
        send() {          
            let button = document.querySelector(".send-forum-content");
            if(this.user == "") {
                alert("請先登入")
            } else {
                if(this.forumTitle.trim().length !== 0 && this.category.trim().length !== 0 && this.newArticleContent.trim().length !== 0) {
                    button.disabled = true;
                    console.log(this.user)
                    axios({
                    method: 'post',
                    url: './php/forum-new.php',
                    //API要求的資料
                    data: { 
                            user: parseInt(this.user),
                            title: this.forumTitle, 
                            category: this.category,
                            content: this.newArticleContent,     
                        }
                    })
                    .then((res) => {
                        this.$emit("sending");
                    })
                    .catch((error) => console.log(error))
                    
                } else {
                    return
                }
            }
        },
        returning() {
            this.$emit("closing");
        },
        
    },
    mounted() {
        axios({            
            method: "POST",
            url: "./php/loginCheck.php",
        }).then((response) => {
        // console.log(response.data)
            if(response.data === ""){
                console.log("XXX")
            }else{
                console.log("VVV");
                this.user = response.data;
                console.log(this.user);
            } 
        }).catch(function(error){
            console.log(error);
            console.log("錯誤");
        })    
    }
});


