var MyNode = /** @class */ (function () {
    function MyNode(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    MyNode.prototype.show = function () {
        console.log(this.data);
    };
    return MyNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (data) {
        var node = new MyNode(data, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }
        var current = this.root;
        var parent = null;
        while (current) {
            parent = current;
            if (data < parent.data) {
                current = current.left;
                if (!current) {
                    parent.left = node;
                    return;
                }
            }
            else {
                current = current.right;
                if (!current) {
                    parent.right = node;
                    return;
                }
            }
        }
    };
    BinaryTree.prototype.preOrder = function (node) {
        if (node) {
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    };
    BinaryTree.prototype.middleOrder = function (node) {
        if (node) {
            this.middleOrder(node.left);
            node.show();
            this.middleOrder(node.right);
        }
    };
    BinaryTree.prototype.lastOrder = function (node) {
        if (node) {
            this.lastOrder(node.left);
            this.lastOrder(node.right);
            node.show();
        }
    };
    BinaryTree.prototype.getMin = function () {
        var current = this.root;
        while (current) {
            if (!current.left) {
                return current;
            }
            current = current.left;
        }
        return current;
    };
    BinaryTree.prototype.getMax = function () {
        var current = this.root;
        while (current) {
            if (!current.right) {
                return current;
            }
            current = current.right;
        }
        return current;
    };
    BinaryTree.prototype.getDeep = function (node, deep) {
        if (deep === void 0) { deep = 0; }
        if (node == null) {
            return deep;
        }
        deep++;
        var dleft = this.getDeep(node.left, deep);
        var drigth = this.getDeep(node.right, deep);
        return Math.max(dleft, drigth);
    };
    return BinaryTree;
}());
var t = new BinaryTree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
console.log(t);
console.log(t.preOrder(t.root));
console.log(t.middleOrder(t.root));
console.log(t.lastOrder(t.root));
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 1));
