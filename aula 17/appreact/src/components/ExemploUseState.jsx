import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)

    return (
        <div>
            <p>valor:{contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={() => setContador(0)}>reset</button>
        </div>
    )
}

export default Contador
