

let footer = new Vue({
    el:'#footer',
    data:{
        information:['近期賽事','三鐵資訊'],
        tran:['團練課程','個人教練','營養菜單'],
        club:['心得','問題','裝備', '閒聊'],
    },
    template:`<footer class="haha">

    <div id="footer_wrapper">
        <div id="footerlogo">
            <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
        </div>

        <div class="sitemap">
            
            <ul>
                <p2>三鐵資訊<p2>
                <li v-for="info in information">{{info}}</li>
            </ul>
            <ul>
                <p2>訓練課程<p2>
                <li v-for="traning in tran">{{traning}}</li>
            </ul>
            <ul>
                <p2>討論區<p2>
                <li v-for="arti in club">{{arti}}</li>
            </ul>
        </div>

        <div class="contactus">
            <p>聯絡我們</p>
            <p>(02)2470-8053</p>

            
                <a href=""><i class="fa-brands fa-facebook-square fa-xl" ></i></a>
                <a href=""><i class="fa-solid fa-envelope fa-xl"></i></a>
                <a href=""><i class="fa-brands fa-line fa-xl"></i></a>
            
        </div>

        <div>
            <p>
                本網站為緯育TibaMe前端設計工程師班第70期第__組學員專題成果作品，本平台僅供學習、展示之用。參考資源：＿＿＿＿＿＿＿＿（請填入你們參考的網站）。若有侵權疑慮，您可以私訊 [ 緯育TibaMe ]，後續會由專人協助處理
            </p>
        </div>
    </div>
</footer>`,
});