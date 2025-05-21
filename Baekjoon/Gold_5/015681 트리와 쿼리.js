const filePath = process.platform === 'linux' ? '/dev/stdin' : 'sample.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\r?\n/);

const [N, root, M] = input.shift().split(" ").map(Number);

const edges = input.slice(0, N - 1).map(edge => edge.split(" ").map(Number));
const queries = input.slice(N - 1).map(Number);

const adjacencyList = edges.reduce((graph, [node1, node2]) => {
  graph[node1].push(node2); 
  graph[node2].push(node1);
  return graph;
}, Array(N + 1).fill().map(() => []))

const subtreeSizes = Array(N + 1).fill(null);

calculateSubtreeSizes(null, root);

queries.forEach((queryNode) => console.log(subtreeSizes[queryNode]));

function calculateSubtreeSizes(parentNode, currentNode) {
  let subtreeSize = 1;

  const neighbors = adjacencyList[currentNode];
  for (const neighbor of neighbors) {
    if (neighbor === parentNode) continue;

    subtreeSize += calculateSubtreeSizes(currentNode, neighbor);
  }

  subtreeSizes[currentNode] = subtreeSize;
  return subtreeSize;
}
