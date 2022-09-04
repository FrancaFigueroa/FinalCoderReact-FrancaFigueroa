import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial ?? 0)
    const sumar = () => {
        if (contador === stock) return
        setContador(contador + 1)
    }
    const restar = () => {
        if (contador === initial) return
        setContador(contador - 1)
    }
    return (
        <div className="contenedor-button">
            <div className="button">
                <button className="button-rys" onClick={restar}>-</button>
                <span>{contador}</span>
                <button className="button-rys" onClick={sumar}>+</button>
            </div>
            <button className="button-agregar" onClick={() => {
                onAdd(contador)
                setContador(initial)
            }}>Agregar</button>
        </div>
    )
}

export default ItemCount