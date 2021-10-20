
Vue.component("my-header", {
template: `<header>
    <ul id="header_wrapper">
        <li>
            <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
        </li>

        
        <li>
            <a class="info" href="">三鐵資訊</a>
            <a class="secondChoice" href="">賽程資訊</a>
        </li>
        <li><a href="">訓練課程</a></li>
        <li><a href="">討論區</a></li>
        <li><a href="">訂製計畫表</a></li>
        <li>
            <a href=""><i class="fas fa-user fa-xl"></i></a>
            <a href=""><i class="fas fa-shopping-basket fa-xl"></i></a>
        </li>

    </ul>  
</header>`,
});

let header = new Vue({
    el:'#header',

    
})
