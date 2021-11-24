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
        
            axios({
                method: 'post',
                url: './php/classes-select.php',
                data:{
                    check: 'home', 
                    catalog:"GM"  
                }

            }).then((response) => {
                console.log(response);
                let alldata = response.data;
                console.log(alldata);

                // 補0
                function pluszero(id){
                   return id.padStart(5,"0");
                };

                // 解析
                for(let i=0; i < alldata.length; i++){
                    let id = alldata[i].CourseID;
                    let idlength =  alldata[i].CourseID.length;
                    let fullid ="";
                    let arrimg = JSON.parse(alldata[i].CoursePhoto);
                    if(idlength < 5){

                        fullid = pluszero(id);      
                    }
                    // console.log(fullid);

                    let item ={
                        classID: alldata[i].CourseCatalog + fullid,
                        imgSrc: arrimg[0],
                        classTitle: alldata[i].CourseName,
                    }
                    // console.log(item);

                    // 丟入 判斷G || M
                    if(alldata[i].CourseCatalog == "G"){

                        state.triclasses.push(item);
                        console.log(state.triclasses);
                    }else{
                        state.menus.push(item);
                        console.log(state.menus);
                    }
                } 

            }).catch((error) => console.log(error));
        
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
            // console.log(state.price);
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
        intro:"",

        // 教練照片
        imgSrc:"",






    },
    mutations: {    

        //DataBase抓值
        // 主頁
        classesHomeStart(state){
           
            axios({
                method: 'post',
                url: './php/classes-select.php',
                data:{
                    check: 'home', 
                    catalog:"T"  
                }

            }).then((response) => {
                // console.log(response);
                let alldata = response.data;
                console.log(alldata);

                 // 補0
                 function pluszero(id){
                    return id.padStart(5,"0");
                 };

                // 解析
                for(let i=0; i < alldata.length; i++){
                    let id = alldata[i].CoachID;
                    let idlength =  alldata[i].CoachID.length;
                    let fullid ="";
                    let arrexp = alldata[i].CoachExpertise.split(",");
                    // console.log(arrexp);

                    if(idlength < 5){

                        fullid = pluszero(id);      
                    }

                    let item ={
                        classID: "T" + fullid,
                        imgSrc: alldata[i].CoachPhoto,
                        classTitle: alldata[i].CoachName,
                        classSubtitle: arrexp[0],
                    }

                    // 丟入
                    state.trainers.push(item);
                  
                }


            }).catch((error) => console.log(error));


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
                let arrExp =  selectdata.CoachExpertise.split(",");
                state.trainerExpertise = arrExp;
                console.log(state.trainerExpertise);

                // 證照
                let arrLic =  selectdata.CoachLicense.split(",");
                state.trainerLicense = arrLic;

                // IG
                state.ig = selectdata.CoachIG;

                // 介紹
                let arrintro =  selectdata.CoachProfile.split(",");
                state.intro = arrintro;
              
                // 照片
                state.imgSrc = selectdata.CoachPhoto;
               
                // 課程
                let tclass = JSON.parse(selectdata.PersonalCoach);
                // console.log(tclass);
                state.trainerclass = tclass;
             
            }).catch((error) => console.log(error));

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