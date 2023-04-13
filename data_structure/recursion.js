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

  search(value) {
    let current = this.root;

    function helper(node) {
      if (node === null) return null;
      if (node.value === value){
        console.log(node)
        return node
      };
      console.log(node.value)
      helper(node.left);
      helper(node.right);
    }
    helper(current);
  }
  //      23
  //    16    45
  //  3   22 37  99
  //
}

let tree = new BinarySearchTree();
tree.insert(23);
tree.insert(16);
tree.insert(45);
tree.insert(3);
tree.insert(22);
tree.insert(37);
tree.insert(99);

console.log(tree.search(22));
