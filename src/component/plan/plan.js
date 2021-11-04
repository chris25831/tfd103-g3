// ***lightbox測驗彈窗*** //

const question = new Vue({
    el: '#plan_question',
    data(){

        return{
            tab:"下一步",
            current_tab:0,
            plandata : [],
            max:4,
            questions:[
                //第一題
                {
                    title:'你的參賽日期',
                    choices:
                    [{
                        title:'2021普悠瑪鐵人三項競賽',
                        value:'20211101'
                    },{
                        title:'2021梅花湖三鐵',
                        value:'20211203'
                    },{
                        title:'2021台東活水湖三鐵',
                        value:'20211223'
                    }],
                    name:'racedate',
                    type:'select',
                    answer: '20211101', 
                },
                //第二題
                {
                    title:'想挑戰的競賽距離',
                    choices:
                    [{
                        title:'226K全程距離',
                        value:'226'
                    },{
                        title:'113K半程距離',
                        value:'113'
                    },{
                        title:'51.5K標準距離',
                        value:'51.5'
                    }],
                    name:'distance',
                    type:'radio',
                    answer: '226'
                },
                //第三題
                {
                    title:'想制定幾週的訓練計畫呢',
                    choices:
                    [{
                        title:'16週',
                        value:'16'
                    },{
                        title:'12週',
                        value:'12'
                    },{
                        title:'8週',
                        value:'8'
                    }],
                    name:'week',
                    type:'radio',
                    answer: '16'
                },
                {
                    title:'選擇訓練強度',
                    choices:
                    [{
                        title:'強',
                        value:'hard'
                    },{
                        title:'中',
                        value:'normal'
                    },{
                        title:'弱',
                        value:'eazy'
                    }],
                    name:'level',
                    type:'radio',
                    answer: 'hard'
                },
                
            ]

        }
    },
    
    methods: {
        createplan(){
            if(this.tab == "完成"){
                console.log(this.plandata);
                this.plandata += this.plandata.concat(this.question.answer)

               
                // $("#plan_question").fadeOut(1500);
                // $(".loading").fadeIn(1500);
                // $(".loading").fadeOut(1500);
                // $("#plan_wrapper").fadeIn(1400);
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
            }
        },
        last(){      //切換按鈕index
            if(this.current_tab <= this.max  && this.current_tab > 0){
                this.current_tab --     
            }
            if(this.current_tab != 4){
                this.tab ="下一步"
            }
        },
        changetab(){ //切換按鈕index
            this.createplan()
                if(this.current_tab < 4 ){
                     this.current_tab ++
                }

                if(this.current_tab == 4){
                    this.tab = "完成"
                }
            
        },
       
         
    }, 
     computed: {
        progressWidth(){
               //進度條
                switch (this.current_tab) {
                            case 1:
                                return 'width:10%';
                                break;
                            case 2:
                                return 'width:30%';
                                break;
                            case 3:
                                return 'width:60%';
                                break;
                            case 4:
                                return 'width:100%';
                                break;
                           default:
                                return("");
                                break;
                    
            }
        }
     }
});
 

//計畫表
new Vue({
    el: '#plan_wrapper',
    data(){
      return{
          checkdone:false,
          memberinfo:{
            photo:"./src/images/img/plan/memberphoto.png",
            membername:"maggie",
            racedate:20221127,
            week:12
            },
           
            plandata:[
            //day1
            {
            "swim":1,
            "bike":null,
            "run":.5,
            "rest":false
            },
            //day2
            {
            "swim":1,
            "bike":0.5,
            "run":null,
            "rest":false
            },
            //day3
            {
            "swim":null,
            "bike":null,
            "run":null,
            "rest":"rest"
            },
            {
            "swim":1,
            "bike":null,
            "run":.5,
            "rest":false
            },
            {
            "swim":1,
            "bike":null,
            "run":.5,
            "rest":false
            },
            {
            "swim":1,
            "bike":null,
            "run":1,
            "rest":false
            },
            {
            "swim":null,
            "bike":null,
            "run":.5,
            "rest":false
            },
          ]
         }
      },
  
      methods: {
          checkoneday(){
                  alert("恭喜你獲得一點");
                  
                  this.checkdone = true;
          }
      },
  
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
        // onmouseover:function(){ //滑鼠滑進圖的效果  
        //     // console.log(grad1);
        //     var svg = d3.select("svg");
        //     var allpath = svg.selectAll(".c3-bar-0");
        //     return allpath.style("fill","#FFEF36");
        // },
        // onmouseout:function(){
        //     return allpath.style("fill","red");
    
        // }
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
      
  