import React, { useState } from 'react'

const ItemCount = ({ item, initial, onAdd, stock }) => {
    const [contador, setContador] = useState(() => initial ? initial : 1)
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
                onAdd(item, contador)
                setContador(initial)
            }}>Agregar</button>
        </div>
    )
}

export default ItemCount;