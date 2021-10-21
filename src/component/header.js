
Vue.component("my-header", {
template: `
    <ul id="header_wrapper">
        <li>
            <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
        </li>

        
        <li>
            <a class="info title3" href="">三鐵資訊</a>
            <a class="secondChoice title3" href="">賽程資訊</a>
        </li>
        <li><a href="" class="title3">訓練課程</a></li>
        <li><a href="" class="title3">討論區</a></li>
        <li><a href="" class="title3">訂製計畫表</a></li>
        <li>
            <a href=""><i class="fas fa-user fa-xl"></i></a>
            <a href=""><i class="fas fa-shopping-basket fa-xl"></i></a>
        </li>

    </ul>  
`,
});

let header = new Vue({
    el:'#header',

    
})
