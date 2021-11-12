// 訓練課程grid
Vue.component("manage-triclasses",{
    props: ["classUrl","imgSrc","classTitle","classSubtitle","classId"],
    template: `
    <div class="classesgrid_simple">
        <a @click="goToContent()"></a> 
        <p> 
        <span class="title3">{{classTitle}}</span><br>
        <span class="article">{{classSubtitle}}</span>
        </p>
        <img :src="imgSrc" alt="無法讀取照片" />   
    </div>
    `,
    methods:{
        goToContent(){
            let url = this.classUrl;
            let id = this.classId;
           
           window.location.href=`${url}?classid=${id}`;
        }

    },
});