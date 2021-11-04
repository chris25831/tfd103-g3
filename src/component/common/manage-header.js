Vue.component("manage-header", {
    template: `
        <div class="" id="manage-header-wrapper">
            <div class="logo-wrapper">
                <a class="logo" href="">
                    <img src="./src/images/icons/logo.svg"/>
                </a>
            </div>
            <nav class="manage-nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="../../../manage-employees.html" class="manage-link">後台人員管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link">賽程管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link">課程管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="../../../manage-forum-home.html" class="manage-link">討論區管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="../../../manage-member-personal-info.html" class="manage-link">會員管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link">登出</a>
                    </li>
                </ul>
            </nav>    
        </div>  
    `,
});

let header = new Vue({
    el:'#manage-header',   
})
