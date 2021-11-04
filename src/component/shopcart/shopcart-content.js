Vue.component("shopcart-content",{
    props:[],
    template:`
        <div class="orderclass">
            <div class="classlist">
                <ul>
                    <input type="checkbox" name="" id="">
                    <li>
                        <input type="checkbox" name="" id="">
                        <img src="" alt="">
                        <!-- 名稱 -->
                        <p></p>
                        <!-- 價錢 -->
                        <p></p>
                        <!-- 刪除 -->
                        <button></button>          
                    </li>
                </ul>
            </div>
            <!-- amount -->
            <div class="amount">
                <div>
                    <p>
                        <span>總計</span><br>
                        <span>總金額</span>
                    </p>
                    <p>
                        <span>項商品</span><br>
                        <span>$ {{}}TWD</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>點數</span><br>
                        <span>折抵金額</span>
                    </p>
                    <p>
                        <input type="text">
                        <span>剩餘點數：</span><br>
                        <span>$ {{}}TWD</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>應付金額</span>
                        <span>$ {{}}TWD</span>
                    </p>

                <button>前往結帳</button>
                </div>
            </div>
        </div>
    `,
});