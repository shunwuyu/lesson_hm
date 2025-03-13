import {
  createApp,
  h 
} from 'vue';
const vnode = h('div', {id: 'app'}, 'Hello Vue3');

createApp({
  render() {
    return vnode;
  }
}).mount('#app');