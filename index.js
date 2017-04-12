function getFirstSelector (selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
const ranked = document.querySelectorAll('.ranked-list')
for (var i = 0; i < ranked.length; i++) {
  let children = ranked[i].children
for (var h = 0; h < children.length; h++) {
  children[h].innerHTML = parseInt(children[h].innerHTML) + n
}}}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
