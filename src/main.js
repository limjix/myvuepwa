import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'

const app = createApp(App)
app.use(vuetify)

app.mount('#app')
