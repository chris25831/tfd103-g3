


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
  
          <a class="logo"  href=" index.html" ><img src="./src/images/icons/logo.svg"/></a>
          
  
          <ul class="header_menu" :class="{slidedown:slide}">
            <li class="head_title">
                <a class="info title3" href="information.html">三鐵資訊</a>
                <ul class="head_subtitle head_activity">
                <a href="race-home.html"><li>近期賽事</li></a>
                </ul>
            </li>
            <li class="head_title"><a href="classes-home.html" class="title3">訓練課程</a>
              
            </li>
            <li class="head_title"><a href="forum-home.html" class="title3">討論區</a>
             
            </li>
            <li class="head_title"><a href="plan-temporary.html" class="title3">訂製計畫表</a></li>
            
           
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
          <a v-if="logouthref" class="header_icon" @click="logout" href="#">登出</a>
          <a class="header_icon" href="member-login.html"><i class="fas fa-user fa-xl"></i></a>
          <!--購物車-->
          <a class="header_icon" href="shopcart-home.html"><i class="fas fa-shopping-basket fa-xl"></i></a>
      </div>  
  `,
  
    data(){
      return{
        slide: false,
        hamBar_close:false,
        logouthref:false,
        memberID: ""
      }
    },
    mounted(){
        axios({            
            method: "POST",
            url: "/php/loginCheck.php",
          }).then((response) => {
              // console.log(response.data)
                if(response.data === ""){
                    console.log('未登入')
                      // alert('請先登入，將前往登入頁'); 
                      // location.href = 'Login.html';
                  }else{
                      console.log("有登入")
                      console.log(response.data)
                      this.logouthref = true;
                      this.memberID = response.data
                  } 
                  
                }).catch(function(error){
                  console.log("錯誤");
                })    
    },
    methods: {
      
           
        
       
       
    
      slideDown(){
        this.slide = !this.slide
        this.hamBar_close = !this.hamBar_close
      },
      logout(){
          if(this.memberID != ""){
              let MemberID = this.memberID;
          }
          axios({            
            method: "POST",
            url: "/php/logout.php",
            data:{},  
            }).then((response) => {
                if(response.data){
                    alert(); 
                    this.logouthref = false;
                    this.memberID = "";
                    location.href = 'index.html';
                }else{
                   alert('登出失敗QQ請重新執行'); 
                }              
            }).catch((error)=>{
                console.log("錯誤")
            });
      }
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
