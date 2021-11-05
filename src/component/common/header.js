


Vue.component("my-header", {

template: `
    <div id="header_wrapper">
       
       <main class="hamBar">
          <div class="btn" @click="slideDown" :class="{hamBar_close:hamBar_close}" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </main>

        <a class="logo" onclick="window.open('./index.html', '_self')" href="index.html" ><img src="./src/images/icons/logo.svg"/></a>
        

        <ul class="header_menu" :class="{slidedown:slide}">
          <li class="head_title">
              <a class="info title3" href="information.html">三鐵資訊</a>
              <ul class="head_subtitle head_activity">
              <a href="race-home.html"><li>近期賽事</li></a>
              </ul>
          </li>
          <li class="head_title"><a onclick="window.open('./classes-home.html', '_self')" href="classes-home.html" class="title3">訓練課程</a>
            <ul class="head_subtitle">
              <a><li>團練課程</li></a>
              <a><li>個人教練</li></a>
              <a><li>營養菜單</li></a>
            </ul>
          </li>
          <li class="head_title"><a onclick="window.open('./forum-home.html', '_self')" href="forum-home.html" class="title3">討論區</a>
            <ul class="head_subtitle">
              <a><li>閒聊</li></a>
              <a><li>心得</li></a>
              <a><li>裝備</li></a>
              <a><li>問題</li></a>
            </ul>
          </li>
          <li class="head_title"><a onclick="window.open('./plan-temporary.html', '_self')" href="plan-temporary.html" class="title3">訂製計畫表</a></li>
          
         
            <ul class="head_subtitle head_contactus">
                <li>
                  <p class="small" >聯絡我們<br>
                  (02)2470-8053</p>
                </li>
                <li>
                  <a href=""><i class="fa-brands fa-facebook-square fa-2xl" ></i></a>
                  <a href=""><i class="fa-solid fa-envelope fa-2xl"></i></a>
                  <a href=""><i class="fa-brands fa-line fa-2xl"></i></a>
                </li>
                <li>
                  <p class="small">
                  本網站為緯育TibaMe前端設計工程師班第70期第__組學員專題成果作品，本平台僅供學習、展示之用。參考資源：＿＿＿＿＿＿＿＿（請填入你們參考的網站）。若有侵權疑慮，您可以私訊 [ 緯育TibaMe ]，後續會由專人協助處理
                  </p>
                </li>
            </ul>
          
        </ul>
        <!--會員-->
        <a class="header_icon" onclick="window.open('./member-login.html', '_self')" href="#"><i class="fas fa-user fa-xl"></i></a>
        <!--購物車-->
        <a class="header_icon" onclick="window.open('./shopcart-home.html', '_self')" href="#"><i class="fas fa-shopping-basket fa-xl"></i></a>
    </div>  
`,

  data(){
    return{
      slide: false,
      hamBar_close:false,
    }
  },

  methods: {
    slideDown(){
      this.slide = !this.slide
      this.hamBar_close = !this.hamBar_close
    },
  },
});

let header = new Vue({
    el:'#header',
    data(){
      return{
        active: false,
      }
    },
    created(){
      window.addEventListener("scroll", this.handleScroll);
    },
 
    methods:{
      handleScroll(){
        this.active = window.scrollY > 0 ? true:false
      }
    },

    
})


