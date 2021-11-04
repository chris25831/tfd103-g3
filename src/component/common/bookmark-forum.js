Vue.component("bookmark-forum",{
    props: ["category"],
    template: `
        <span class="bookmark-item" @click="bookmarkClicked"> {{category}}</span>
    `,
    methods: {
        bookmarkClicked(e){
            document.querySelectorAll("span.bookmark-item").forEach((text, index) => {
                if(e.target === text) {
                    text.style.color = "#ffa10a";
                } else {
                    text.style.color = "";
                }
            })

            if(e.target.innerText === "會員基本資料") {
                window.location.href='./manage-member-personal-info.html';
            } else if (e.target.innerText === "訂單管理") {
                window.location.href='./manage-order-list.html';
            } else if(e.target.innerText === "黑名單管理") {
                window.location.href='./manage-black-list.html';
            } else if(e.target.innerText === "檢舉") {
                window.location.href='./manage-forum-report.html';
            } else if(e.target.innerText === "檢舉") {
                window.location.href='./manage-forum-home.html';
            } else if(e.target.innerText === "公告") {
                window.location.href='./manage-forum-home.html';
            }
        },
    },
    mounted() { 
        document.querySelectorAll("span.bookmark-item").forEach((text, index) => {
            if(text.innerText.toString() === "全部") {
                text.style.color = "#ffa10a";
            }
        });
    },
});