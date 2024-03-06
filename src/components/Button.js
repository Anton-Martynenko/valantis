import './Button.css';

export const Button = (props) => {
    return (
        <button className="button" onClick={props.click}>
            {props.text}
        </button>
    );
};
