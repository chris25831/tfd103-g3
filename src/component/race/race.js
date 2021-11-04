

 const raceinfo = new Vue({
     el: '#race_list',
     data(){
      return{
         itemsPerPage: 5,//一頁顯示筆數
         tidedData:[],
         currentPage: 1,
         //模擬資料(11筆) 11/5 無條件進位 = 3頁
         games :[
         {
             "date":20210927,
             "place":"基隆市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":true
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"宜蘭縣",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":true
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":true
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"高雄市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"宜蘭縣",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"宜蘭縣",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"宜蘭縣",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20211227,
             "place":"花蓮縣",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"桃園市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"桃園市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":false
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":true
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         },
         {
             "date":20210927,
             "place":"新北市",
             "title":"2021 Let's Run At Home 空英1919陪讀鐵人三項",
             "distences" :[
                 {
                 "dis":"51.5k",
                 "color":"yellow",
                 "event":true
                 }, 
                 {
                 "dis":"113k",
                 "color":"orange",
                 "event":false
                 }, 
                 {
                 "dis":"51.5k",
                 "color":"blue",
                 "event":true
                 }
               ],
             "state":20210927
 
         }
       ]
     }   
    },
     computed: {
             totalPage() {  //總頁數
                 return Math.ceil(this.games.length / this.itemsPerPage); 
             },
             
             startIndex() {    
                 return (this.currentPage - 1) * this.itemsPerPage;
             },
         },
     methods: {
         changeRacePage(e) {
             console.log(e.target)
             this.currentPage = parseInt(e.target.innerText);
             console.log(this.currentPage);
         },
         minusOnePage() {
             if(this.currentPage > 1) {
                 this.currentPage = this.currentPage - 1;
             }
         },
         plusOnePage() {
             if(this.currentPage < this.totalPage) {
                 this.currentPage = this.currentPage + 1;
             }
         },
     },
     watch: {
         currentPage(newValue, oldValue) {
             console.log(`currentPage: ${oldValue} => ${newValue}`);
             this.tidedData = this.raceData.slice(this.startIndex, this.startIndex + this.itemsPerPage);
             
             document.querySelectorAll("a.page-link").forEach((text, index) => {
                 if(parseInt(text.innerText) === parseInt(newValue)) {
                     text.style.backgroundColor = "orange";
                 } else {
                     text.style.backgroundColor = "";
                 }
             })
             
         },    
     },
     created() {
         //指定哪個data
         this.raceData = this.games; 
         //從哪個index起始
         this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
         //回傳切割後的新陣列
         this.tidedData = this.raceData.slice(this.startIndex, this.startIndex + this.itemsPerPage);            

     },
 });
 
