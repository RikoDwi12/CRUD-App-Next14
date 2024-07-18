"use client";

// src/components/CardProduk.tsx
import Image from "next/image";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";

type CardProdukProps = {
  id: number;
  nama: string;
  deskripsi: string;
  imageURL: string;
  onDeleteProduct: (id: number) => void;
  onEditeProduct: (id: any, data: any) => void;
};

const ProductCard: React.FC<CardProdukProps> = ({
  id,
  nama,
  deskripsi,
  imageURL,
  onDeleteProduct,
  onEditeProduct,
}) => {
  const [jumlahProduct, setJumlahProduct] = useState(0);

  const [showEdit, setShowEdit] = useState(false);

  const kurangProducut = () => {
    setJumlahProduct(jumlahProduct - 1);
  };
  const tambahProducut = () => {
    setJumlahProduct(jumlahProduct + 1);
  };

  const handleDelete = () => {
    onDeleteProduct(id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: any, data: any) => {
    setShowEdit(false);
    onEditeProduct(id, data);
  };

  const cancdelEdit = () => {
    setShowEdit(false);
  };
  return (
    <div className="div wraper">
      {showEdit ? (
        <ProductEdit
          Product={{ id, nama, deskripsi, imageURL }}
          onUpdateProduct={handleSubmit}
          cancelEdit={cancdelEdit}
        />
      ) : (
        <div className="border p-4 rounded-lg shadow-lg">
          <div className="flex flex-row justify-end gap-4 pb-[2px]">
            <AiTwotoneEdit
              onClick={handleEdit}
              size={22}
              className="bg-slate-700 cursor-pointer"
            />
            <MdDeleteForever
              onClick={handleDelete}
              size={22}
              className="bg-red-700 cursor-pointer"
            />
          </div>
          <Image
            src={imageURL}
            alt={nama}
            width={300}
            height={200}
            className="rounded"
          />

          <h2 className="text-xl font-bold mt-4 text-black text-[12px]">
            {nama}
          </h2>
          <p className="text-gray-700 text-[12px]">{deskripsi}</p>
          <div className="border-2 border-black flex flex-row items-center justify-center space-x-4 p-2 rounded">
            {jumlahProduct > 0 ? (
              <>
                <button
                  onClick={kurangProducut}
                  className="px-2  bg-gray-300 hover:bg-gray-400 rounded"
                >
                  -
                </button>
                <div className="text-xl font-bold text-black">
                  {jumlahProduct}
                </div>
                <button
                  onClick={tambahProducut}
                  className="px-2  bg-gray-300 hover:bg-gray-400 rounded"
                >
                  +
                </button>{" "}
              </>
            ) : (
              <div
                onClick={tambahProducut}
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-300"
              >
                <button>keranjang</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a1 1 0 0 1-1-1v-6H5a1 1 0 0 1 0-2h4V3a1 1 0 0 1 2 0v5h4a1 1 0 0 1 0 2h-4v6a1 1 0 0 1-1 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
