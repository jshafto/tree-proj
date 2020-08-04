function inOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];

  // get the array for visiting the left node
  let left = inOrderArray(root.left);
  // get the array for visiting the right node
  let right = inOrderArray(root.right);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return [...left, root.val,...right];
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if (!root) return [];
  // get the array for visiting the left node
  let left = postOrderArray(root.left);
  // get the array for visiting the right node
  let right = postOrderArray(root.right);
  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...left, ...right, root.val]
}


module.exports = {
  inOrderArray,
  postOrderArray
};
