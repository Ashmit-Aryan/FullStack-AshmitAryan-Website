import Vue from 'vue'
import Vuex from 'vuex'
import apps from '../modules/Apps'
import contact from '../modules/Contact'
import TechNews from '../modules/TechNews'
import TechExplain from '../modules/TechExplain';
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        apps,
        contact,
        TechNews,
        TechExplain
    }
})
