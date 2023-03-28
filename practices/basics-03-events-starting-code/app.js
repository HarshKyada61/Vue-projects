  const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedname: '',
      // fullname: ''
    };
  },
  watch: {
    // name(value){
    //   if( value === ''){
    //     this.fullname = '';
    //   }else{

    //     this.fullname = value + " " + "Kayda"
    //   }
    // }
  },
  computed:{
    fullname(){
      if(this.name === ''){
        return '';
      }
      else{
        return this.name + ' ' + 'Kyada';
      }
    }
  },
  methods: {
    // confirminput(){
    //   this.confirmedname = this.name
    // },
    // submitForm(){
    //   alert('Submitted');
    // },
    setName(event){
      this.name = event.target.value ; 
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
