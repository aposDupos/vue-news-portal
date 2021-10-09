import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import VueTruncate from "vue-truncate-filter"

Vue.config.productionTip = false;

Vue.use(VueTruncate)

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");