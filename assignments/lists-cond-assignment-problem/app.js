const app  = Vue.createApp({
    data(){
        return {
            inputTask: '',
            tasks: [],
            isListVisible : true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputTask);
            this.inputTask = '';
        },
        switchView(){
            this.isListVisible = !this.isListVisible;
        }
    }
})

app.mount('#assignment')