function aStar(startNode, endNode){

    let openSet = [];
    let closedSet = [];
    let path = [];
    let visitedNodes = [];
    

    openSet.push(startNode);
    while(openSet.length > 0){
        let leastIndex = 0;
        for(let i =0; i< openSet.length; i++){

            if(openSet[i].f< openSet[leastIndex].f)
            {
                leastIndex = 1;
            }
        }
        let current = openSet[leastIndex];
        visitedNodes.push(current);
        
        if(current === endNode){
            let temp = current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;

            }
            // console.log(path);
            return {path, visitedNodes};

            // console.log("Path Found")
        }

    openSet = openSet.filter(elt => elt !== current);
    closedSet.push(current);

    let neighbors = current.neighbors;
    for(let i =0; i<neighbors.length;i++)
    {
        let neighbor = neighbors[i];
        if(!closedSet.includes(neighbor))
        {
            let tempG = current.g + 1;
            let newPath = false;
            if(openSet.includes(neighbor))
            {
                if(tempG< neighbor.g)
                {
                    neighbor.g = tempG;
                    newPath = true;

                }
            }else{
                neighbor.g = tempG;
                newPath = true;
                openSet.push(neighbor);

            }

            if(newPath)
            {
                neighbor.h =heuristic(neighbor, endNode);
                neighbor.f = neighbor.h + neighbor.h;
                neighbor.previous = current;

            }
        }
    }
}
    return{path, visitedNodes, error: "No path found!"}
}

function heuristic(a,b){
    let d = Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    // let d = Math.abs(a.x - a.y) + Math.abs(b.x - b.y); 
    return d;

}

export default aStar;