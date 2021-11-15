Vue.component("report",{
    template: `
    <div class="darken-background" id="report-mask">
        <div id="report-block" class="report-block">
            <h3>檢舉文章</h3>
            <form action="./php/report.php" method="POST">
                <label for="discriminate"> <input type="radio" name="reason" value="1" id="discriminate">中傷、歧視、挑釁或謾罵他人</label>   
                <label for="hurt"><input type="radio" name="reason" value="2" id="hurt">暴力、傷害他人或傷害動物的內容</label>
                <label for="spam"><input type="radio" name="reason" value="3" id="spam">包含廣告、商業宣傳之內容</label>
                <label for="others"><input type="radio" name="reason" value="4" id="others">其他原因</label>   
                <div class="button-block">
                    <button class="cancel" @click.prevent="closeReport">取消</button>
                    <button class="send-report" type="submit">送出</button>
                </div>
            </form>
        </div>
    </div>
    `,
    methods: {
        closeReport(){
            this.$emit("cancel-report");
        }
    }

});