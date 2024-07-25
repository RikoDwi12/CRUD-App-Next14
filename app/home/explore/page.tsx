"use client";

import React, { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import ProductCreate from "@/components/ProductCreate";
import axios from "axios";

interface Product {
  id: number;
  nama: string;
  stock: number;
  deskripsi: string;
  imageURL: string;
}
const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://127.0.0.1:3005/products"
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onCreateProduct = async (product: any) => {
    const response = await axios.post(
      "http://127.0.0.1:3005/products",
      product
    );
    console.log(response);
    setProducts([...products, response.data]);
  };

  const onDeleteProduct = async (id: any) => {
    const response = await axios.delete(`http://127.0.0.1:3005/products/${id}`);
    console.log(response);

    console.log(response);
    const updateProduct = products.filter((prod) => {
      return prod.id != id;
    });

    setProducts(updateProduct);
  };

  const onEditeProduct = async (id: any, data: any) => {
    const response = await axios.put(
      `http://127.0.0.1:3005/products/${id}`,
      data
    );
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
