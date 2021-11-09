
//計畫表
new Vue({
    el: '#plan_wrapper',
    data(){
      return{
        //   plancancel:false,
          checkdone: false,
          cancel: true,
          point:[],
          memberinfo:{
            "photo":"./src/images/img/plan/memberphoto.png",
            "membername":"maggie",
            "racedate":"20221127",
            "week":8,
            },
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
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            {
            "Swim":1,
            "Bike":null,
            "Run":1,
            "Rest":false,
            check:[]
            },
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
      components:{'light-box':{
        template:`
            <div class="lightbox-bg">
                <div class="lightbox-mask" :style="modelStyle">
                    <div @click.self=""toggleModel>

                    </div>
                </div>
            </div>
        `,
      }
    },
      methods: {
        checkoneday(){
        alert("恭喜你獲得一點");
        var checkarr = this.plandata.map(item => Object.values(item)[4]);
        
        if(localStorage.hasOwnProperty('Points')){
            var points = JSON.parse(localStorage.getItem('Points'));
            localStorage.setItem('Points',points + 1);

        }
        else{
          localStorage.setItem('Points',1);

        }

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
        }
      },
     
      created() {
        //在created的時候找localstorage有沒陣列
        if(localStorage.hasOwnProperty('Donearr')){
          JSON.parse(localStorage.getItem('Donearr'));
          // for(let i = 0; i<this.plandata.length; i++){
          //   for(let j = 0;j<this.Donearr.length; j++){
          //     this.plandata[i].check.push(this.Donearr[j]);
          //     console.log(plandata);
          //   }
          // }
        }else{
          console.log('沒有Donearr');
        }
        
        // var checkarr = [];
        // for(let i = 0; i<this.plandata.length; i++){
        //   checkarr.push (this.plandata[i].check);
        //   console.log(checkarr);
        // }
        // var checkarr = this.plandata.map(item => Object.values(item)[4]);
        // localStorage.setItem('Donearr', JSON.stringify(checkarr));
      },
      watch:{
       
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
      
  