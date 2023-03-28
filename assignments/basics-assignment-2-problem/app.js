const app = Vue.createApp({
    data(){
        return {
            input : '',
            output: ''
        }
    },
    methods: {
        showalert(){
            alert('Ahhggggg!!!!')
        },
        addinput1(e){
            this.input = e.target.value;
        },
        addinput2(){
            this.output = this.input;
        }
    }
})

app.mount('#assignment')