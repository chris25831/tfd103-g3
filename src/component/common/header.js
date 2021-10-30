


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
          <li>
              <a class="info title3" href="">三鐵資訊</a>
              <!--<a class="secondChoice title3" href="">賽程資訊</a>-->
          </li>
          <li><a href="" class="title3">訓練課程</a></li>
          <li><a href="" class="title3">討論區</a></li>
          <li><a href="" class="title3">訂製計畫表</a></li>
        </ul>
        
        <a class="header_icon "href=""><i class="fas fa-user fa-xl"></i></a>
        <a class="header_icon href=""><i class="fas fa-shopping-basket fa-xl"></i></a>
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


