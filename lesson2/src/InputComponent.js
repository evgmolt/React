import './App.css';

const InputComponent = (props) => {
    return (
        <input className="input"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            onKeyDown={(e) => props.onKeyDown(e.target.value)}
        />
    )
}

export default InputComponent;