Vue.component("forum-new-post-modal", {
    template: `
    <div id="forum-new-post-modal" class="darken-background">
        <div class="new-article forum-modal">
            <span class="info">發表文章</span>
            <div class="cross"> 
                <i @click="returning" class="fas fa-times fa-2x"></i>
            </div>
            <input type="text" class="title" placeholder="請輸入文章標題">
            <select class="category" name="" id="">
                <option value="" disabled selected>請選擇分類</option>
                <option value="">閒聊</option>
                <option value="">裝備</option>
                <option value="">心得</option>
                <option value="">問題</option>
            </select>
            <textarea class="new-article-content" name="" id="" cols="30" rows="10"></textarea>
            <div class="upload-images">
                <div class="single-image">
                    <div class="rectangle"></div>
                </div>
                <div class="single-image">
                    <div class="rectangle"></div>
                </div>
                <div class="single-image">
                    <div class="rectangle"></div>
                </div>
            </div>
            
            <button class="send" type="submit">送出</button>
        </div>
    </div>
    `,
    // data() {

    // },
    methods: {
        returning() {
            this.$emit("closing");
        },
    },
});


