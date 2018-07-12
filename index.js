//Code your solution here
function getFirstSelector(s) {
   return document.querySelector(s)
 }
 
function nestedTarget(s) {
   return document.querySelector("#nested .target")
 }
  
function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  
  while (nextNode) {
    node = nextNode
  }
  
  return node
  
}  
  
function increaseRankBy (s) {
  const rankedList = document.querySelectorAll('.ranked-list')
  
  for (let i = 0; l = rankedLists.length, i < l; i++) {
    let children = rankedLists[i].children
  }
  
}