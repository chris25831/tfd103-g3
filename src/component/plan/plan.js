//====== *** *** *** *** ======//

// ***lightbox*** //
Vue.component('racedate',{
template:`
    <div>

            <button class="previouspage">
                <span class="arrow">
                </span>
            </button>
            <h1 class="title2">計畫表使用說明</h1>
            <hr>
            <p>
                *此運動計畫表適用於最少八週以上之訓練時程
                <br>
                *在訓練過程中務必關切自身健康狀況，如過程中感到無法負荷，可自行調整當天運動時長
            </p>
            <button @click="content = 'week'" class="orangebutton">開始</button>

    </div>
    `
});


Vue.component('week',{
    template:`
        <div>
                <button @click="content = 'racedate'" class="previouspage">
                    <span class="arrow">
                    </span>
                </button>
                  <h1 class="title2">想制定幾週的訓練計畫呢？</h1>
                  <hr>
                  <seletor>
                      <option>16</option>
                      <option>12</option>
                      <option>8</option>
                  </seletor>
                  <button @click="content = 'week'" class="orangebutton">開始</button>

        </div>
        `
    });

const question = new Vue({
    el: '#plan_question',
   data(){
       return{
           content: 'racedate',
       }
   }

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
      <section  v-for="week in 12" id="plan_main_content">
        <span class="week_mark title2">W1</span>
          <plan-perweek></plan-perweek>         <!--***計畫表本體component***-->
      </section>
  </div>

      
    <div class="plan_button">
        <button class="graybutton title3">重新製作</button>
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
                <p v-show="swimtime">Swim <span>{{}}hr</span></p>
                <p v-show="biketime">Bike <span>{{}}hr</span></p>
                <p v-show="runtime"> Run  <span>{{}}hr</span></p>
                </div>
        </li>
        
    </ul>
    `
})


new Vue({
  el: '#plan_wrapper',
  data(){
    return{

      }
  },
});









