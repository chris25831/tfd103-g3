// 訓練課程grid
Vue.component("triclasses",{
    props: ["classUrl","imgSrc","classTitle","classSubtitle","classId","currentpage"],
    template: `
    <div class="classesgrid_simple">
        <a v-if="currentpage == 0" @click="goToContent()"></a> 
        <a v-if="currentpage == 1" @click="GoToManageContent()"></a>  <!--判斷前後台點擊-->
        <p> 
            
            <span class="title3">{{classTitle}}</span><br>
            <span class="article">{{classSubtitle}}</span>
        </p>
        <img :src="imgSrc" alt="無法讀取照片" />       
    </div>
    `,
    methods:{
        goToContent(){
            let id = this.classId;
           
           location.href=`classes-content.html?classid=${id}`;
        },

        //後台編輯內頁
        GoToManageContent(){ 
            let id = this.classId;
           
           location.href=`manage-class-content.html?classid=${id}`;
        }

    },
});