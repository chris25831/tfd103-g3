
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
      


    // ]
    // [week][day]
    // w1d1, w1d2, w1d4
    // w2d2
    // w3d3
    // let arr = [123,456,234,678,345];
    // arr[0], arr[1], arr[2], arr[3], arr[4]

    // [week][day]  --> [0][0]~[7][6]
    // key       value
    // ----------------
    // maggie    {"name":"maggie","plandata": [],"week": 8,"raceDate":"2021/11/27"}