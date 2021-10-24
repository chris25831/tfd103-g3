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
})



Vue.component('plan-section',{
  data(){
    return{
      planicon: true,
      swimtime: true,
      runtime: true,
      biketime: true,
    }
  },
  template:`
  <section>
  <!--天數head-->
      <div id="plan_week">
          <ul>
              <li v-for="day in 7" class="title2">D{{day}}</li>
          </ul>
      </div>

  <!--訓練表主要內容-->
  
      <section v-for="week in 3" id="plan_main_content">
          <span class="week_mark">W1</span>
          <ul>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              <li class="plan_eachday">
                      <div>
                          <span v-show="planicon"><i class="fa-solid fa-person-biking"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-running"></i></span>
                          <span v-show="planicon"><i class="fa-solid fa-person-swimming"></i></span>
                      </div>
                      <div class="plan_exe">
                          <p v-show="swimtime">Swim- <span>1hr</span></p>
                          <p v-show="runtime"> Run-  <span>1hr</span></p>
                          <p v-show="biketime">Bike- <span>1hr</span></p>
                      </div>
              </li>
              
              
          </ul>
          
      </section>
      <div class="plan_button">
          <button>重新製作</button>
          <button>儲存</button>
      </div>
  
</section>
    `

});



new Vue({
  el: '#plan_wrapper',
  data(){
    return{

      }
  },
});









