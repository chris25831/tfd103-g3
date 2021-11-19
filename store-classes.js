// 團體課程&營養規劃
const classes =  new Vuex.Store({
    state: {        //類似 new Vue() 裡的 data (放變數的地方)

        //***前台主頁***
        triclasses:[],
        menus:[],

        //***內頁***
        classID:"",
        classTitle:"",
        classLocation:"",
        price:"",
        intro:[],
        
        // 課程照片
        imgSrc:[],
        
        // ^^^營養專用^^^
        nutrients:{},


    },
    mutations: {    //類似 new Vue() 裡的 methods  (變數的修改透過mutation)
        
        //DataBase抓值
        // 主頁
        classesHomeStart(state){
            //***TODO:解析axios的東西,多物件 for迴圈
            
            
            //***解析完畢 
            // state.triclasses = [],
            // state.menus = [],




        },

        // 內頁
        classesContentStart(state){
                
            //***TODO:解析axios的東西



            //***解析完畢 
            state.classID = 'G10001';
            state.classTitle="2021 Liv Iron Girl X 鐵人私塾 官方聯名系列課";
            
            //TODO:要做判斷, 營養沒地點 
            state.classLocation = "台北";

            state.price = "81000";
            state.intro = [
                 // 用，做分隔
                 '菜單材料：鮭魚片、蘆筍、洋蔥、蔾麥、雞蛋、藍莓、酪梨',
                 '烹調方式：烤、水煮',
                 '鮭魚+蘆筍+酪梨+藍莓!',
                 '這道料理的靈感源自於美國的healthy bowl',
                 '美國有很多販售健康碗的店家',
                 '這個組合絕對能令您感到新奇和印象深刻!',
            ];

            // 模擬多圖
            let imgs = [
                './src/images/img/classes/class/class01.jpg',
                './src/images/img/classes/class/class01.jpg',
                './src/images/img/classes/class/class01.jpg',
            ];
            state.imgSrc.push(imgs);

            
            
        }
    },
});


// 個人教練
const coach = new Vuex.Store({
    state: {        //類似 new Vue() 裡的 data (放變數的地方)
        //***前台主頁***
        trainers:[],
        
        //***內頁***
        trainerID:"",
        trainerName:"",
        en_trainerName:"",
        // 教練專長
        trainerExpertise:[],
        // 教練課程(包含名稱, 日期, 價錢)
        trainerclass:{},
        // 教練證照
        trainerLicense:[],
        // 教練IG
        IG:"",
        // 教練介紹
        intro:[],

        // 教練照片
        imgSrc:[],






    },
    mutations: {    //類似 new Vue() 裡的 methods  (變數的修改透過mutation)

        //DataBase抓值
        // 主頁
        classesHomeStart(state){
            state.trainers = [];
        },

        // 內頁
        classesContentStart(state){
            state.trainerName="黃雨欣";
        },
    },
}); 

export {classes, coach};