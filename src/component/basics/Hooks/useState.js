import './style.css';
const UseState = () => {
    return (
        <>
        <div className=" center_div">
            <p>MBTIs</p>
            <div className = "button2" onClick ={()=>(   window.location.href = "https://PythonHava.github.io/NewMBTI")}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Normal 16 Types
                
                </div>new
                <div className = "button2" onClick ={()=>(   window.location.href = "https://PythonHava.github.io/TOXICMBTI")} > 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Toxic 16 Types

                </div>
             </div>
</>           )   
  }
  export default UseState;