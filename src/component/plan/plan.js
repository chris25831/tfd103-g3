


 

//計畫表
new Vue({
    el: '#plan_wrapper',
    data(){
      return{
        //   plancancel:false,
          checkdone: false,
          cancel: true,
          memberinfo:{
            photo:"./src/images/img/plan/memberphoto.png",
            membername:"maggie",
            racedate:20221127,
            week:12
            },
          plandata:[
            //day1
            {
            "swim":null,
            "bike":null,
            "run":.5,
            "rest":false,
            check:false,
            // check:[]
            },
            //day2
            {
            "swim":1,
            "bike":0.5,
            "run":null,
            "rest":false,
            check:false,
            // check:[]
            },
            //day3
            {
            "swim":null,
            "bike":null,
            "run":null,
            "rest":"rest",
            check:false,
            // check:[]
            },
            {
            "swim":1,
            "bike":null,
            "run":.5,
            "rest":false,
            check:false,
            // check:[]

            },
            {
            "swim":1,
            "bike":null,
            "run":.5,
            "rest":false,
            check:false,
            // check:[]

            },
            {
            "swim":1,
            "bike":null,
            "run":1,
            "rest":false,
            check:false,
            // check:[]

            },
            {
            "swim":null,
            "bike":null,
            "run":.5,
            "rest":false,
            check:false,
            // check:[]

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
            this.plandata.sperday.check = true;
          },
        //   checkdone(){
        //     alert("恭喜你獲得一點");
        //     console.log(this.plandata.perday.check.indexOf(week));
        //     if(plandata.perday.check.indexOf(week)){
        //         return true
        //     }
        //   },
          plancancel(){
                var yes = confirm('確定要取消計畫嗎？將會清空計畫表內容')

                if (yes) {
                    this.cancel = false
                    let resetplan = confirm('需要重新訂製計畫表嗎？');
                    if(resetplan){
                        window.location="./plan-temporary.html"
                    }
                } else {
                    alert('您已取消');
                }
          }
      },
      computed:{
        modelStyle(){
            return {
                'display':this.plancancel ? '':'none'
            }
        }
      }
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
      
  