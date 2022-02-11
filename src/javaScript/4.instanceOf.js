const myInstanceOf = function (obj, func) {
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }

  let proto = Object.getPrototypeOf(obj)

  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return myInstanceOf(proto, func)
  }
}
let Fn = function () {}
let p1 = new Fn()

console.log(myInstanceOf({}, Object))
console.log(myInstanceOf(p1, Fn))
console.log(myInstanceOf({}, Fn))
console.log(myInstanceOf(null, Fn))
console.log(myInstanceOf(1, Fn))
console.log(myInstanceOf(function a() {}, Function))
