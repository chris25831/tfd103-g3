Vue.component("report",{
    template: `
    <div class="darken-background" id="report-mask">
        <div id="report-block" class="report-block">
            <h3>檢舉文章</h3>
            <div class="report-content">
                <label for="discriminate"> <input type="radio" name="reason" value="中傷、歧視、挑釁或謾罵他人" id="discriminate" v-model="reason">中傷、歧視、挑釁或謾罵他人</label>   
                <label for="hurt"><input type="radio" name="reason" value="暴力、傷害他人或傷害動物的內容" id="hurt" v-model="reason">暴力、傷害他人或傷害動物的內容</label>
                <label for="spam"><input type="radio" name="reason" value="包含廣告、商業宣傳之內容" id="spam" v-model="reason">包含廣告、商業宣傳之內容</label>
                <label for="others"><input type="radio" name="reason" value="其他原因" id="others" v-model="reason">其他原因</label>   
                <div class="button-block">
                    <button class="cancel" @click.prevent="closeReport">取消</button>
                    <button class="send-report" type="submit" @click="reporting">送出</button>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ["num"],
    data() {
        return {
           reason: "",
           number: this.num
        }
    },
    methods: {
        closeReport(){
            this.$emit("cancel-report");
        },
        reporting(){
            
            axios({
                method: "post",
                url: "./php/report.php",
                data: {
                    reason:this.reason,
                    postid: parseInt(this.number)
                }
            })
            .then((res)=>{
                console.log(res);
                console.log("this.number", this.number);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            // window.location.reload();
        }

    }

});