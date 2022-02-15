var lists = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 5 },
    { id: 7, name: '部门7', pid: 3 },
];
//递归方法
var list2tree1 = function (lists, pid) {
    if (pid === void 0) { pid = 0; }
    return lists.filter(function (item) {
        if (item.pid == pid) {
            item.children = list2tree1(lists, item.id);
            return true;
        }
        return false;
    });
};
//console.log(list2tree1(lists, 0))
//迭代方法
var list2tree2 = function (lists, parentMenuId) {
    if (parentMenuId === void 0) { parentMenuId = 0; }
    var menuObj = {};
    lists.forEach(function (item) {
        item.children = [];
        menuObj[item.id] = item;
    });
    return lists.filter(function (item) {
        if (item.pid !== parentMenuId) {
            menuObj[item.pid].children.push(item);
            return false;
        }
        return true;
    });
};
console.log(list2tree2(lists, 0));
