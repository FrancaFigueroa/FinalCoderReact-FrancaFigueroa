import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Plantas', detalleId);

        getDoc(queryDoc)
            .then(res => {
                console.log(res.data())
                setData({ id: res.id, ...res.data() })
            })
    }, [detalleId])
    return (

        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;