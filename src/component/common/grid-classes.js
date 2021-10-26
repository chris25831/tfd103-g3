Vue.component("grid-classes",{
    props: ["imgurl","imgsrc","classtitle","classsubtitle"],
    template: `
    <div class="classesgrid_simple">
        <a :href="imgurl"></a> 
        <p> 
            <span class="title3">{{classtitle}}</span><br>
            <span class="article">{{classsubtitle}}</span>
        </p>
        <img :src="imgsrc" alt="無法讀取照片" />       
    </div>
    `,
});