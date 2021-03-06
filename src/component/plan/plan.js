
//計畫表
new Vue({
    el: '#plan_wrapper',
   
    data(){
      return{
          cancel: true,
          //會員資料
          userlogin: 'visitor',
          memberinfo:{
            photo:"./src/images/img/plan/memberphoto.png",
            membername:"maggie",
            racedate:"20221127",
            week:8,
            point:0,
          },
          //計畫表資料
          plandata:[
            //day1
            {
            "Swim":1,
            "Bike":1,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day2
            {
            "Swim":1,
            "Bike":0.5,
            "Run":null,
            "Rest":false,
            check:[]
            },
            //day3
            {
            "Swim":null,
            "Bike":null,
            "Run":null,
            "Rest":"rest",
            check:[],
            },
            //day4
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day5
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day6
            {
            "Swim":1,
            "Bike":null,
            "Run":1,
            "Rest":false,
            check:[]
            },
            //day7
            {
            "Swim":null,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
          ]
         }
      },
     
      methods: {
        checkoneday(){
        alert("恭喜你獲得一點");
        if(this.memberinfo.point){
            this.memberinfo.point += 1
        }
        else{
          this.memberinfo.point = 1
        }
        localStorage.setItem('Points',this.memberinfo.point);
        localStorage.setItem('plandata',JSON.stringify(this.plandata))
      },
      plancancel(){
              var yes = confirm('確定要取消計畫嗎？將會清空計畫表內容')
              if (yes) {
                  this.cancel = false
              } else {
                  alert('您已取消');
            }
        },
        resetplan(){
        window.location="./plan-temporary.html"
        },
       
      },
      
        created() { 
        let theData = localStorage.getItem('plandata');
        if(theData != null){
          this.plandata = JSON.parse(theData);
        }
       
        
        // this.memberinfo.membername = theData.name;
        // this.memberinfo.racedate = theData.raceDate;

        // fetch("./plan.php",
        // {
        //  method: 'GET',
        //  headers:{
        //   'Content-Type': 'application/json',
        //  },
            
        // })
        // .then(response => {
        //   if (!response.ok) {
        //     throw new Error('Network response was not OK');
        //   }
        //   // return response.json();
        //   return response.json([this.memberinfo,this.plandata]);
          
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // })
      },
  
      // watch:{
      //      memberinfo:{
      //         handler:function(){
                //request  更新會員資料
                  // fetch("./plan.php",
                  // {
                  //  method: 'POST',
                  //  headers:{
                  //   'Content-Type': 'application/json',
                  //  },
                  //  body: JSON.stringify(this.memberinfo),
                  // })
                  // .catch((error) => {
                  //   console.error('Error:', error);
                  // })
          //     },
          //     deep:true,
          //     immediate: true //create階段
          // },

      //     plandata:{
      //         handler:function(){
      //           //request  更新會員資料
      //           update()
      //         },
      //         deep:true,
      //         immediate: true 
      //     }

      // },
     
  });  
  

//圖表C3.js
var chart = c3.generate({
    bindto: "#plan_chart",
    size: {
            height: 140,
            width: 190
        },
    data: {  //針對圖表的樣式資料屬性寫在data內
        columns: [
        ["Swim", 30],
        ["Bike", 60],
        ["Run", 50],
        ],
        type: "bar",
        colors: {
            Swim: "#FFA10A",
            Bike: "#00429D",
            Run: "#E75F49"
            
        },
       
    },
    bar:{
        ratio: 0.8 ,
        space: 0.25
    },
    legend: {
        show: true, //是否顯示下排項目表
    },
    axis: {
        x:{
            show: false,
        },
        y:{
            show: false,
        }
    }
    
    });
      





    // const question = new Vue({
    //   el: '#plan_question',
    //   data(){
  
    //       return{
    //           tab:"下一步",
    //           current_tab:0,
    //           questionanswer : [],//存入答案的陣列
    //           max:4,
    //           questions:[
    //               //第一題
    //               {
    //                   title:'你的參賽日期',
    //                   choices:
    //                   [{
    //                       title:'2021普悠瑪鐵人三項競賽',
    //                       value:'20211101'
    //                   },{
    //                       title:'2021梅花湖三鐵',
    //                       value:'20211203'
    //                   },{
    //                       title:'2021台東活水湖三鐵',
    //                       value:'20211223'
    //                   },
    //                   {
    //                       title:'我想自主訓練',
    //                       value:'selftraning'
    //                   }],
    //                   name:'racedate',
    //                   type:'select',
    //                   answer: '20211101', 
    //               },
    //               //第二題
    //               {
    //                   title:'想挑戰的競賽距離',
    //                   choices:
    //                   [{
    //                       title:'226K全程距離',
    //                       value:'226'
    //                   },{
    //                       title:'113K半程距離',
    //                       value:'113'
    //                   },{
    //                       title:'51.5K標準距離',
    //                       value:'51.5'
    //                   }],
    //                   name:'distance',
    //                   type:'radio',
    //                   answer: '226'
    //               },
    //               //第三題
    //               {
    //                   title:'想制定幾週的訓練計畫呢',
    //                   choices:
    //                   [{
    //                       title:'16週',
    //                       value:'16'
    //                   },{
    //                       title:'12週',
    //                       value:'12'
    //                   },{
    //                       title:'8週',
    //                       value:'8'
    //                   }],
    //                   name:'week',
    //                   type:'radio',
    //                   answer: '16'
    //               },
    //               {
    //                   title:'選擇訓練強度',
    //                   choices:
    //                   [{
    //                       title:'強',
    //                       value:'hard'
    //                   },{
    //                       title:'中',
    //                       value:'normal'
    //                   },{
    //                       title:'弱',
    //                       value:'eazy'
    //                   }],
    //                   name:'level',
    //                   type:'radio',
    //                   answer: 'hard'
    //               },
                  
    //           ]
  
    //       }
    //   },
         // $.ajax({   
                  //     method: "POST",
                  //     url: "plan.php",
                  //     data:{ //要丟的欄位
                  //     },       
                  //     dataType: "text", 
                  //     success: function (response) { //得到回應更新資料
                  //         if(response === "y"){
                  //             $(".loading").fadeOut(1000);
                  //             $("#plan_wrapper").fadeIn(1500);
                  //             // display();   //找到資料後執行這function
                  //         }else{
                  //             alert(response);//流程控制
                  //         }
                  //     },
                  //     error: function(exception) {
                  //         alert("發生錯誤: " + exception.status);
                  //     }
                  // });
  //     methods: {
          
  //         createplan(){
  //                 $("#plan_question").fadeOut(1500);
  //                 $(".loading").fadeIn(1500);
  //                 $(".loading").fadeOut(1500);
  //                 $("#plan_wrapper").fadeIn(3000);
  //         },
          
          
          
          
  //         last(){      //切換按鈕index
  //             if(this.current_tab <= this.max  && this.current_tab > 0){
  //                 this.questionanswer.pop(this.questions[this.current_tab - 1].answer);
  //                 this.current_tab --     
  //             }
  //             if(this.current_tab != 4){
  //                 this.tab ="下一步"
  //             }
  //         },
  //         changetab(){ //切換按鈕index
  //                 if(this.current_tab < 5 ){
  //                     //questionanswer答案陣列
  //                     this.questionanswer.push(this.questions[this.current_tab - 1].answer);
  //                     this.current_tab ++ 
  //                     console.log(this.questionanswer);
  //                     //localStorage.setItem("answer",JSON.stringify(this.questionanswer));
  //                     //!!傳送request!!
  //                 }
  //                 if(this.current_tab === 5){
  //                     this.createplan()
  //                 }else if(this.current_tab ===4){
  //                     this.tab = "完成"
  //                 }
  
              
  //         },
         
  //     }, 
  //      computed: {
  //         progressWidth(){
  //                //進度條
  //                 switch (this.current_tab) {
  //                             case 1:
  //                                 return 'width:25%';
  //                                 break;
  //                             case 2:
  //                                 return 'width:50%';
  //                                 break;
  //                             case 3:
  //                                 return 'width:75%';
  //                                 break;
  //                             case 4:
  //                                 return 'width:100%';
  //                                 break;
  //                            default:
  //                                 return("");
  //                                 break;
                      
  //             }
  //         }
  //      }
//   });
  