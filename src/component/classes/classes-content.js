// 購物車localStorage宣告
var storage = localStorage;
window.addEventListener('load', doFirst);
function doFirst(){
    if(storage['addCartList'] == null){
        storage['addCartList'] = '';    //storage.setItem('addCartList','');
    }
}

// contentdetail-1 ==> 團體課程&營養菜單
Vue.component("contentdetail-1",{
    props:["classTitle", "classid", "check", "trainer","classLocation", "price", "nutrients", "intro","img"],
    template:`
        <div class="classcontentword1">
            <div class="contentdetail">
                <p class="title2">{{classTitle}}</p>
                <p>
                    <span>課程編號：{{classid}}</span><br>
                    <span>課程名稱：{{classTitle}}</span><br>
                    <span v-if="check == 'G'">授課教師：{{trainer}}<br></span>
                    <span v-else-if="check =='M'">規劃營養師：{{trainer}}<br></span>
                    <span v-if="check == 'G'">課程地點：{{classLocation}}<br></span>
                    <span v-if="check == 'G'" class="title3">課程費用：$ {{price}}</span>
                    <span v-if="check == 'M'" class="title3">菜單價目：$ {{price}}</span>
                </p>
                <div>
                    <button class="title3 yellowbutton" @click="addCart">加入購物車</button>
                    <button class="title3 orangebutton" @click="payNow">直接結帳</button>
                </div>
            </div>
            <div class="contentintro">
                <!-- 標題 -->
                <p v-if="check == 'G'" class="title3">課程介紹</p>
                <p v-else class="title3">菜單介紹</p>
                <!-- 內文 -->
                <p>
                    <p v-if="check == 'M'" class="nutrients small">
                        <span>熱量<br>{{nutrients.cal}}cal</span> 
                        <span>蛋白質<br>{{nutrients.protein}}g</span> 
                        <span>醣類<br>{{nutrients.carb}}g</span> 
                        <span>脂肪<br>{{nutrients.fat}}g</span> 
                    </p>
                    <span v-for="i in intro">{{i}}<br></span>
                </p>
            </div>
        </div>
    `,
   

    methods:{
        // 加入購物車
        addCart(){
            
            doFirst();
            console.log(this.img[0]);
            // 創立物件
            let item = {
                comclassTitle : this.classTitle,
                comclassid : this.classid,
                comtrainer : this.trainer,
                comprice : this.price,
                comimg: this.img[0], 
            }
            
            // 判斷地點是否傳入
            let comcheck = this.check;
            if(comcheck == "G"){
                item.comclassLocation = this.classLocation;
            }else{
                item.comclassLocation ="";
            }
            // console.log(item.comclassLocation);

            // 存入localstorage
            if(storage[this.classid]){
                alert('商品已下單');
            }else{
                
                // 刪除一開始的undefined
                if(storage['addCartList'] == ""){
                    storage['addCartList'] = `${this.classid}`;
                }else{
                    storage['addCartList'] += `,${this.classid}`;
                }

                storage[this.classid] = JSON.stringify(item);
                alert('已加入購物車!');
            }

        },

        // 直接結帳
        payNow(){
            this.addCart();

            // 跳轉結帳頁面
            window.location.href="../../../shopcart-home.html";  
        },
        
    },
    
});

// contentdetail-2 ==> 個人教練
Vue.component("contentdetail-2",{
    props:["classTitle", "trainer", "en_trainer", "expertise", "tclass","license"],
    template:`
        <div class="classcontentword2">
                <div>
                    <p class="title2">{{trainer}}<span class="article"> - 個人教練</span></p>
                    <p>{{en_trainer}}</p>
                    <!-- 專長 -->
                    <p class="expertise">
                        <span v-for="exp in expertise">#{{exp}}</span>    
                    </p>
                    <!-- 私課 -->
                    <div v-if="tclass.name !==''" class="tclass">
                        <p>私人課程</p>
                        <span>開班課程：{{tclass.name}}</span><br>
                        <span>開始日期：{{tclass.date}}</span><br>
                        <span>課程費用：{{tclass.price}}</span><br>
                    </div>
                </div>
                <!-- 證照 -->
                <div class="license">
                    <p>證照</p>
                    <span v-for="lic in license">{{lic}}<br></span>
                </div>
                <br>
                <div>
                    <button  v-if="tclass.name !==''" class="title3 yellowbutton">加入購物車</button>
                    <button  v-if="tclass.name !==''" class="title3 orangebutton">立即報名</button>
                </div>
        </div>
    `,
});


