import Vue from 'vue';
import axios from "axios";

// axios.defaults.baseURL = process.env.VUE_APP_BASEURL

Vue.use({
  install(Vue) {
    //Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: process.env.VUE_APP_BASEURL
    })
  }
})