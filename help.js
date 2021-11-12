
const plan = new Vuex.Store({
    state:{
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
        ]
        
        
    },
    mutations:{
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
    }
}) 

