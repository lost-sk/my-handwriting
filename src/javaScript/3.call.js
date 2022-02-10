Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new Error('must be a function')
  }
  //获取 函数参数
  let args = [...arguments].slice(1)
  let result = null
  if (!context) {
    context = typeof window !== 'undefined' ? window : global
  }

  context.fn = this
  //说白了就是将this(fn)作为context的属性，达到改变this的目的
  result = context.fn(...args)
  delete context.fn
  return result
}

let fn = function (name, sex) {
  console.log(this, name, sex)
}

let obj = {
  name: 'who',
}
fn.myCall('', 'lucie', 'girl')
fn.myCall(obj, 'la2', 'girl')
