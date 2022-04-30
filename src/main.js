import { createApp } from 'vue'
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'
import store from './store'
// import YmapPlugin from 'vue-yandex-maps/dist/vue-yandex-maps.esm'
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// const settings = {
//     apiKey: '',
//     lang: 'ru_RU',
//     coordorder: 'latlong',
//     enterprise: false,
//     version: '2.1'
// }



library.add(far, fas, fab);

createApp(App)
            .component('fa', FontAwesomeIcon)
            // .use(YmapPlugin, settings)
            .use(store)
            .use(router)
            .mount('#app');
