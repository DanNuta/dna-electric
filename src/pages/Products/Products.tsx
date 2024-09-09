import React, { PropsWithChildren, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import { useWishlistContext } from "hooks";
import { DOCS_FIRESTORE_IDS } from "models";

import { ProductsView } from "./Products.view";
import { db } from "../../firebase/config";
import { dataProductModel } from "../../models/dataProduct.model";

type Props = {
  collection: DOCS_FIRESTORE_IDS;
  products: dataProductModel[];
  link: string;
};

export const Products: React.FC<PropsWithChildren<Props>> = (
  props: PropsWithChildren<Props>
) => {
  const { id } = useParams();
  const { addWishList } = useWishlistContext();

  const [dateState, setDataState] = useState<dataProductModel>();

  const [isPendingState, setIsPendingState] = useState<boolean | null>(null);
  const [contorState, setContorState] = useState(0);

  useEffect(() => {
    setIsPendingState(true);

    if (!id) return;

    const ref = doc(db, props.collection, id);

    const getDocData = async () => {
      const docData = await getDoc(ref);
      const actualDataDoc = docData.data() as dataProductModel;
      setDataState({
        categoria: actualDataDoc.categoria,
        description: actualDataDoc.description,
        id: actualDataDoc.id,
        img: actualDataDoc.img,
        title: actualDataDoc.title,
        price: Number(actualDataDoc.price)
      });
      setIsPendingState(false);
    };

    getDocData();
  }, [id]);

  const nextImg = () => {
    const lengthImg = dateState?.img?.length;

    if (lengthImg) {
      if (contorState == lengthImg - 1) {
        setContorState(0);
      } else {
        setContorState((prev) => {
          return prev + 1;
        });
      }
    }
  };

  const prevImg = () => {
    const lengthImg = dateState?.img?.length;

    if (lengthImg) {
      if (contorState == 0) {
        setContorState(lengthImg - 1);
      } else {
        setContorState((prev) => {
          return prev - 1;
        });
      }
    }
  };

  return (
    <ProductsView
      wishlist={addWishList}
      prev={prevImg}
      contor={contorState}
      next={nextImg}
      data={dateState}
      isPending={isPendingState}
      products={props.products}
      link={props.link}>
      {props.children}
    </ProductsView>
  );
};
