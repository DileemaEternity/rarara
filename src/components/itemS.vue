<template>
    <li>
        <span :class="{ done: todo.completed }">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong>{{ todo.title }}
        </span>
        <button class="btn" v-on:click="$emit('remove-todo', todo.id)">
            &times;
        </button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
li {
    border: 1px solid teal;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    margin-bottom: 20px;
}

.btn {
    background-color: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
}

input {
    margin-right: 1rem;
}

.done {
    text-decoration: line-through;
}
</style>