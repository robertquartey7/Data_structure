class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    this.adjacentList[vertex] = [];
  }
  addEdges(v1, v2){
    this.adjacentList[v1].push(v2);
    this.adjacentList[v2].push(v1)

  }
    

    
  DFS(vertex){

    let data = [];

    let store = {

    }

    (function(vertex){
      if(!vertex) return null

      


    })(vertex)

    


    return data
  }
  

}
