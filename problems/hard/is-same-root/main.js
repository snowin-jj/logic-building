var isSameTree = function (p, q) {
  // both trees are null
  if (!p && !q) return true;
  // one of p and q is null
  if (!q || !p) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

// Define the TreeNode constructor function
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Create two trees, p and q
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

// Call the function with p and q as arguments
console.log(isSameTree(p, q)); // Output: true

// Modify the trees
p.right = null;
q.right = new TreeNode(3);

console.log(isSameTree(p, q));
