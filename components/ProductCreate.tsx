import React, { useState } from "react";

interface ProductCreateProps {
  onCreateProduct: (product: any) => void;
}

const ProductCreate: React.FC<ProductCreateProps> = ({ onCreateProduct }) => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };

  const [showform, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const { nama, deskripsi, imageURL } = formData;

  const handleShow = () => {
    setShowForm(!showform);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="  mx-16 flex justify-between">
        <button
          onClick={handleShow}
          className="bg-blue-500 px-2 py-1 rounded-md "
        >
          {showform ? "Close" : "Add Product"}
        </button>
      </div>
      {showform && (
        <div className="mx-[64px] flex justify-center">
          <div className="bg-gray-100 p-8 rounded shadow-md w-[500px]">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              Tambahkan Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="nama"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Masukkan title produk"
                  value={nama}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deskripsi
                </label>
                <textarea
                  name="deskripsi"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Masukkan deskripsi produk"
                  value={deskripsi}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="imageURL"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageURL"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Masukkan URL gambar produk"
                  value={imageURL}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-300 transition-colors"
                >
                  Tambahkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCreate;
