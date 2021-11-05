Vue.component("manage-header", {
    template: `
        <div class="" id="manage-header-wrapper">
            <div class="logo-wrapper">
                <a class="logo" href="#" onclick="window.open('index.html', '_self')" >
                    <img src="./src/images/icons/logo.svg"/>
                </a>
            </div>
            <nav class="manage-nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a onclick="window.open('manage-employees.html', '_self')" href="../../../manage-employees.html" class="manage-link">後台人員管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link">賽程管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link">課程管理</a>
                    </li>
                    <li class="nav-item">
                        <a onclick="window.open('manage-forum-home.html', '_self')" href="../../../manage-forum-home.html" class="manage-link">討論區管理</a>
                    </li>
                    <li class="nav-item">
                        <a onclick="window.open('manage-member-personal-info.html', '_self')" href="../../../manage-member-personal-info.html" class="manage-link">會員管理</a>
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
