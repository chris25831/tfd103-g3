//====== *** *** *** *** ======//

// ***lightbox*** //
const question = new Vue({
    el: '#plan_question',
    data(){

        return{
            tab:"下一步",
            current_tab:0,
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
                        value:'20211203'
                    }],
                    name:'racedate',
                    type:'select',
                    answer: null //前面要塞值的話就判斷是question[0](哪一題)結果立一個變數 === {{question.answer}}
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
                    answer: null
                },
                //第三題
                {
                    title:'想制定幾週的訓練計畫呢',
                    choices:
                    [{
                        title:'16',
                        value:'16'
                    },{
                        title:'12',
                        value:'12'
                    },{
                        title:'8',
                        value:'8'
                    }],
                    name:'week',
                    type:'radio',
                    answer: null
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
                    answer: null
                },
                
            ]

        }
    },

    methods: {
        last(){
            if(this.current_tab <= this.max  && this.current_tab > 0){
                this.current_tab --     
            }
        },
        currenttab(){
                if(this.current_tab < this.max && this.current_tab > 0){
                    this.current_tab ++
                }
                if(this.current_tab == 4){
                    return this.tab ="完成"  //有傳回值就要return
                }else{
                    return this.tab ="下一步"
                }
            }
      }, 
});



// ***上面斜斜的資訊欄*** //
Vue.component('plan-head',{
    
    template:`
    <div id="plan_head">
            <div class="plan_bg">
                
                <div class="plan_info">
                    <p >比賽日期:2021/11/12</p>
                    <p>訓練週數: 12 Week</p>
                </div>
                
                <svg id="bevelyellow" xmlns="http://www.w3.org/2000/svg" width="308.81" height="107" viewBox="0 0 308.81 107">
                    <defs>
                        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                            <stop offset="0" stop-color="#ffa10a"/>
                            <stop offset="1" stop-color="#ffef36"/>
                        </linearGradient>
                    </defs>
                    <path  data-name="Path 201" d="M56,0H308.81L257,107H0Z" fill="url(#linear-gradient)"/>
                    
                </svg>
                <svg id="bevelwhite" xmlns="http://www.w3.org/2000/svg" width="308.81" height="107" viewBox="0 0 308.81 107">
                    <path id="bevelwhite" data-name="Path 200" d="M56,0H308.81L257,107H0Z" fill="white" stroke="url(#linear-gradient)"/>
                </svg>

            </div>
        </div>
    `
});


// ***計畫表外框（天數D1.D2)*** //
Vue.component('plan-section',{
  
  template:`
  <section>
  <!--天數head-->
      <div id="plan_week">
          <ul>
              <li v-for="day in 7" class="title2">D{{day}}</li>
          </ul>
      </div>

  <!--訓練表主要內容-->
  <div class="plan_scroll">
      <section  v-for="week in 8" id="plan_main_content">
        <span class="week_mark title2">W{{week}}</span>
          <plan-perweek></plan-perweek>         <!--***計畫表本體component***-->
      </section>
  </div>

      
    <div class="plan_button">
        <button class="bluebutton title3">重新製作</button>
        <button class="orangebutton title3">儲存</button>
    </div>
</section>
    `

});


// ***計畫表本體*** //
Vue.component('plan-perweek',{
    data(){
        return{
          planicon: true,
          swimtime: true,
          runtime: true,
          biketime: true,
        }
      },
    template:`
    
    <ul>
        <li  v-for="week in 7" class="plan_eachday">
                <div>
                    <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                    <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                    <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                </div>
                <div class="plan_exe">
                    <p v-show="swimtime">Swim <span>1hr</span></p>
                    <p v-show="biketime">Bike <span>.5hr</span></p>
                    <p v-show="runtime"> Run  <span>.3hr</span></p>
                </div>
        </li>
        
    </ul>
    `
})


new Vue({
  el: '#plan_wrapper',
  data(){
    return{
        memberinfo:
            {
                photo:"./src/images/img/plan/memberphoto.png",
                membername:"maggie",
                racedate:20221127,
                week:12
            },
      }
  },
});









