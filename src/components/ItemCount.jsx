import { useState } from "react";

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }
    return ( 
        <div>
            <button onClick={restar}>-</button>
            <span>{counter}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
}
    
    export default ItemCount