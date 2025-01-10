// 全局共享的用户状态
import { defineStore } from 'pinia'
import {
  ref,
  reactive
} from 'vue'
// hooks 编程
export const useUserStore = defineStore("user", () => {
  const isLogin = ref(false);
  const toLogin = () => {
    isLogin.value = true;
  }
  const toLogout = () => {
    isLogin.value = false;
  }

  const userInfo = reactive({
    name: "",
    avatar: "",
    message: 0,
    uid: null
  })
  const setUserInfo = () => {
    userInfo.name = "旅梦开发团";
    userInfo.avatar = "https://p6-passport.byteacctimg.com/img/user-avatar/11174122cb6102aca29ac7599f4e08b4~100x100.awebp"
    userInfo.message = 10
    userInfo.uid = 2664871913601613
  }


  return {
    isLogin,
    toLogin,
    toLogout,
    userInfo,
    setUserInfo
  }
})