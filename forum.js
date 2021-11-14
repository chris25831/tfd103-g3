const forum =  new Vuex.Store({
    state: {        //類似 new Vue() 裡的 data (放變數的地方)
        postId: "", 
    },
    mutations: {    //類似 new Vue() 裡的 methods  (變數的修改透過mutation)
        getPostId(state, id) {
            state.postId = id;
            console.log(state.postId)
        }
    },
})

export default forum;