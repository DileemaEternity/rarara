<template>
    <div>
        <ul>
            <itemS v-for="(todo, i) of todos" :todo="todo" :index="i" v-on:remove-todo="removeTodo" />
        </ul>
    </div>
</template>

<script>
import itemS from './itemS.vue';
export default {
    props: ['todos'],
    components: {
        itemS
    },
    methods: {
        removeTodo(id) {
            this.$emit('remove-todo', id)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>