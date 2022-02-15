/**
 * let arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
  =>
  [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
  ]
 * 
 * 
 */
type List = {
  id: number
  name: string
  pid: number
  children?: List[]
}

const lists: List[] = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 5 },
  { id: 7, name: '部门7', pid: 3 },
]
//递归方法
const list2tree1 = (lists: List[], pid = 0): List[] => {
  return lists.filter((item) => {
    if (item.pid == pid) {
      item.children = list2tree1(lists, item.id)
      return true
    }
    return false
  })
}
//console.log(list2tree1(lists, 0))

//迭代方法
const list2tree2 = (lists: List[], parentMenuId = 0) => {
  let menuObj = {}
  lists.forEach((item) => {
    item.children = []
    menuObj[item.id] = item
  })
  return lists.filter((item) => {
    if (item.pid !== parentMenuId) {
      menuObj[item.pid].children.push(item)
      return false
    }
    return true
  })
}
console.log(list2tree2(lists, 0))
