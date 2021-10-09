import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/news",
        name: "News",
        component: () =>
            import(/* webpackChunkName: "news" */ "../views/News.vue"),
    },
    {
        path: "/news/:id",
        name: "NewsCard",
        component: () =>
            import(/* webpackChunkName: "news/:id" */ "../views/NewsCard.vue"),
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: () =>
            import(/* webpackChunkName: "news/:id" */ "../views/Gallery.vue"),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
