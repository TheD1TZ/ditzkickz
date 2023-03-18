import {createRouter, createWebHistory} from 'vue-router'

import home from '../views/HomePage.vue'
import aboutPage from "../views/AboutPage.vue";
import bookingsPage from "../views/BookingsPage.vue";
import musicPage from "../views/MusicPage.vue";
import contactPage from "../views/ContactPage.vue";

const routes = [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundPage.vue') },
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/about',
        name: 'About',
        component: aboutPage
    },
    {
        path: '/bookings',
        name: 'Bookings',
        component: bookingsPage
    },
    {
        path: '/music',
        name: 'Music',
        component: musicPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contactPage
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../views/test.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `DITZKICKZ | ${ to.name }`;
    next()
})

export default router;