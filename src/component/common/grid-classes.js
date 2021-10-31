// 訓練課程grid
Vue.component("triclasses",{
    props: ["classUrl","imgSrc","classTitle","classSubtitle"],
    template: `
    <div class="classesgrid_simple">
        <a :href="classUrl"></a> 
        <p> 
            <span class="title3">{{classTitle}}</span><br>
            <span class="article">{{classSubtitle}}</span>
        </p>
        <img :src="imgSrc" alt="無法讀取照片" />       
    </div>
    `,
});