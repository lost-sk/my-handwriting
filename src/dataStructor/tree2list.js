var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var data = [
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
                                        children: []
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 7,
                        name: '部门7',
                        pid: 3,
                        children: []
                    },
                ]
            },
        ]
    },
];
var tree2list1 = function (tree) {
    var list = [];
    var queue = __spreadArray([], tree, true);
    while (queue.length) {
        var node = queue.shift();
        var children = node.children;
        if (children.length) {
            queue.push.apply(queue, children);
        }
        delete node.children;
        list.push(node);
    }
    return list.sort(function (a, b) { return a.id - b.id; });
};
console.log(tree2list1(data));
