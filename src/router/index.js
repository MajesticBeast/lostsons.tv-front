import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Clip from '../views/Clip.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/clip/:id',
        name: 'Clip',
        component: Clip,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router