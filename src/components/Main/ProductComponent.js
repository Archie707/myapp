import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase-config';

const ProductComponent = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const docRef = db.collection('products').doc('VmyciBwknd311NlDE9l4');
      const doc = await docRef.get();
      if (doc.exists) {
        setProduct(doc.data());
      } else {
        console.log("No such document!");
      }
    };

    getProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Cena: {product.cena}</p>
      <img src={product.image_url} alt={product.name} />
    </div>
  );
};

export default ProductComponent;
