// 團體課程&營養規劃
const classes =  new Vuex.Store({
    state: {       

        //***前台主頁***
        triclasses:[],
        menus:[],

        //***內頁***
        editpage:false, 
        classTitle:"",
        classId:"",
        classCategory:"G",
        trainer:[],
        classLocation:"",
        price:"",
        classInfo:"",
        
        // 課程照片
        classimg:[],
        
        // ^^^營養專用^^^
        nutrients:{},


    },
    mutations: {    
        
        //DataBase抓值
        // 主頁
        classesHomeStart(state){
            //***TODO:解析axios的東西,多物件 for迴圈
            
            
            //***解析完畢 
            // state.triclasses = [],
            // state.menus = [],




        },

        // 內頁
        classesContentStart(state, id){
                
            state.classID = id;

            // 打包
            let classcatalog = id.slice(0,1);
            state.classCategory= classcatalog;
            
            // 消0
            let fullid = id.slice(1);
            let classid = fullid.replace(/\b(0+)/gi,"");
            // console.log(classid);


            axios({
                method: 'post',
                url: './php/classes-select.php',
                data:{
                    check: 'content',
                    catalog:classcatalog,
                    id:classid,
                }

            }).then(function(response){
                console.log(response); 
                let selectdata = response.data[0];
                console.log(selectdata); 
                console.log(selectdata.CourseName);
                // 解析完 
                state.classTitle = selectdata.CourseName;
                console.log(state.classTitle);
                // 做判斷, 營養沒地點 
                if(state.classCategory == "G"){  
                    state.classLocation = selectdata.CourseLocation;          
                }else{  //營養
                    state.nutrients = JSON.parse(selectdata.Nutrition);          
                }

                state.price = selectdata.Price;

                // INFO處理
                // let arrintro =  selectdata.CourseContent.split(",");
                // state.intro = arrintro; 
                // 圖片
                let imgs =  JSON.parse(selectdata.CoursePhoto);
                console.log(imgs);


               

            }).catch((error) => console.log(error));


            //***解析完畢 

            // state.trainerName=["許上元","黃雨欣","江西男"];



            // state.intro = [
                 // 用，做分隔
                //  '菜單材料：鮭魚片、蘆筍、洋蔥、蔾麥、雞蛋、藍莓、酪梨',
                //  '烹調方式：烤、水煮',
                //  '鮭魚+蘆筍+酪梨+藍莓!',
                //  '這道料理的靈感源自於美國的healthy bowl',
                //  '美國有很多販售健康碗的店家',
                //  '這個組合絕對能令您感到新奇和印象深刻!',
            // ];

            // 模擬多圖
            // let imgs = [
            //     './src/images/img/classes/class/class01.jpg',
            //     './src/images/img/classes/class/class01.jpg',
            //     './src/images/img/classes/class/class01.jpg',
            // ];
            // state.imgSrc = imgs;

            
            //營養素
            state.nutrients = {
                cal:'822',
                protein:'55.4',
                carb:'69.7',
                fat:'36.6',
            }; 
            
        },


        // 新增的教練select
        newClassesInsert(state){
            state.trainer = [];
        

            axios({
                method: 'post',
                url: './php/classes-select.php',
                data:{
                    check: 'tname'
                }

            }).then(function(response){
                // console.log(response); 
                let allnames = response.data;

                // 解析完 
                allnames.forEach(function(item){
                    // console.log(item);

                    state.trainer.push(item.CoachName);
                });

            }).catch((error) => console.log(error));

        }
    },

    getters:{
        price: state =>{
            console.log(state.price);
            return state.price;
        }
    },
});


// 個人教練
const coach = new Vuex.Store({
    state: {        
        //***前台主頁***
        trainers:[],
        
        //***內頁***
        editpage:false, 
        classId:"",
        classCategory:"T",
        trainer:"",
        en_trainer:"",
        // 教練課程(包含名稱, 日期, 價錢)
        classTitle:"",
        price:"",
        classDate:"",
        // 教練專長
        trainerExpertise:[],
        // 教練證照
        trainerLicense:[],
        // 教練IG
        ig:"",
        // 教練介紹
        classInfo:[],

        // 教練照片
        classimg:"",






    },
    mutations: {    

        //DataBase抓值
        // 主頁
        classesHomeStart(state){
            state.trainers = [];
        },

        // 內頁
        classesContentStart(state, id){
            // 解析
            // console.log(id);


            // 解析完畢
           state.trainer="黃雨欣";
           state.en_trainer="Silvia"; 
           state.trainerExpertise = [
            '游泳四式調整',
            '個人體能鍛鍊',
            '體態雕塑',
            '姿態評估',
            '功能性訓練',
            'TRX訓練'
           ];

        //    state.trainerclass = {
        //     name:'游泳肌力訓練(初階)',
        //     date:'12/01',
        //     price:'3000',
        //    };

           state.trainerLicense = [
                'PTA GLOBAL體適能教練證',
                '中華民國健身C級指導員證',
                '中華民國C級健美運動教練證',
                '中華民國游泳協C級教練證',
                '新北市水上安全救生協會C級游泳教練證',
                '台灣國際身心障礙游泳協會C級游泳教練證',
                '台灣國際身心障礙游泳協會C級游泳裁判證',
                '中華民國水上救生協會救生員證',
                '臺北市水上運動協會救生員證',
                '中華民國紅十字心肺復甦術'
           ];

           state.ig="https://www.peeta.tw/fitness";

           state.classInfo = [
            '一直很喜歡運動，',
            '大學是排球校隊，曾經很胖，',
            '也曾瘦到不行現在認為重訓打造出來的女人曲線才美，',
            '強壯能保護自己的女人才有魅力已不追求瘦身，',
            '線條才能讓我性感美麗充滿自信。'
           ];

           state.classimg = "./src/images/img/classes/trainer/trainer02.jpg";







        },
    },
}); 

export {classes, coach};