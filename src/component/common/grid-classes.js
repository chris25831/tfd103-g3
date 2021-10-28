// 團練課程
Vue.component("triclass-classes",{
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

// 個人教練
Vue.component("trainer-classes",{
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

// 營養規劃
Vue.component("menu-classes",{
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