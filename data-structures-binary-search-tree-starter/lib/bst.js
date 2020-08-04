class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }
    insert(val){
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        let current = this.root;
        let previous;
        while(current){
            previous = current;
            if (val > current.val) current = current.right;
            else current = current.left;
        }
        if (val < previous.val){
            previous.left = new TreeNode(val);
        }
        else previous.right = new TreeNode(val);
    }
    searchRecur(val, node = this.root){
        if(!node) return false;
        if (node.val === val) return true;
        if (val < node.val) return this.searchRecur(val, node.left);
        else return this.searchRecur(val,node.right);
    }

    searchIter (val) {
        let current = this.root;
        if (!current) return false;
        while(current) {
            if (val === current.val) return true;
            else if (val < current.val) current = current.left;
            else current = current.right;
        }
        return false;
    }

}

module.exports = {
    TreeNode,
    BST
};
