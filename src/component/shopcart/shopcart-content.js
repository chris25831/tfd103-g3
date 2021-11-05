// 購物車
var storage = localStorage;

Vue.component("shopcart-content",{
    props:["check"],
    template:`
        <div class="orderclass">
            <div class="classlist">
                <div>
                    <input type="checkbox" v-if="check == '1'" id="all-checked" value=""> 
                </div>

                <ul>
                    <li v-for="item in itemList">
                        <input type="checkbox" v-if="check == '1'" name="" id="">
                        <div>
                            <img :src="item.comimg" alt="">
                        </div>
                        <!-- 名稱 -->
                        <p class="comclasstitle">{{item.comclassTitle}}</p>
                        <!-- 價錢 -->
                        <p  class="comprice">$ {{item.comprice}}TWD</p>
                        <!-- 刪除 -->
                        <button><i class="fas fa-minus"></i></button>          
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
                        <span>{{itemList.length}}項商品</span><br>
                        <span>$ {{amount}}TWD</span>
                    </p>
                </div>
                <div class="point">
                    <p>
                        <span>點數</span><br><br>
                        <span>折抵金額</span>
                    </p>
                    <p>
                        <input type="text" id="textpoint"><br>
                        <span class="small">剩餘點數：{{point}}</span><br>
                        <span>$ {{}}TWD</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>合計</span>
                        <span>$ {{total}}TWD</span>
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
            point:"100",
            total:"5030",
        };
        
    },

    created() {
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

    },
    methods: {
        goToPay(){

            // TODO:判斷會員

            window.location.href="../../shopcart-checkout.html";  
        }
    },
  

});


// TODO: 取消勾選變更總計與金額與合計