// onclick="window.open('index.html', '_self')"
Vue.component("manage-header", {
    template: `
        <div class="" id="manage-header-wrapper">
            <div class="logo-wrapper">
                <div class="logo">
                    <img src="./src/images/icons/logo.svg"/>
                </div>
            </div>
            <nav class="manage-nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="./manage-class-home.html" class="manage-link">課程管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="./manage-forum-report.html" class="manage-link">討論區管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="./manage-member-personal-info.html" class="manage-link">會員管理</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="manage-link" v-if="logoutHref" @click="logout">登出</a>
                    </li>
                </ul>
            </nav>    
        </div>  
    `,
    data(){
        return {
            logoutHref: false,
        }
    },
    methods: {
        logout(){
            if(this.memberID != ""){
                let MemberID = this.memberID;
            }
            axios({            
                method: "POST",
                url: "./php/logout.php",
                data:{},  
                })
                .then((response) => {
                    if(response.data){
                        alert("已登出"); 
                        this.logoutHref = false;
                        this.memberID = "";
                        location.href = 'manage-login.html';
                    }else{
                        alert('登出失敗QQ請重新執行'); 
                    }              
                })
                .catch((error)=>{
                    console.log(error);
                    console.log("錯誤")
                });
        }
    },
    mounted(){
        axios({            
            method: "POST",
            url: "./php/loginCheck.php",
        }).then((response) => {
        // console.log(response.data)
            if(response.data === ""){
                console.log('未登入')
                    // alert('請先登入，將前往登入頁'); 
                    // location.href = 'Login.html';
            }else{
                console.log("有登入")
                console.log(response.data)
                this.logoutHref = true;
                console.log(this.logoutHref);
                this.memberID = response.data
            } 
        }).catch(function(error){
            console.log("錯誤");
        })    
    },   
});

let header = new Vue({
    el:'#manage-header',
    
})
