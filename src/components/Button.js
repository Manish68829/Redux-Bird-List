import "./Button.css"

const Button=(props)=>{
    return(
        <div>
            
    <button className="btn1" style={{backgroundColor:props.color}}>{props.BtnName}</button>
    {props.children}
    </div>
    )
    
}

export default Button;