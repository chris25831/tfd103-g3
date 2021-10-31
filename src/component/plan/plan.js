//====== *** *** *** *** ======//


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









