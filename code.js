    function Dijkstra (graph,start) {
        var copyGraph=graph
        var output={};
        for(const key in graph){
            if (key===start) {output[start]=0}
            else {output[key]=Infinity}}
        var valuesStart=graph[start]
        for(const key in valuesStart){
            output[key]=valuesStart[key]
        } 
        console.log(valuesStart)
        console.log(output)
    }