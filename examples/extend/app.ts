import axios from '../../src/index'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})

axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hello'
  }
})

interface ResponseData<T> {
  code: number,
  result: T,
  message: string
}
interface User {
  name: string,
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user').then(res => res.data).catch(err => console.error(err))
}

async function test() {
  const user = await getUser<User>()
  if(user) {
    console.log(user.result.name)
  }
}

test()