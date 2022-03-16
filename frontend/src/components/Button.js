import '../styles/Problem.css'

const Button = (props) =>{

    const clickHandler = ()=>{
        props.click(props.name);
    }

    return(
        <button onClick ={clickHandler} className="buttons">{<h3>{props.name}</h3>}</button>
    )
}

export default Button