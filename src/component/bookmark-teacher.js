Vue.component("bookmark-teacher",{
    props: ["category"],
    template: `
        <span class="bookmark-item">{{category}}</span>
    `,
});

//記得貼上路徑
// <script src="./src/component/bookmark-teacher.js"></script> 

// 請於你的script寫入以下：
// new Vue({
//     el: "main",    // 可改成該頁面標籤的id  
//     data: {
//         categories: ["團練課程", "個人教練","營養規劃"],
//     },
// });

// 你的html標籤寫法：
// <div class="bookmark">
//      <bookmark-teacher v-for="category in categories" :category="category">
// </div>
