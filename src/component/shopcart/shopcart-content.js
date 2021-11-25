// 購物車
var storage = localStorage;
// 清掉input快取
window.addEventListener("load",function(){
 let textpoint = document.getElementById("textpoint");

    if(textpoint !== null){
        textpoint.value = 0;
        // console.log("重新加載");
    }
})

Vue.component("shopcart-content",{
    props:["checksop","userid","point"],
    template:`
        <div class="orderclass">
            <div class="classlist">
                <div>
                    <input type="checkbox" v-if="checksop == 0 && itemList.length > 0" id="allchecked" @click="allCheck();changeItemLength()" checked> 
                </div>
                <ul class="itemlist">
                    <li class="itemlist_li" v-for="(item, index) in itemList" :id="item.comclassid">
                        <input type="checkbox"  v-if="checksop == 0"  name="itemcheck[]" :id="'orderitem-' + index" @click="changeItemLength()" checked>
                        <div>
                            <img :src="item.comimg" alt="">
                        </div>
                        <!-- 名稱 -->
                        <p class="comclasstitle">
                            <a  @click="gotodetail(item.comclassid)">{{item.comclassTitle}}</a>
                        </p>
                        <div class="comclassdetail" v-if="checksop == 1">
                            <!-- 課程編號 -->
                            <span>課程編號：{{item.comclassid}}</span>
                            <!-- 教師 -->
                            <span>授課教師：{{item.comtrainer}}</span>
                            <!-- 上課地點 -->
                            <span>上課地點：{{item.comclassLocation}}</span>
                        </div>
                        <!-- 價錢 -->
                        <p  class="comprice">$ {{item.comprice}}TWD</p>
                        <!-- 刪除 -->
                        <button v-if="checksop == 0" @click="deleteItem(item.comclassid)"><i class="fas fa-minus"></i></button>       
                        <hr class="itemhr">
                    </li>
                </ul>
            </div>
            <!-- amount -->
            <div class="amount">
                <p></p>
                <div>
                    <p>
                        <span>總計</span><br>
                        <span>總金額</span>
                    </p>
                    <p>
                        <span>{{checkitemlength}}項商品</span><br>
                        <span>$&nbsp;{{amount}}&nbsp;TWD</span>
                    </p>
                </div>
                <hr>
                <div class="point">
                    <p>
                        <span v-if="checksop == 0">使用點數</span><br><br>
                        <span>折抵金額</span>
                    </p>
                    <p>
                        <input type="text" v-if="checksop == 0 && userid == 'member'" id="textpoint"  @keyup="maxPoint()"><br>
                        <span  v-if="checksop == 0 && userid == 'member'" class="small">剩餘點數：{{point}}</span><br>
                        <span>$&nbsp;{{count}}&nbsp;TWD</span>
                    </p>
                </div>
                <hr>
                <div>
                    <p>
                        <span>合計</span>
                        <span>$&nbsp;{{total}}&nbsp;TWD</span>
                    </p>

                <button v-if="checksop == 0" class="title3 orangebutton" @click="goToPay()">前往結帳</button>
                </div>
            </div>
            <!-- checkout -->
            <div  v-if="checksop == 1" class="golinepay">
                <p></p>
                <img src="./src/images/icons/ECPay.png" alt="#">
                <p>使用綠界進行付款</p>
                <button class="orangebutton" @click="goecpay">ECpay</button>
            </div>
        </div>
    `,
    data: function(){
        return{
            itemList:"",
            amount:0,
            count:0,  
            total:0,
            checkitemlength:0,
            // 確定結帳頁面
            comclassid:"",
            comtrainer:"",
            comclassLocation:"",

        };
        
    },

    // 初始值
    created() {
        // 判斷頁面
        if(this.checksop == 0){

            let allItem =  JSON.parse(storage['addCartList']);
            console.log(allItem);
    
            this.itemList = allItem;
    
            // amount計算
            for(let i =0; i < allItem.length; i++){
                // console.log(allItem[i]);
                let price = parseInt(allItem[i].comprice);
                // console.log(price);
                this.amount += price;
            }
            this.total = this.amount - this.count;
    
            // 設定check預設值
            this.checkitemlength = this.itemList.length;

            // 建立與重設
            if(storage['surePayList'] == null){
                storage['surePayList'] = "";    
            }else{
                storage['surePayList'] = "";    
            }
            if(storage['surePayAmount'] == null){
                storage['surePayAmount'] = "";    
            }else{
                storage['surePayAmount'] = "";    
            }

        }else{
            let allItem =  JSON.parse(storage['surePayList']);
            console.log(allItem);
    
            this.itemList = allItem;
            let allItem_amount =  JSON.parse(storage['surePayAmount']);
            console.log(allItem_amount);

            this.checkitemlength = allItem_amount.itemlength;
            this.amount = allItem_amount.amount;
            this.count = allItem_amount.count;
            this.total = allItem_amount.total;
        }

    },

    methods: {
        // 詳細商品連結
        gotodetail(id){
      
            location.assign(`https://tibamef2e.com/tfd103/g3/tfd103-g3/classes-content.html?classid=${id}`);
            
        },

      
        // ***amount***
        calTotal(){
            if(this.amount - this.count > 0){

                this.total = this.amount - this.count;
            }else{

                this.total = 0;
            }
        },

        maxPoint(){
            let textpoint = document.getElementById("textpoint");
            let pointval = parseInt(textpoint.value);
            // console.log(pointval);
            let check =  /\d/ ;

            if(check.test(pointval)){

                if(pointval <= this.point){
                    this.count = pointval; 
    
                }else{

                    textpoint.value = this.point;
                    this.count = this.point;
                }

                this.calTotal();
            }else{
                // console.log("wrong");
                $("#textpoint").val("");
                this.count = 0;
                this.calTotal();
            }
        },

        goToPay(){

            // 判斷會員
            if(this.userid == "visitor"){
               
                let checkin = confirm("請登入會員");

                if(checkin){
                    location.assign("https://tibamef2e.com/tfd103/g3/tfd103-g3/member-login.html");
                }

            }else{

                let itemList= [];
                let amountdetail= {
                    itemlength:this.checkitemlength,
                    amount:this.amount,
                    count:this.count,
                    total:this.total,
    
                };
    
                let checkid = $("input[name ='itemcheck[]']:checked");
    
                // 打包商品
                for(let i=0; i < checkid.length; i++){
                    let  idnum = checkid[i].id.substring(10);
                    // console.log(idnum);
                    
                    if(storage['surePayList'] == ""){
    
                        itemList.push(this.itemList[idnum]);
                        storage['surePayList'] = JSON.stringify(itemList);
    
                    }else{
                        let get_itemList = JSON.parse(storage['surePayList']);
    
                        get_itemList.push(this.itemList[idnum]);
                        storage['surePayList'] = JSON.stringify(get_itemList);
                    }
                }
    
                // 打包計算
                storage['surePayAmount'] = JSON.stringify(amountdetail);
    
        
                location.assign("https://tibamef2e.com/tfd103/g3/tfd103-g3/shopcart-checkout.html?checkout=0");
            }
        
        },

        // ***itemlist***
        // checkbox全選按鈕
        allCheck(){
            if($("#allchecked").prop("checked")){

                $("input[name ='itemcheck[]']").prop("checked",true);
            }else{

                $("input[name ='itemcheck[]']").prop("checked",false);
            }
        },

        // 勾選產生變化
        changeItemLength(){
            let checkid = $("input[name ='itemcheck[]']:checked");
            let nowitemlength = $("input[name ='itemcheck[]']:checked").length;
            // console.log(checkid);
            // console.log(nowitemlength);
            this.checkitemlength = nowitemlength;
            
            // allcheck連動
            if(nowitemlength == this.itemList.length){
                $("#allchecked").prop("checked",true);
            }else{
                $("#allchecked").prop("checked",false);
            }

            this.amount = 0;
 
            for(let i=0; i < nowitemlength;i++){
                let  idnum = checkid[i].id.substring(10);
                // console.log(idnum);
                let price = parseInt(this.itemList[idnum].comprice);
                this.amount += price;
            }
            this.calTotal();
        },

        // 刪除 
        deleteItem(itemid){
            // console.log(itemid);
            let id = itemid;
            let removeitem = document.getElementById(itemid);
            // console.log(removeitem);

            removeitem.style.display = "none";
            removeitem.remove();
            
            // 刪除localstorage
            let newallItem =  JSON.parse(storage['addCartList']);
            for(let i =0; i < newallItem.length; i++){
                // console.log(allItem[i]);
                 
                if(newallItem[i].comclassid == id){
                    newallItem.splice(i,1);
                }
  
            }

            
            // 更新localstorage
            storage.removeItem(id);
            storage['addCartList'] = JSON.stringify(newallItem);
            

            // 更新amount
            this.changeItemLength();


        },

        // LINEPAY結帳-傳到父層
        goecpay(){
            this.$emit("goecpay");
        }

    },
    
});


