class MyNode {
  data: string | number
  left: MyNode | null
  right: MyNode | null
  constructor(data: string | number, left: MyNode | null, right: MyNode | null) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    console.log(this.data)
  }
}

class BinaryTree {
  root: MyNode
  constructor() {
    this.root = null
  }
  insert(data: string | number) {
    const node = new MyNode(data, null, null)
    if (!this.root) {
      this.root = node
      return
    }
    let current = this.root
    let parent = null
    while (current) {
      parent = current
      if (data < parent.data) {
        current = current.left
        if (!current) {
          parent.left = node
          return
        }
      } else {
        current = current.right
        if (!current) {
          parent.right = node
          return
        }
      }
    }
  }
  preOrder(node: MyNode) {
    if (node) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  middleOrder(node: MyNode) {
    if (node) {
      this.middleOrder(node.left)
      node.show()
      this.middleOrder(node.right)
    }
  }
  lastOrder(node: MyNode) {
    if (node) {
      this.lastOrder(node.left)
      this.lastOrder(node.right)
      node.show()
    }
  }
  getMin(): MyNode {
    let current = this.root
    while (current) {
      if (!current.left) {
        return current
      }
      current = current.left
    }
    return current
  }
  getMax(): MyNode {
    let current = this.root
    while (current) {
      if (!current.right) {
        return current
      }
      current = current.right
    }
    return current
  }
  getDeep(node: MyNode, deep: number = 0) {
    if (node == null) {
      return deep
    }
    deep++
    let dleft = this.getDeep(node.left, deep)
    let drigth = this.getDeep(node.right, deep)
    return Math.max(dleft, drigth)
  }
}

let t = new BinaryTree()
t.insert(3)
t.insert(8)
t.insert(1)
t.insert(2)
t.insert(5)
t.insert(7)
t.insert(6)
t.insert(0)
console.log(t)
console.log(t.preOrder(t.root))
console.log(t.middleOrder(t.root))
console.log(t.lastOrder(t.root))
console.log(t.getMin(), t.getMax())
console.log(t.getDeep(t.root, 1))
