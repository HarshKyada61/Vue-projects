<template>
    <li>
        <header><h1>{{ friend.name}}</h1></header>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>  
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'Harsh',
                    name: 'Harsh Kyada',
                    Phone: '8853 9543 3244',
                    email:' harsh@gmail.com'
            },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>

