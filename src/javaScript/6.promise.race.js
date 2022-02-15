/**
 * @description Promise.race(iterable) 方法返回一个 promise，
 * 一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
 * @param {*} promiseArray
 * @returns
 */
Promise.myRace = (promiseArray) =>
  new Promise((resolve1, reject1) => {
    if (promiseArray.length === 0) resolve1()
    promiseArray.forEach((ps) => {
      Promise.resolve(ps).then(resolve1).catch(reject1)
    })
  })

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2)
})

Promise.myRace([promise1, promise2]).then((value) => {
  console.log(value) // 2
})

Promise.myRace([promise1, promise2, 3]).then((value) => {
  console.log(value) // 3
})
