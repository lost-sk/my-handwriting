/**
 * promise 是一个拥有 then 方法的对象或函数，其行为符合本规范；
 * 一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）,
 * 和拒绝态（Rejected）。
 * then方法必须返回一个 promise对象,promise2 = promise1.then(onFulfilled, onRejected);
 */
class myPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onSuccessQueue = []
    this.onFailedQueue = []
    const resolve = (value) => {
      const doResolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'fulfilled'
          this.value = value
          this.onSuccessQueue.forEach((fn) => {
            typeof fn === 'function' && fn(this.value)
          })
        }
      }
      setTimeout(doResolve, 0)
    }
    const reject = (reson) => {
      const doReject = (error) => {
        if (this.status === 'pending') {
          this.status = 'rejected'
          this.reason = error
          this.onFailedQueue.forEach((fn) => {
            typeof fn === 'function' && fn(this.reason)
          })
        }
      }
      setTimeout(doReject, 0)
    }
    executor(resolve, reject)
  }
  then(onresolve = (value) => value, onreject = (error) => error) {
    return new myPromise((resolve, reject) => {
      const successFn = (value) => {
        try {
          const result = onresolve(value)
          result instanceof myPromise ? result.then(resolve, reject) : resolve(value)
        } catch (err) {
          reject(err)
        }
      }
      const failedFn = (error) => {
        try {
          const result = onreject(error)
          result instanceof myPromise ? result.then(resolve, reject) : reject(value)
        } catch (err) {
          reject(err)
        }
      }
      if (this.status === 'pending') {
        this.onSuccessQueue.push(successFn)
        this.onFailedQueue.push(failedFn)
      } else if (this.status === 'fulfilled') {
        onreject(this.value)
      } else {
        onreject(this.reason)
      }
    })
  }
  catch() {}
}
const pro = new myPromise((resolve, reject) => {
  setTimeout(resolve, 1000)
  setTimeout(reject, 2000)
})

pro
  .then(() => {
    console.log('2_1')
    const newPro = new myPromise((resolve, reject) => {
      console.log('2_2')
      setTimeout(reject, 2000)
    })
    console.log('2_3')
    return newPro
  })
  .then(
    () => {
      console.log('2_4')
    },
    () => {
      console.log('2_5')
    }
  )

pro
  .then(
    (data) => {
      console.log('3_1')
      throw new Error()
    },
    (data) => {
      console.log('3_2')
    }
  )
  .then(
    () => {
      console.log('3_3')
    },
    (e) => {
      console.log('3_4')
    }
  )
