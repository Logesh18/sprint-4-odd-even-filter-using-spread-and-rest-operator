import { useState } from "react";
import reactDom from "react-dom";
const Filter=(props)=>{
    let n=props.n;
    const filterOdd=(...rest)=>{
        let odd=[];
        for(let i of rest){
            if(i%2!==0){
                odd=[...odd,i];
            }
        }
        return [...odd];
    };
    const filterEven =(...rest)=>{
        let even=[];
        for(let i of rest){
            if(i%2===0){
                even=[...even,i];
            }
        }
        return [...even];
    }
    const generateRandomList=( n = 7 )=>{
        console.log(n);
        let a=[];
        for (let i=0; i <n ;) {
            let value = Math.floor((Math.random()* 100) + 1);
            if(a.indexOf(value) === -1){
              a=[...a,value];
              i++;
            } 
        }
        console.log(a);
        return [[...a],filterOdd(...a),filterEven(...a)];
    }
    return (
       <div>
           {
                <div>
                {
                     generateRandomList(n).map((values,i)=>{
                        if(i===0){
                            return(
                                <div>
                                    <h1>Generated Array</h1>
                                    <div id="container">
                                        <div id="inner-container">
                                        {
                                            values.map(generatedvalue=>{ return(<p key={"generated"+generatedvalue.toString()}>{generatedvalue}</p> ) })
                                        } 
                                        </div>
                                    </div>
                                </div>   
                            )
                        }
                        else if(i===1){
                            return(
                                <div>
                                    <h1>Filtered Odd Array</h1>
                                    <div id="container">
                                        <div id="inner-container">
                                        {
                                            values.map(oddvalue=>{ return(<p key={"odd"+oddvalue.toString()}>{oddvalue}</p>) })
                                        } 
                                        </div>
                                    </div>
                                </div>   
                            )
                        }
                        else{
                            return(
                                <div>
                                    <h1>Filtered Even Array</h1>
                                    <div id="container">
                                        <div id="inner-container">
                                        {
                                            values.map(evenvalue=>{ return(<p key={"even"+evenvalue.toString()}>{evenvalue}</p>) })
                                        } 
                                    </div>
                                    </div>
                                </div>   
                            )
                        }
                    })    
                } 
                </div>   
           }
       </div>
    )
}
const FilterOddEven=()=>{
    const [n,setSize]=useState(0);
    const handleEvent=()=>{
        setSize(Number(document.getElementById("size").value));
        reactDom.render(<Filter n={n}/>,document.getElementById("filterContainer"));
    }
    return(
        <div id="bodyContainer">
        <h1>Odd and Even Number Filter</h1>
        <div id="form">
            <input type="text" id="size" placeholder="Enter the Array Size" onChange={(e)=>setSize(e.target.value)}/>
            <button onClick={handleEvent}>Submit</button>
        </div>

        <div id="filterContainer"></div>
        </div>
    )
}
export default FilterOddEven;