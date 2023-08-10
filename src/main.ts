import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faDiscord)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

createApp(App).use(Toast)
