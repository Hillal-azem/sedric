import '../../css/button/index.css'

const Button = ({ counter, setCounter }) => {

    const handleButtonClick = function () {
        setCounter(counter + 1)
    }

    return (
        <div id="button-container">
            <button className="btn" onClick={handleButtonClick}>Incrémenter</button>
        </div>
    );
};


export default Button;
