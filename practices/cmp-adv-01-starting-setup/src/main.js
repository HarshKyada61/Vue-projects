import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/BaseCard.vue';
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('base-card',BaseCard );


app.mount('#app');
