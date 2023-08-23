import React,{useState,useRef,useEffect} from "react";



const UseRef = ()=>{
const [count,setCount] = useState("")
// const iCount = useRef(0)
const inputEle = useRef()
function countI(){

console.log(inputEle.current);
}

// useEffect(()=>{
//     // setCount(count+1)
//     iCount.current =iCount.current+1
// })

    return (
        <div>
   <h1> i am use ref</h1>
   <input ref={inputEle} type="text" value={count} onChange={countI}></input>
        </div>
    )
}
export default UseRef