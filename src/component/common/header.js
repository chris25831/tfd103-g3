


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

        <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
        

        <ul class="header_menu" :class="{slidedown:slide}">
          <li class="head_title">
              <a class="info title3" href="">三鐵資訊</a>
              <ul class="head_subtitle">
              <a><li>近期賽事</li></a>
              </ul>
          </li>
          <li class="head_title"><a href="" class="title3">訓練課程</a>
            <ul class="head_subtitle">
              <a><li>團練課程</li></a>
              <a><li>個人教練</li></a>
              <a><li>營養菜單</li></a>
            </ul>
          </li>
          <li class="head_title"><a href="" class="title3">討論區</a>
            <ul class="head_subtitle">
              <a><li>閒聊</li></a>
              <a><li>心得</li></a>
              <a><li>裝備</li></a>
              <a><li>問題</li></a>
            </ul>
          </li>
          <li class="head_title"><a href="" class="title3">訂製計畫表</a></li>
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
        
        <a class="header_icon "href=""><i class="fas fa-user fa-xl"></i></a>
        <a class="header_icon href=""><i class="fas fa-shopping-basket fa-xl"></i></a>
    </div>  
`,

  data(){
    return{
      slide: true,
      hamBar_close:false,
    }
  },

  methods: {
    slideDown(){
      
        this.slide = !this.slide
        // this.hamBar_close = !this.hamBar_clos
      
    },
  },
});

let header = new Vue({
    el:'#header',
    data(){
      return{
        active: false,
        screenWidth: document.documentElement.clientWidth,
        
      }
    },
    watch:{
      screenWidth(val){ //監聽螢幕寬度變化
      //  console.log(this.screenWidth);
        },
      },
    created(){
      window.addEventListener("scroll", this.handleScroll);
    },
    mounted() {
      var _this = this;
      window.onresize = function(){ // 定義視窗大小變更通知事件
          _this.screenWidth = document.documentElement.clientWidth; //視窗寬度
      };
  },
    methods:{
      handleScroll(){
        this.active = window.scrollY > 0 ? true:false
      }
    },

    
});



// var headerInformation = document.querySelectorAll(".head_title")[0];
// var headerClass = document.querySelectorAll(".head_title")[1];
// var headerForum = document.querySelectorAll(".head_title")[2];
// var headerPlan =  document.querySelectorAll(".head_title")[3];

// var headerInformationSubmenu = "<ul><li>近期賽事</li></ul>"
// var headerClassSubmenu = "<ul><li>團練課程</li><li>個人教練</li><li>營養菜單</li></ul>"
// var headerForumSubmenu = "<ul><li>閒聊</li><li>心得</li><li>裝備</li><li>問題</li></ul>"
// var headerPlanSubmenu = "<ul>訂製個人計畫表</ul>"


// var screenWidth = document.body.offsetWidth;
// if(screenWidth <= 767 ){
//   headerInformation.insertAdjacentHTML("beforeend",headerInformationSubmenu);
//   headerClass.insertAdjacentHTML("beforeend",headerClassSubmenu);
//   headerForum.insertAdjacentHTML("beforeend",headerForumSubmenu);
//   headerPlan.insertAdjacentHTML("beforeend",headerPlanSubmenu);
// } else if (screenWidth > 767) {
//   headerInformationSubmenu.remove();
//   headerClassSubmenu.remove();
//   headerInformationSubmenu.remove();
//   headerInformationSubmenu.remove();
// } 



