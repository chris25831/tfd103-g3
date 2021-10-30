Vue.component("bookmark-classes",{
    props: ["category"],
    template: `
        <button @click="change">{{category}}</button>
    `,
    methods:{
        change(){
            this.$emit("changetab",this.category);
            // console.log(this.category);
        }
    }
});


