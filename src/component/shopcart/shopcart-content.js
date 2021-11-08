// 購物車
var storage = localStorage;
//'../../../classes-content.html?classid='+ item.comclassid
Vue.component("shopcart-content",{
    props:["checksop"],
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
                        <!-- 課程編號 -->
                        <span v-if="checksop == 1">課程編號：</span>
                        <!-- 教師 -->
                        <span v-if="checksop == 1">授課教師：</span>
                        <!-- 上課地點 -->
                        <span v-if="checksop == 1">上課地點：</span>
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
                        <span v-if="checksop == 0">點數</span><br><br>
                        <span>折抵金額</span>
                    </p>
                    <p>
                        <input type="text" v-if="checksop == 0" id="textpoint"  @keyup="maxPoint()"><br>
                        <span  v-if="checksop == 0" class="small">剩餘點數：{{point}}</span><br>
                        <span>$&nbsp;{{count}}&nbsp;TWD</span>
                    </p>
                </div>
                <hr>
                <div>
                    <p>
                        <span>合計</span>
                        <span>$&nbsp;{{total}}&nbsp;TWD</span>
                    </p>

                <button class="title3 orangebutton" @click="goToPay()">前往結帳</button>
                </div>
            </div>
        </div>
    `,
    data: function(){
        return{
            itemList:"",
            amount:0,
            count:0,
            // point資料庫取得
            point:100,
            total:0,
            checkitemlength:0,
        };
        
    },

    // 初始值
    created() {
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
        }

    },

    

    methods: {

        // 詳細商品連結
        gotodetail(id){
            // console.log(id);
            window.open(`../../../classes-content.html?classid=${id}`,"_self");   
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

            // TODO:判斷會員
            

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

            
            // window.location.href="../../shopcart-checkout.html"; 
            window.open("../../shopcart-checkout.html","_self");   
            
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
            let removeitem = document.getElementById(itemid);
            
            removeitem.style.display = "none";
            removeitem.remove();

            // 刪除localstorage
            let newallItem =  JSON.parse(storage['addCartList']);
            for(let i =0; i < newallItem.length; i++){
                // console.log(allItem[i]);

               if(newallItem[i].comclassid == itemid){
                    newallItem.splice(i,1);
               }
            }
            // console.log(newallItem);

            this.itemList = newallItem;

            // 更新amount
            this.changeItemLength();

     
            // 更新localstorage
            storage.removeItem(itemid);

            storage['addCartList'] =  JSON.stringify(newallItem);

        },


    },
    
    
  

});


// TODO:  結帳再存localstorage,  