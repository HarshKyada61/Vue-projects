const app = Vue.createApp({
    data(){
        return{
            result : 0
        }
    },
    watch:{
        showResult(){
            let that = this;
            setTimeout(() => {
                that.result = 0;
            },5000)
        }
    },
    computed:{
        showResult(){
            if(this.result < 37){
                return 'Not There Yet';
            }
            else if(this.result > 37){
                return 'Too much!'
            }
            else{
                return this.result
            }
        }
    },
    methods:{
        add(num){
            this.result = this.result + num;
        }
    }
})

app.mount('#assignment')