"use client";

import React, { useState } from "react";
import { Products as ProductData } from "@/data/product";
import ProductList from "@/components/ProductList";
import ProductCreate from "@/components/ProductCreate";

const Page = () => {
  const [products, setProducts] = useState(ProductData);

  const onCreateProduct = (product: any) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 7777), ...product },
    ]);
  };

  const onDeleteProduct = (id: any) => {
    const updateProduct = products.filter((prod) => {
      return prod.id != id;
    });

    setProducts(updateProduct);
  };

  const onEditeProduct = (id: any, data: any) => {
    const updateProduct = products.map((prod) => {
      if (prod.id == id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    setProducts(updateProduct);
  };

  return (
    <>
      <div className="py-[60px] flex justify-center text-[18px] lg:text-[32px] text-black font-bold text-center">
        INI MERUPAKAN SHOWROOM PENJUALAN MOBIL
      </div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        Products={products}
        onDeleteProduct={onDeleteProduct}
        onEditeProduct={onEditeProduct}
      />
    </>
  );
};

export default Page;
