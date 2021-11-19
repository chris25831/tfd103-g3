
let footer = new Vue({
    el:'#footer',
  
    components:{
        'my-footer':{
        
       
        template:
            `<div id="footer_wrapper">
          
                <div id="footerlogo">
                
                    <a class="logo" href="./index.html" ><img src="./src/images/icons/logo.svg"/></a>
                </div>
        
                <div class="sitemap">
                    
                    <ul>
                        <li>
                            <a href="./race-home.html">近期賽事</a>
                        </li>
                        
                        
                        <li>
                            <a href="./information.html">三鐵資訊</a>
                        </li>
                       
                    </ul>
                    <ul>
                       
                            <li>
                                <a href="./classes-home.html">團練課程</a>
                            </li>
                            <li>
                                <a href="./classes-home.html">個人教練</a>
                            </li>
                            <li>
                                <a href="./classes-home.html">營養菜單</a>
                            </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <a href="./forum-home.html">心得</a>
                        </li>
                        <li>
                            <a href="./forum-home.html">問題</a>
                        </li>
                        <li>
                            <a href="./forum-home.html">裝備</a>
                        </li>
                        <li>
                            <a href="./forum-home.html">閒聊</a>
                        </li>
                    </ul>
                </div>
        
                <div class="contactus">
                    <p>聯絡我們<br>
                    (02)2470-8053</p>
                    <div>
                        <a href="./facebook.com"><i class="fa-brands fa-facebook-square fa-2xl" ></i></a>
                        <a href=""><i class="fa-solid fa-envelope fa-2xl"></i></a>
                        <a href=""><i class="fa-brands fa-line fa-2xl"></i></a>
                    </div>
                </div>
        
                <div class="footer_tibame">
                    <p class="small">
                        本網站為緯育TibaMe前端設計工程師班第70期第__組學員專題成果作品，本平台僅供學習、展示之用。參考資源：＿＿＿＿＿＿＿＿（請填入你們參考的網站）。若有侵權疑慮，您可以私訊 [ 緯育TibaMe ]，後續會由專人協助處理
                    </p>
                </div>
        </div>`
    }
  }
    
});