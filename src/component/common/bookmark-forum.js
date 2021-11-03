Vue.component("bookmark-forum",{
    props: ["category"],
    template: `
        <span class="bookmark-item"> {{category}}</span>
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
});