import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.useAttrs(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})