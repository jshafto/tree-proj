const { TreeNode, BST } = require('./bst');
// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of
// every node differ in height by no more than 1.
// Given the following tree[3, 9, 20, null, null, 15, 7]:

//      3
//     / \
//    9  20
//      /  \
//     15   7
// Return true.

//     Example 2:

// Given the following tree[1, 2, 2, 3, 3, null, null, 4, 4]:

//       1           r
//      / \
//     2   2        1+1+1
//    / \
//   3   3          1+1
//  / \
// 4   4            1
// Return false.


findGreatestDepth = (node) =>{
    if (!node) return 0;
    return 1+ Math.max(findGreatestDepth(node.left), findGreatestDepth(node.right))
}
function isBalanced(root) {
    if(!root) return true;

    let left = findGreatestDepth(root.left);
    let right = findGreatestDepth(root.right);

    if (Math.abs(left - right) <= 1) {
        return isBalanced(root.left) && isBalanced(root.right);
    }
    else return false;
}
