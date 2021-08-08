import React,{useState, useEffect} from  "react";
import Node from "./Node";
import "./Pathfind.css";
const cols = 25;
const rows = 10;

const NODE_START_ROW = 0;
const NODE_START_COLS = 0;
const NODE_END_ROW = rows - 1;
const NODE_END_COLS = cols - 1;

const Pathfind = () =>{
    const [Grid, setGrid] = useState([]);

    useEffect(() => {
        initializeGrid();},[]);
    // GRID
    const initializeGrid = () => {
        const grid = new Array(rows);

        for(let i = 0; i< rows; i++){
            grid[i] = new Array(cols);
        }
        // SPOT
        createSpot(grid);

        setGrid(grid);

    };
        const createSpot =(grid) => { 
            for(let i = 0; i< rows; i++){
                for(let j = 0; j< cols; j++){
                    grid[i][j] = new Spot(i,j);

            }
        }

    };
    // Spot constructor
    function Spot(i,j){
        this.x = i;
        this.y = j;
        this.isStart = this.x  === NODE_START_ROW && this.y === NODE_START_COLS;
        this.isEnd = this.x  === NODE_END_ROW && this.y === NODE_END_COLS;
        this.g = 0;
        this.f = 0;
        this.h = 0;
    }

        // Grid with Node
        const gridwithNode =  (
            <div>
                {Grid.map((row, rowIndex) =>{
                    return(
                    <div key = {rowIndex} className= "rowWrapper">
                        {row.map((col, colIndex)=>{
                            const {isStart, isEnd} = col;
                            return( <Node  key = {colIndex} isStart={isStart} isEnd = {isEnd} row = {rowIndex} col = {colIndex}/>
                            )
                        })}
                    </div>
                    );
                })}
                </div>
        );
    return(
    <div className = "Wrapper">
            <h1>Pathfind Component</h1>
            {gridwithNode}
        </div>
        
    );
};
export default Pathfind;




