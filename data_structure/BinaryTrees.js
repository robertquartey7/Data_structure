//Binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  //      23
  //    16    45
  //  3   22 37  99
  //

  search(value) {
    let current = this.root;
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  BFS(value) {
    let node = this.root,
      queue = [],
      data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];

    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  LCA(target1, target2) {
    let current = this.root;
    function helper(node) {
      if (node === null) {
        return null;
      }
      if (node.value === target1 || node.value === target2) return node;
      let left = helper(node.left);
      let right = helper(node.right);

      if (left && right) {
        console.log(node);
        return node;
      }
      // return right !=null ? right : left;
    }

    helper(current);
  }
}

let tree = new BinarySearchTree();
// tree.insert(23);
// tree.insert(16);
// tree.insert(45);
// tree.insert(3);
// tree.insert(22);
// tree.insert(37);
// tree.insert(99);
tree.insert(56);
tree.insert(22);
tree.insert(81);
tree.insert(10);
tree.insert(30);
tree.insert(77);
tree.insert(92);
console.log(tree.LCA(10, 92));
// console.log(tree.DFSPostOrder());
// console.log(tree.DFSPreOrder());
