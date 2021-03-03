function maxValue(node, visited=new Set()) {
let num = 0
let queue = [node];
while(queue.length){
    let node = queue.shift();
    if(visited.has(node)) continue;
    visited.add(node);
    if(node.val > num) num = node.val;
    let neighbors = node.neighbors;
    queue.push(...neighbors)
}
return num
}

module.exports = {
    maxValue
};