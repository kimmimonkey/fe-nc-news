import {useState} from "react"; 

const Toggle = ({ children }) => {
    const [isHidden, setIsHidden] = useState(true); 

    const toggleIsHidden = () => {
        setIsHidden(!isHidden); 
    };

    return (
    <div> 
        <button onClick={toggleIsHidden}>
            {isHidden ? "Show" : "Hide"} Comments 
        </button>
        {isHidden ? null : children}
    </div>
    );
};

export default Toggle; 