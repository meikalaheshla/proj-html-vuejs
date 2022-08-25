import Vue from 'vue'
import App from './App.vue'
// FONT AWESOME CORE

import { library } from '@fortawesome/fontawesome-svg-core'

// IMPORT ICON COMPONENT

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// IMPORT SPECIFIC ICONS

import { faHatWizard, faAngleDown } from '@fortawesome/free-solid-svg-icons'


// ADD SPECIFIC ICONS TO LIBRARY
library.add(faHatWizard, faAngleDown)


// ADD FONT AWESOME ICON COMPONENT

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
