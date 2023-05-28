import { useState } from "react"
import styles from '../button.module.css'
export default function MeuContador (){

    const [contador , setContador] = useState(0)

    const aumentar = () => setContador(contador + 1)
    const diminuir = () => setContador(contador - 1)

    return(
        <div className="container">
            <h1>Meu contador</h1>
            <h3>{contador}</h3>
            <div className="containerBotao">
                <button className={styles.myButton} onClick={aumentar}>+1</button>
                <button className={styles.myButton} onClick={diminuir}>-1</button>
            </div>


        </div>
    )
}