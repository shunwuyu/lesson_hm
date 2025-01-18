// react 全面hooks **函数式**编程
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // onMounted 
    document.title = '关于- 张老板'
  }, [])
  return (
    <div>
      <h1>关于</h1>
      <div>东华理工大学</div>
    </div>
  )
}

export default Home