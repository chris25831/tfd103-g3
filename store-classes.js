// 團體課程&營養規劃
const classes =  new Vuex.Store({
    state: {       

        //***前台主頁***
        triclasses:[],
        menus:[],

        //***內頁***
        classID:"",
        classTitle:"",
        classCategory:"",
        trainerName:[],
        classLocation:"",
        price:"",
        intro:"",
        
        // 課程照片
        imgSrc:[],
        
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
                // console.log(selectdata); 
                // console.log(selectdata.CourseName);
                // 解析完 
                state.classTitle = selectdata.CourseName;
                console.log(state.classTitle);
                // 地點 
                if(state.classCategory == "G"){  
                    state.classLocation = selectdata.CourseLocation;          
                }else{  //營養素
                    let objnutrients = JSON.parse(selectdata.Nutrition);
                    state.nutrients = {
                        cal: objnutrients[0],
                        protein: objnutrients[1],
                        carb: objnutrients[2],
                        fat: objnutrients[3],
                    }

                }
                // 教練
                state.trainerName = selectdata.CoachName;

                state.price = selectdata.Price;
                
                // INFO處理
                let arrintro =  selectdata.CourseContent.split(",");
                state.intro = arrintro; 
                // console.log(state.intro);

                // 圖片
                let imgs =  JSON.parse(selectdata.CoursePhoto);
                console.log(imgs);
                state.imgSrc = imgs;

            }).catch((error) => console.log(error));


        },


        // 新增的教練select
        newClassesInsert(state){
            state.trainerName = [];
        

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
                if(state.trainerName == []){ //新頁面

                    allnames.forEach(function(item){
                        // console.log(item);
                        // console.log(state.trainerName);
                        state.trainerName.push(item.CoachName);
                    });
                }else{ //編輯頁
                    var editarr =  [];
                    let name = state.trainerName;

                    allnames.forEach(function(item){
                        // console.log(item);
                        // console.log(state.trainerName);
                        editarr.push(item.CoachName);
                    });
                    let index = editarr.indexOf(name);
                    // console.log(index);
                    editarr.splice(index, 1);
                    editarr.unshift(name);
                    state.trainerName = editarr;
                        
                }

            }).catch((error) => console.log(error));

        }
    },

    getters:{
        reload: state =>{
            console.log(state.price);
            let newdata = {
                title: state.classTitle,
                price: state.price,
                trainer: state.trainerName,
                location: state.classLocation,
                nutrients: state.nutrients,
                intro: state.intro,
                imgs: state.imgSrc,

            }
            return newdata;
        }
    },
});


// 個人教練
const coach = new Vuex.Store({
    state: {        
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
        ig:"",
        // 教練介紹
        intro:[],

        // 教練照片
        imgSrc:"",






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
          
            state.trainerID = id;
            // 打包
            let classcatalog = id.slice(0,1);

            // 消0
            let fullid = id.slice(1);
            let classid = fullid.replace(/\b(0+)/gi,"");

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
                // 教練名稱
                state.trainerName = selectdata.CoachName;
                // 英文名
                state.en_trainerName = selectdata.en_CoachName;
                // 專長
                state.trainerExpertise = selectdata.CoachExpertise;
                // 證照
                state.trainerLicense = selectdata.CoachLicense;
                // IG
                state.ig = selectdata.CoachIG;
                // 介紹
                state.intro = selectdata.CoachProfile;
                // 照片
                state.imgSrc = selectdata.CoachPhoto;

                // 課程
                let tclass = JSON.parse(selectdata.PersonalCoach);
                // console.log(tclass);
                state.trainerclass = tclass;
             

            }).catch((error) => console.log(error));



            // 解析完畢
            /*
            state.trainerName="黃雨欣";
            state.en_trainerName="Silvia"; 
            state.trainerExpertise = [
             '游泳四式調整',
             '個人體能鍛鍊',
             '體態雕塑',
             '姿態評估',
             '功能性訓練',
             'TRX訓練'
            ];
 
            state.trainerclass = {
             name:'游泳肌力訓練(初階)',
             date:'12/01',
             price:'3000',
            };
 
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
 
            state.intro = [
             '一直很喜歡運動，',
             '大學是排球校隊，曾經很胖，',
             '也曾瘦到不行現在認為重訓打造出來的女人曲線才美，',
             '強壯能保護自己的女人才有魅力已不追求瘦身，',
             '線條才能讓我性感美麗充滿自信。'
            ];
 
            state.imgSrc = "./src/images/img/classes/trainer/trainer02.jpg";
             */

        },
    },

    getters:{
        reload: state =>{
           
            let newdata = {
                trainerID: state.trainerID,
                trainerName: state.trainerName,
                en_trainerName: state.en_trainerName,
                trainerExpertise: state.trainerExpertise,
                trainerclass: state.trainerclass,
                trainerLicense: state.trainerLicense,
                ig:state.ig,
                intro: state.intro,
                imgs: state.imgSrc,

            }
            return newdata;
        }
    },
}); 

export {classes, coach};