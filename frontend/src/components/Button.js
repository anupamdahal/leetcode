import '../styles/Problem.css'

const Button = (props) =>{

    const clickHandler = ()=>{
        props.click(props.name);
    }

    return(
        <button onClick ={clickHandler} className="buttons">{props.name}</button>
    )
}

export default Button