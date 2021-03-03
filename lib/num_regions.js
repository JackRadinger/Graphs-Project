function breadthFirstTraversal(node, graph, visited) {
    // Code goes here ...
    if(visited.has(node)) return false;
    let queue = [node];
    while(queue.length) {
      let shifted = queue.shift()
      if(visited.has(shifted)) continue;
      visited.add(shifted)
      let neighbors = graph[shifted];
      queue.push(...neighbors)
    }
    return true;
  }


function numRegions(graph) {
    let visited = new Set();
    let counter = 0;
    
    for(let key in graph){
        if(breadthFirstTraversal(key, graph, visited)) counter++
    }
    return counter
}    


module.exports = {
    numRegions
};