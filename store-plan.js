// {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js" integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}

const plan = new Vuex.Store({
    state:{
        //lightbox答案
        showquestion:true,
        showloading:false,
        showplan:false,
        questionanswer : [],
        current_tab:0,
        tab:"下一步",
        max:4,
        //測驗題目
        questions:[
            //第一題
            {
                title:'你的參賽日期',
                choices:
                [{
                    title:'2021普悠瑪鐵人三項競賽',
                    value:'20211101'
                },{
                    title:'2021梅花湖三鐵',
                    value:'20211203'
                },{
                    title:'2021台東活水湖三鐵',
                    value:'20211223'
                },
                {
                    title:'我想自主訓練',
                    value:'selftraning'
                }],
                name:'racedate',
                type:'select',
                answer: '20211101', 
            },
            //第二題
            {
                title:'想挑戰的競賽距離',
                choices:
                [{
                    title:'226K全程距離',
                    value:'226'
                },{
                    title:'113K半程距離',
                    value:'113'
                },{
                    title:'51.5K標準距離',
                    value:'51.5'
                }],
                name:'distance',
                type:'radio',
                answer: '226'
            },
            //第三題
            {
                title:'想制定幾週的訓練計畫呢',
                choices:
                [{
                    title:'16週',
                    value:'16'
                },{
                    title:'12週',
                    value:'12'
                },{
                    title:'8週',
                    value:'8'
                }],
                name:'week',
                type:'radio',
                answer: '16'
            },
            {
                title:'選擇訓練強度',
                choices:
                [{
                    title:'強',
                    value:'hard'
                },{
                    title:'中',
                    value:'normal'
                },{
                    title:'弱',
                    value:'eazy'
                }],
                name:'level',
                type:'radio',
                answer: 'hard'
            },
            
        ],
        //取消計畫表
        cancel: true,
        //會員資料
        memberinfo:{
            photo:"./src/images/img/plan/memberphoto.png",
            membername:"maggie",
            racedate:"20221127",
            week:8,
            point:0,
        },
        //計畫表資料
        plandata:[
        //day1
            {
            "Swim":1,
            "Bike":1,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day2
            {
            "Swim":1,
            "Bike":0.5,
            "Run":null,
            "Rest":false,
            check:[]
            },
            //day3
            {
            "Swim":null,
            "Bike":null,
            "Run":null,
            "Rest":"rest",
            check:[],
            },
            //day4
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day5
            {
            "Swim":1,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
            //day6
            {
            "Swim":1,
            "Bike":null,
            "Run":1,
            "Rest":false,
            check:[]
            },
            //day7
            {
            "Swim":null,
            "Bike":null,
            "Run":.5,
            "Rest":false,
            check:[]
            },
        ],
    },

    mutations:{
        tab(state,payload){
            state.tab = payload
        },
        addCount(state, payload){
            state.count += payload 
        },
        checkoneday(state){
            alert("恭喜你獲得一點");
            if(state.memberinfo.point){
                state.memberinfo.point += 1
            }
            else{
                state.memberinfo.point = 1
            }
            localStorage.setItem('Points',state.memberinfo.point);
            localStorage.setItem('plandata',JSON.stringify(state.plandata))
        },
        plancancel(state){
            var yes = confirm('確定要取消計畫嗎？將會清空計畫表內容')
            if (yes) {
                state.cancel = false
            } else {
                alert('您已取消');
            }
        },
        last(state){
            if(state.current_tab <= state.max  && state.current_tab > 0){
                state.questionanswer.pop(state.questions[state.current_tab - 1].answer);
                state.current_tab --     
            }
            if(state.current_tab != 4){
                state.tab === "下一步"
            }
        },
        changetab(state){ //切換按鈕index
            if(state.current_tab < 5 ){
                //questionanswer答案陣列
                state.questionanswer.push(state.questions[state.current_tab - 1].answer);
                state.current_tab ++ 
                // console.log(state.questionanswer);
                
            }
            if(state.current_tab === 5){
                state.showloading = true;
                // console.log(state.questionanswer);
                var questionAnswer = JSON.stringify(Object.assign({},state.questionanswer));
                let data= new URLSearchParams()
                data.append('answer',questionAnswer)
               
                axios({
                    method: 'post',
                    url: './php/plan.php',
                    data:data,
                    header:{
                        'Content-type':'application/json'
                    }
                  })
                  .then(function (response) {
                    state.showquestion = false;
                    //   console.log(response); 
                    //   console.log("成功");
                      state.showplan = true;
                      state.showloading = false;
                      // 這邊的plandata=回傳的資料
                    //   state.plandata = response.data
                  })
                  .catch(function (error) {
                     // your action on error success
                      console.log(error);
                  });
                  
               
            }else if(state.current_tab === 4){
                state.tab = "完成"
            }
        },
        current_tab(state,payload){
            state.current_tab = payload
        },
        
        
    },
   
    
}) 

export default plan;

