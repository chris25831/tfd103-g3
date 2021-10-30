Vue.component("manage-footer", {
    template: `
    <div id="manage-footer-wrapper">
          
        <div id="footer-logo-wrapper">
            <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
        </div>

        <div class="manager-sitemap">
            
            <ul>
                <li v-for="info in information">{{info}}</li>
            </ul>
            <ul>
                <li v-for="course in classes">{{course}}</li>
            </ul>
            <ul>
                <li v-for="article in club">{{article}}</li>
            </ul>
        </div>

        <div class="contact-us">
            <p>聯絡我們<br>
            (02)2470-8053</p>
            <div class="social-media">
                <a href=""><i class="fa-brands fa-facebook-square fa-2xl" ></i></a>
                <a href=""><i class="fa-solid fa-envelope fa-2xl"></i></a>
                <a href=""><i class="fa-brands fa-line fa-2xl"></i></a>
            </div>
        </div>

        <div>
            <p class="small">
                本網站為緯育TibaMe前端設計工程師班第70期第__組學員專題成果作品，本平台僅供學習、展示之用。參考資源：＿＿＿＿＿＿＿＿（請填入你們參考的網站）。若有侵權疑慮，您可以私訊 [ 緯育TibaMe ]，後續會由專人協助處理
            </p>
        </div>
    </div> 
    `,
    data() {
        return {
            information:['近期賽事','三鐵資訊'],
            classes:['團練課程','個人教練','營養菜單'],
            club:['心得','問題','裝備', '閒聊'],
        };
    },
});

new Vue({
    el:'#manage-footer',
    data: {},
});