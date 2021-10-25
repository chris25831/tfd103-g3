Vue.component("grid-classes",{
    props: ["imgurl","imgsrc"],
    template: `
    <div class="classesgrid_simple">
        <a :href="imgurl"> 
            <img :src="imgsrc" alt="無法讀取照片" />
        </a>    
    </div>
    `,
});