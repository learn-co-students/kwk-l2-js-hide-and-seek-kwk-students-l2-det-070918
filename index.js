//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n){
<<<<<<< HEAD
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for(let i = 0; i < rankedLists.length; i++){
    let children = rankedLists[i].children
  
  for(let j = 0, k = children.length; j < k; j++){
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
}
=======
  return document.querySelector(parseInt(".ranked-list") + n)
>>>>>>> ef510799d7fb9bd35f0b18f70218ee8c6177927a
}