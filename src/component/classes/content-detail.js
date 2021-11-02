// contentdetail-1 ==> 團體課程&營養菜單
Vue.component("contentdetail-1",{
    props:["classTitle", "classid", "check", "trainer","classLocation", "nutrients"],
    template:`
        <div class="classcontentword1">
            <div class="contentdetail">
                <p class="title2">{{classTitle}}</p>
                <p>
                    <span>課程編號：{{classid}}</span><br>
                    <span>課程名稱：{{classTitle}}</span><br>
                    <span v-if="check == 'G'">授課教師:{{trainer}}<br></span>
                    <span v-else-if="check =='M'">規劃營養師:{{trainer}}</span>
                    <span v-if="check == 'G'">課程地點:{{classLocation}}</span>
                </p>
                <button class="title3 orangebutton">加入購物車</button>
                <button class="title3">直接結帳</button>
            </div>
            <div class="contentintro">
                <!-- 標題 -->
                <p v-if="check == 'G'">課程介紹</p>
                <p v-else>菜單介紹</p>
                <!-- 內文 -->
                <p>
                    <p v-if="check == 'M'" class="nutrients small">
                        <span>熱量<br>{{nutrients.cal}}cal</span> 
                        <span>蛋白質<br>{{nutrients.protein}}g</span> 
                        <span>醣類<br>{{nutrients.carb}}g</span> 
                        <span>脂肪<br>{{nutrients.fat}}g</span> 
                    </p>

                </p>
            </div>
        </div>
    `,
    
});

// contentdetail-2 ==> 個人教練
Vue.component("contentdetail-2",{
    props:[],
    template:`
        <div class="classcontentword">
            <div class="contentdetail">
                <p class="title2">{{classTitle}}</p>
                <p>
                    <span>課程編號：{{classID}}</span><br>
                    <span>課程名稱：{{classTitle}}</span><br>
                    <span></span><br>
                    <span>{{classLocation}}</span>
                </p>
                <button class="title3">加入購物車</button>
                <button class="title3">直接結帳</button>
            </div>
            <div class="contentintro">
                <!-- 標題 -->
                <p></p>
                <!-- 內文 -->
                <p>
                    <a href="">
                        <i class="fab fa-2x fa-instagram"></i>
                    </a>  
                </p>
            </div>
        </div>
    `,
});


methods:{

}