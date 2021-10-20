
Vue.component("my-header", {
template: `<header>
    <ul id="header_inside">
        <li>
         <img src="./src/images/icons/logo.svg"/>
        </li>
        <li>
        <a  href="">三鐵資訊</a>
        <a  href="">賽程資訊</a>
        </li>
        
        <li><a href="">訓練課程</a></li>
        <li><a href="">討論區</a></li>
        <li><a href="">訂製計畫表</a></li>
        
        <li class="icon">
            <a href=""><i class="fas fa-user"></i></a>
            <a href=""><i class="fas fa-shopping-basket"></i></a>
        </li>
    </ul>  
</header>`,
});

let vm = new Vue({
    el:'#header',
    data: {
    
    },
    methods: {
        
   }
    
})
