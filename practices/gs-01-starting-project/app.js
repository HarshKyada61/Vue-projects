

Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#app');

// const inputEl = document.querySelector('input');
// const ulEl = document.querySelector('ul');
// const buttonEl = document.querySelector('button');


// function addGoal(){
//     const goal = inputEl.value;
//     const liEl = document.createElement('li');
//     liEl.textContent = goal;
//     ulEl.appendChild(liEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal)