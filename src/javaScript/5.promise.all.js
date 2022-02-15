/**
 * @description promise的iterable类型作为输入,且只返回一个promise实例
 * 所有promise都resolve，则resolve结果数组
 * 有一个reject 则reject错误信息
 * @param {*} promiseArray
 * @returns
 */
Promise.myAll = (promiseArray) =>
  new Promise((resolve1, reject1) => {
    let count = 0
    let result = []
    const len = promiseArray.length
    if (len === 0) resolve1([])
    promiseArray.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          count++
          result[i] = res
          if (count === len) {
            resolve1(result)
          }
        })
        .catch(reject1)
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
