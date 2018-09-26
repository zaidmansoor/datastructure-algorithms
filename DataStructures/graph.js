class Graph {
    constructor(n) {
        this.pq = new Array(n);
        this.count = n;

        for (let i = 0; i < this.pq.length; i++) {
            this.pq[i] = [];
        }
    }

    depthFirstSearch(s) {
        let visited = new Array(this.count).fill(false);
        let path = "";
        let self = this;
        
        let dfsHelper = function(v, visited) {
            path += v + " ";
            visited[v] = true;
            let list = self.pq[v];

            for (var i = 0; i < list.length; i++) {
                if (!visited[list[i]]) {
                    dfsHelper(list[i], visited);
                }
            }
        }

        dfsHelper(s, visited, path);
        console.log(path);
    }

    breadthFirstSearch(s) {
        let queue = [];
        let visited = new Array(this.count).fill(false);
        let path = "";
        queue.push(s);
        visited[s] = true;

        while(queue.length > 0) {
            let val = queue.shift();
            path += val + " ";
            let node = this.pq[val];

            for (var i = 0; i < node.length; i++) {
                if (!visited[node[i]]) {
                    visited[node[i]] = true;
                    queue.push(node[i]);
                }
            }
        }

        console.log(path);
    }

    addEdge(i, j) {
        this.pq[i].push(j);
        //this.pq[j].push(i);
    }

    printGraph() {
        for (let i = 0; i < this.count; i++) {
            let str = i + " has";
            
            for (let j = 0; j < this.pq[i].length; j++) {
                str += " " + this.pq[i][j] + ",";
            }
            
            str += " edges";
            console.log(str);
        }
    }
}

let graph = new Graph(7);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(4, 5);
graph.addEdge(3, 5);
graph.addEdge(5, 6);
graph.addEdge(4, 6);
graph.printGraph();

graph.breadthFirstSearch(1);
graph.depthFirstSearch(1);

