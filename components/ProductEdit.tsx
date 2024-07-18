import React, { useState } from "react";

const ProductEdit = ({
  Product,
  onUpdateProduct,
  cancelEdit,
}: {
  Product: any;
  onUpdateProduct: any;
  cancelEdit: any;
}) => {
  // Menggunakan destructuring untuk mendapatkan properties dari Product
  const { nama, deskripsi, imageURL } = Product;

  const initialState = {
    nama: nama,
    deskripsi: deskripsi,
    imageURL: imageURL,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onUpdateProduct(Product.id, formData);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    // Komponen edit product
    <div className="border p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mt-2 text-black">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {/* Div card edit product */}
        <div>
          <label className="block text-gray-700">Title</label>
          {/* Input */}
          <input
            onChange={handleChange}
            name="nama"
            value={formData.nama}
            type="text"
            className="w-full px-1 py-1 border rounded text-black text-[12px]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            className="w-full px-3 py-2 border rounded text-black text-[12px]"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            onChange={handleChange}
            type="text"
            name="imageURL"
            value={formData.imageURL}
            className="w-full px-3 py-2 border rounded text-black text-[12px]"
          />
        </div>
        {/* Button */}
        <div className="flex gap-2 mt-10">
          <input
            type="submit"
            value="Save"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          />
          <button
            onClick={handleCancel}
            type="button"
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
