import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import(/* webpackChunkName: "application" */ "./views/application"),
        redirect: "/application/home_page",
        children: [
            {
                path: 'application/home_page',
                component: () => import(/* webpackChunkName: "dashboard" */ './views/application/home_page'),
            },
            {
                path: 'application/bedrooms',
                component: () => import(/* webpackChunkName: "dashboard" */ './views/application/bedrooms'),
            },
        ]
    },

];

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
});

export default router;


