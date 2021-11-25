

const plan = new Vuex.Store({
    state:{
        //lightbox答案
        showquestion: true,
        showloading:false,
        showplan:false,
        questionanswer : [],
        current_tab:0,
        tab:"下一步",
        Swim:0,
        Bike:0,
        Run:0,
        max:4,
        
        //測驗題目
        questions:[ 
            //第一題
            {
                title:'你的參賽日期',
                choices:
                [{
                    title:'請選擇',
                    value:'20211101'
                },
                {
                    title:'我想要自主訓練',
                    value:'selftraning'
                },
                ],
                name:'racedate',
                type:'select',
                answer: '20211101',
                racedate: "比賽日期" 
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
                    value:16
                },{
                    title:'12週',
                    value:12
                },{
                    title:'8週',
                    value:8
                }],
                name:'week',
                type:'radio',
                answer: 16
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
            memberId:"",
            photo:"./src/images/img/member/member.jpeg",
            membername:"maggie",
            racedate:"20221127",//會員Table裡沒有 撈Training Plan
            week: "",            //會員Table裡沒有 撈Training Plan
            point:"",
            membermethod:""
        },
        //計畫表資料
        plandata:[
        // day1
            // {
            // "Swim":1,
            // "Bike":null,
            // "Run":.5,
            // "Rest":false,
            // check:[]
            // },
            // //day2
            // {
            // "Swim":null,
            // "Bike":null,
            // "Run":null,
            // "Rest":'rest',
            // check:[]
            // },
            // //day3
            // {
            // "Swim":1,
            // "Bike":0.5,
            // "Run":null,
            // "Rest":false,
            // check:[],
            // },
            // //day4
            // {
            // "Swim":1,
            // "Bike":null,
            // "Run":.5,
            // "Rest":false,
            // check:[]
            // },
            // //day5
            // {
            // "Swim":1,
            // "Bike":null,
            // "Run":.5,
            // "Rest":false,
            // check:[]
            // },
            // //day6
            // {
            // "Swim":1,
            // "Bike":null,
            // "Run":1,
            // "Rest":false,
            // check:[]
            // },
            // //day7
            // {
            // "Swim":null,
            // "Bike":null,
            // "Run":.5,
            // "Rest":false,
            // check:[]
            // },
        ],

       
    },

    mutations:{
       
        //  撈會員資料//
         memberinfo(state,payload){
            axios({
                method: 'post',
                url: './php/memberinfo.php',
                data:{
                    memberID:payload
                },
            }).then((response) =>{
                console.log(response.data)
                state.memberinfo.photo = response.data[1]
                state.memberinfo.membername = response.data[0]
            }).catch((error)=>{
                console.log(error)
                
            })
        },
        memberdata(state,payload){
            axios({
                method: 'post',
                url: './php/plan-getmemberinfo.php',
                data:{
                    memberID:payload
                },
            }).then((response) => {
                console.log(response.data)
                let  returnMemberinfo = response.data;
                let  memberweek = parseInt(returnMemberinfo[0]);
                let  memberrace = returnMemberinfo[1];
                console.log(memberweek);
                console.log(memberrace);
                state.memberinfo.week = memberweek;
                state.memberinfo.racedate = memberrace;
                
            }).catch((error)=>{
                console.log(error)
                
            })
        },
         // 撈計畫表//
        selectplandata(state,payload){
                axios({
                    method: 'post',
                    url: './php/plan-select.php',
                    data:{
                        memberID:payload
                    },
                   
                  })
                  .then((response) => {
                      if(response.data == "0"){
                          state.cancel = false
                          console.log("沒計畫表")
                      }else{
                          var swimdata = response.data[0]
                          var rundata = response.data[1]
                          var bikedata = response.data[2]
                          console.log("有計畫表")
                          
                            for(let s in swimdata){
                               state.plandata.unshift({
                                   "Swim": swimdata[s],
                                   "Run":  rundata[s],
                                   "Bike": bikedata[s],
                                    check:[]
                               })
                            }
                            
                            var splice = state.plandata.splice(7, 2);
                            state.plandata.forEach(function(item,index){
                              item.Rest = false;
                              
                              if(item.Swim === 0){
                                  item.Swim =null
                              }
                              if(item.Run === 0){
                                  item.Run =null
                              }
                              if(item.Bike === 0){
                                   item.Bike =null
                              }
                                
                              
                              if(item.Swim === null && item.Run === null && item.Bike === null){
                                  
                                  item.Rest = "rest";
                              }
                            })
                          //   方法
                            var method = (splice[0].Swim);
                            state.memberinfo.membermethod = method;
                            state.showplan = true;
                            state.showloading = false;

                      }
                   
                  })
                  .catch((error)=> {
                    console.log(error)
                    state.cancel = false
                  });

     
        },
         //刪除計畫表
        deleteplandata(state,payload){
            let memberid = payload;
            axios({
              method: "POST",
              url: "./php/plan-delete.php",
              data:{
                 memberID:memberid
              }
            }).then((response)=>{
                console.log(response.data)
                state.saveplan = false
                
            }).catch((error)=>{
                console.log(error)
            })
        },
        
        //存入計畫表
        insertplandata(state,payload){
            console.log('存')
            var questionAnswer = JSON.stringify(Object.assign({},state.questionanswer));
            let data= new URLSearchParams()
            data.append('lightBoxAnswer',questionAnswer)
            data.append('memberID',payload)
            data.append('method', state.memberinfo.membermethod)
            
             axios({            
              method: "POST",
              url: "./php/plan-insert.php",
              data:data,            
              dataType: "text",
            }).then(function (response) {
                alert("儲存成功")
                location.href = 'plan-member.html';
              }).catch(function(error){
                console.log(error);
                alert('錯誤'); 
              }) 
     
     
            },

        loadrace(state){
            axios({
                method: 'post',
                url: './php/plan-selectRace.php',
                header:{
                    'Content-type':'application/json'
                }
              })
              .then(function (response) {
                //   console.log(response.data);
                  for( let i = 0; i < response.data.length; i++ ){
                        state.questions[0].choices.unshift(
                        {
                         title: response.data[i].RaceName,
                         value: response.data[i].RaceID,
                         date: response.data[i].RaceDate,
                        }
                    )
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });
        },

        tab(state,payload){
            state.tab = payload
        },
        addCount(state, payload){
            state.count += payload 
        },
        checkoneday(state){
            alert("恭喜你獲得一點");
            
            let newpoint = JSON.parse(localStorage.getItem('Points'));
            // console.log(newpoint);
            state.memberinfo.point = newpoint
            
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
                localStorage.clear("plandata")
                
            } else {
                alert('您已取消');
            }
        },
        noplan(state){
            state.cancel = false
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
                // state.showplan = false;
                // console.log(state.questionanswer);
                
                var questionAnswer = JSON.stringify(Object.assign({},state.questionanswer));
                let data= new URLSearchParams()
                data.append('lightBoxAnswer',questionAnswer)
                // console.log(data)
                //PHP那裡要寫$POST[lightBoxAnswer]
                
                
                
                // 送答案*** 送答案 *** 送答案 *** 送答案//
                axios({
                    method: 'post',
                    url: './php/plan.php',
                    data:data,
                    
                  })
                  .then(function (response) {
                    state.showquestion = false;
                    
                    var swimdata = response.data[0]
                    var rundata = response.data[1]
                    var bikedata = response.data[2]
                    
                    // console.log(response.data)
                    // console.log(swimdata)
                    // console.log(rundata),
                    // console.log(bikedata)
                    
                      for(let s in swimdata){
                       
                         state.plandata.unshift({
                             "Swim": swimdata[s],
                             "Run":  rundata[s],
                             "Bike": bikedata[s],
                              check:[]
                         })
                      }
                      
                      var splice = state.plandata.splice(7, 2);
                      state.plandata.forEach(function(item,index){
                        item.Rest = false;
                        
                        if(item.Swim === 0){
                            item.Swim =null
                        }
                        if(item.Run === 0){
                            item.Run =null
                        }
                        if(item.Bike === 0){
                             item.Bike =null
                        }
                          
                        
                        if(item.Swim === null && item.Run === null && item.Bike === null){
                            
                            item.Rest = "rest";
                        }
                      })
                      //方法
                      var method = (splice[0].Swim);
                      state.memberinfo.membermethod = method;
                      state.showplan = true;
                      state.showloading = false;
                   
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
                  
               
                }
        },
        current_tab(state,payload){
            state.current_tab = payload
        },
        growSwim(state){
            state.Swim += 5
            localStorage.setItem("swimComplete",state.Swim)
        
        },
        growRun(state){
            state.Run += 5
            localStorage.setItem("runComplete",state.Run)
        },
        growBike(state){
            state.Bike += 5
            localStorage.setItem("bikeComplete",state.Bike)
        }
        
    },
   
})

export default plan;

