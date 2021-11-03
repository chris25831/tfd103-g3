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
        },
    },
    mounted() { 
        document.querySelectorAll("span.bookmark-item").forEach((text, index) => {
            console.log(text.innerText)
            if(text.innerText.toString() === "全部") {
                text.style.color = "#ffa10a";
            }
        });
    },
});