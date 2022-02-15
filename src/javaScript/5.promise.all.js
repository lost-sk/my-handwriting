Promise.myAll = (promiseArray) =>
  new Promise((resolve, reject) => {
    let count = 0
    let result = []
    const len = promiseArray.length
    if (len === 0) resolve(['aa', 'bb'])
    promiseArray.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          count++
          result[i] = res
          if (count === len) {
            resolve(result)
          }
        })
        .catch(reject)
    })
  })
let p1 = Promise.resolve(1)
let p2 = 2
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 3)
})
let p4 = Promise.reject('出错啦')
Promise.myAll([p1, p2, p3])
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.log('err', err)
  })
