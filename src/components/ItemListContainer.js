import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const queryCollection = collection(db, "Plantas");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((planta) => ({ id: planta.id, ...planta.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) => {
        setData(
          res.docs.map((planta) => ({ id: planta.id, ...planta.data() }))
        );
      });
    }
  }, [categoriaId]);

  return (
    <>
      <div className="titulo">Bienvenidos a {greeting}</div>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;