// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("../../data-structures-binary-tree-starter/lib/tree_node");

// Given an array where elements are sorted in ascending order,
// convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined
// as a binary tree in which the depth of the two subtrees of
// every node never differ by more than 1.

// Given the sorted array: [-10, -3, 0, 5, 9],

// One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height balanced BST
// 0
// / \
// -3   9
// /   /
// -10  5
function sortedArrayToBST(nums) {
    if (!nums.length) return null;
    let midpoint = Math.floor(nums.length/2);
    let left = nums.slice(0, midpoint);
    let right = nums.slice(midpoint +1);
    let root = new TreeNode(nums[midpoint]);
    root.right = sortedArrayToBST(right);
    root.left = sortedArrayToBST(left);
    return root;
}
