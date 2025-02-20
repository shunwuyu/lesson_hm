import { useEffect, useState, memo, useCallback, useMemo } from 'react';

// 面向对象的核心概念
// 接口 满足接口 安全？
interface BobProps {
  count: number;
  callback: () => void;
}
// 没有必要更新的组件能不能不更新？
// 函数参数要给类型约定
function Bob(props: BobProps) {
  console.log('Bob---------');
  return <h2>{props.count}</h2>
}
// 缓存
// 将一个组件返回一个新组件的函数 叫做高阶组件
// 函数的参数或返回值是函数， 叫做高阶函数
const MemoBob = memo(Bob);
// console.log(MemoBob)
const MemoExample = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);
  const product =  useMemo(() => {
    console.log('///////////')
    return count1 * count2;
  }, [count1, count2])
  return (
    <div>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1+1)}>增加Count1</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2+1)}>增加Count2</button>
      <p>Count3: {count3}</p>
      <button onClick={() => setCount3(count3+1)}>增加Count2</button>
      <p>乘积{product}</p>
    </div>
  )
}

function Aaa() {
  const [count, setCount] = useState(1);
  const [num,stNum] = useState(1);
  console.log('------------')
  // mounted 
  useEffect(() => {
    setInterval(() => {
      stNum(Math.random())
    }, 2000)
    setTimeout(() => {
      setCount(3)
    }, 1000)
  }, []);

  // 函数会重新创建
  // useCallback 缓存函数
  // useMemo 缓存计算结果
  // 第二个参数是依赖项
  const bbbCallback = useCallback(() => {
    console.log('callback')
    // count, num 
  }, [])

  const count2 = useMemo(() => {
    return count * 10;
  }, [count]);

  return (
    <div>
      {num}
      {/* <Bob count={2}></Bob> */}
      <MemoBob count={count2} callback={bbbCallback}/>
      <MemoExample />
    </div>
  )
}

export default Aaa;