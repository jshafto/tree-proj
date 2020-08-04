// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

// Given preorder and inorder traversal of a tree,
// construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
// 3
// / \
// 9  20
//  /  \
// 15   7
const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null;
    let rootNode = new TreeNode(preorder[0]);
    let rootIndex = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex +1);
    // left preorder
    let leftPreorder = preorder.slice(1, leftInorder.length+1);
    // right preorder
    let rightPreorder = preorder.slice(leftInorder.length+1)


    rootNode.left = buildTree(leftPreorder,leftInorder);
    rootNode.right = buildTree(rightPreorder, rightInorder);

    return rootNode;

}


// preorder traversal helper
