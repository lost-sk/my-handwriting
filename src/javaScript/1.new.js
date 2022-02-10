/**
 * new的执行过程
 * 1 创建一个新的对象 obj
 * 2 该对象的_proto_执行构造函数Fn的原型prototype
 * 3 执行构造函数Fn的代码，往新创建的obj上添加成员的属性和方法
 * 4 返回obj
 */
const myNew = function (func, ...args) {
  if (typeof func !== 'function') {
    throw 'must be a function'
  }
  // 1 创建一个新的对象 obj
  // 2 该对象的_proto_执行构造函数Fn的原型prototype
  let obj = Object.create(func.prototype)
  let result = func.apply(obj, args)
  if ((typeof result == 'objcet' && result !== null) || typeof result === 'function') {
    return result
  }
  return obj
}

let Person = function (name, sex) {
  this.name = name
  this.sex = sex
}
Person.prototype.info = function () {
  console.log(`name:${this.name} sex:${this.sex}`)
}

let p = myNew(Person, 'Lurice', 35)
console.log(p)
console.log(p.info())
