/**
 * [
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
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
=>
[
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
 * 
 */
type List = {
  id: number
  name: string
  pid: number
  children?: List[]
}
const data: List[] = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      { id: 2, name: '部门2', pid: 1, children: [] },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
                children: [
                  {
                    id: 6,
                    name: '部门6',
                    pid: 5,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 7,
            name: '部门7',
            pid: 3,
            children: [],
          },
        ],
      },
    ],
  },
]

const tree2list1 = (tree: List[]): List[] => {
  let list: List[] = []
  let queue = [...tree]
  while (queue.length) {
    const node = queue.shift()
    const children = node.children
    if (children.length) {
      queue.push(...children)
    }
    delete node.children
    list.push(node)
  }
  return list.sort((a, b) => a.id - b.id)
}
console.log(tree2list1(data))
