/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

// function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
//   if(!adjacencyList) return undefined;
//   if(!adjacencyList[name]) return undefined;
//   // console.log(name, adjacencyList, visited, maxDistance, currentDistance)
// }

function friendsOf(adjacencyList, name, distance) {
  let keys = Object.keys(adjacencyList)

  if(keys.length === 0) return undefined;
  if(adjacencyList[name] === undefined) return undefined;
  let count = keys.length;
  // console.log(adjacencyList[name], name, distance, adjacencyList)
  if(adjacencyList[name].length === 0 && (distance > 0 && distance < 100)){
    return [];
  }
  // console.log(adjacencyList[name].length === 0)
  // console.log(adjacencyList)



  // let visited = new Set();

  // let stack = [adjacencyList[name]];
  // if(stack === [[]]){
  //   return [];
  // } else {
  //   // console.log(stack, 'here')
  //   while(distance) {
  //     // console.log(stack, 'before shift')
  //     let shifted = stack.shift();
  //     if(visited.has(shifted)) continue;
  //     // console.log('here', stack, '-', adjacencyList[name])
  //     visited.add(shifted);
  //     distance--
  //     let neighbors = adjacencyList[shifted];
  //     // console.log(neighbors, shifted)
  //     distance = 0;
  //     // for(let i = 0; i < neighbors.length; i++){
  //     //   let neighbor = neighbors[i]
  //     //   if(adjacencyList[neighbor] === shifted){
  //     //     return []
  //     //   }
  //     //   stack.unshift(neighbor);
  //     // }
  //   }
  // }
  // return Array.from(visited);


}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
