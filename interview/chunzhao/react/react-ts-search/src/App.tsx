import Mock from 'mockjs'
import { useRequest } from 'ahooks';
function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}

const App = () => {
  const { data, error, loading } = useRequest(
    getUsername
  )
  return (
    <div>
      {loading && <div>loading...</div>}
      {data && <div>Username: {data}</div>}
    </div>
  )
}

export default App