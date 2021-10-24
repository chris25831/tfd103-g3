// Vue.component("my-footer", {

//     template: `<div id="footer_wrapper">
      
//     <div id="footerlogo">
//         <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
//     </div>

//     <div class="sitemap">
        
//         <ul>
//             <p>三鐵資訊</p>
//             <li>近期賽程</li>
//             <li>三鐵資訊</li>
//         </ul>
//         <ul>
//             <p>訓練課程</p>
//             <li>團練課程</li>
//             <li>個人教練</li>
//             <li>營養菜單</li>
//         </ul>
//         <ul>
//             <p>討論區</p>
//             <li>心得</li>
//             <li>問題</li>
//             <li>裝備</li>
//             <li>閒聊</li>
//         </ul>
//     </div>

//     <div class="contactus">
//         <p>聯絡我們<br>
//         (02)2470-8053</p>
//         <div>
//             <a href=""><i class="fa-brands fa-facebook-square fa-2xl" ></i></a>
//             <a href=""><i class="fa-solid fa-envelope fa-2xl"></i></a>
//             <a href=""><i class="fa-brands fa-line fa-2xl"></i></a>
//         </div>
//     </div>

//     <div>
//         <p class="small">
//             本網站為緯育TibaMe前端設計工程師班第70期第__組學員專題成果作品，本平台僅供學習、展示之用。參考資源：＿＿＿＿＿＿＿＿（請填入你們參考的網站）。若有侵權疑慮，您可以私訊 [ 緯育TibaMe ]，後續會由專人協助處理
//         </p>
//     </div>
// </div>
//     `,
// });
let footer = new Vue({
    el:'#footer',
  
    components:{
        'my-footer':{
        mounted(){

            


        },
        data(){
            return {
                information:['近期賽事','三鐵資訊'],
                classes:['團練課程','個人教練','營養菜單'],
                club:['心得','問題','裝備', '閒聊'],
              
            }
        },
        template:
            `<div id="footer_wrapper">
          
            <div id="footerlogo">
            
                <a class="logo" href="" ><img src="./src/images/icons/logo.svg"/></a>
            </div>
        
            <div class="sitemap">
                
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
        
            <div class="contactus">
                <p>聯絡我們<br>
                (02)2470-8053</p>
                <div>
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
        </div>`
    }
  }
    
});