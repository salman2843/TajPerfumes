import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "men",
    quantity: "",
    itemForm: "Spray",
    itemVolumeValue: "",
    itemVolumeUnit: "ml",
    itemWeight: "",
    netQuantity: "",
    numberOfItems: 1,
    scent: "",
    specialFeature: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "quantity" || name === "numberOfItems"
          ? Number(value)
          : value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    const requiredFields = [
      "name",
      "brand",
      "description",
      "price",
      "category",
      "quantity",
      "itemForm",
      "itemVolumeValue",
    ];
    for (let field of requiredFields) {
      if (!form[field]) {
        toast.error(`${field} is required`);
        return;
      }
    }

    try {
      setLoading(true);

      // 🖼 Upload image first
      let imageUrl = "";
      if (imageFile) {
        const imageForm = new FormData();
        imageForm.append("image", imageFile);
        const res = await API.post("/products/upload", imageForm);
        imageUrl = res.data.imageUrl;
      } else {
        toast.error("Please upload a product image");
        setLoading(false);
        return;
      }

      // 🧠 Combine item volume
      const itemVolume = `${form.itemVolumeValue} ${form.itemVolumeUnit}`;

      const newProduct = {
        ...form,
        itemVolume,
        imageUrl, // image from Cloudinary
      };

      // Remove itemVolumeValue & itemVolumeUnit from payload
      delete newProduct.itemVolumeValue;
      delete newProduct.itemVolumeUnit;

      const res = await API.post("/products", newProduct);
      toast.success("Product added successfully! 🎉");

      // Option to add another
      const addMore = window.confirm("Do you want to add another product?");
      if (!addMore) {
        navigate("/admin/products");
      } else {
        // reset form
        setForm({
          name: "",
          brand: "",
          description: "",
          price: "",
          category: "men",
          quantity: "",
          itemForm: "Spray",
          itemVolumeValue: "",
          itemVolumeUnit: "ml",
          itemWeight: "",
          netQuantity: "",
          numberOfItems: 1,
          scent: "",
          specialFeature: "",
        });
        setImageFile(null);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block font-medium">Product Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Brand *</label>
          <input
            type="text"
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="input"
            rows={3}
          />
        </div>

        <div>
          <label className="block font-medium">Price *</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="input"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Quantity *</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Item Form *</label>
          <select
            name="itemForm"
            value={form.itemForm}
            onChange={handleChange}
            className="input"
          >
            <option value="Spray">Spray</option>
            <option value="Liquid">Liquid</option>
            <option value="Roll-On">Roll-On</option>
          </select>
        </div>

        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block font-medium">Volume *</label>
            <input
              type="number"
              name="itemVolumeValue"
              value={form.itemVolumeValue}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="block font-medium">Unit</label>
            <select
              name="itemVolumeUnit"
              value={form.itemVolumeUnit}
              onChange={handleChange}
              className="input"
            >
              <option value="ml">ml</option>
              <option value="l">l</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Item Weight</label>
          <input
            type="text"
            name="itemWeight"
            value={form.itemWeight}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Net Quantity</label>
          <input
            type="text"
            name="netQuantity"
            value={form.netQuantity}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Number of Items</label>
          <input
            type="number"
            name="numberOfItems"
            value={form.numberOfItems}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Scent</label>
          <input
            type="text"
            name="scent"
            value={form.scent}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block font-medium">Special Feature</label>
          <input
            type="text"
            name="specialFeature"
            value={form.specialFeature}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium">Product Image *</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input bg-white file:bg-blue-500 file:text-white file:px-3 file:py-1 file:rounded file:cursor-pointer"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
