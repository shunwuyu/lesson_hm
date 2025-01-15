// vue 中使用jsx 语法 
// State(UI JSX)
import { 
  defineComponent,  // vue3 申明组件的函数 
} from 'vue'

export default defineComponent({
  name: "HelloJSX", 
  props: {
    msg: String
  },
  setup(props) {
    return () => {
      // const str = ref('')

      return (<div class="hello">
        <h1>{props.msg}</h1>
        <p>Welcome to our Vite + Vue + JSX Component</p>
      </div>)
    }
  }
})