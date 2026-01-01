import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    sizes: {
      type: Array, // ["S", "M", "L", "XL"]
      required: true,
    },

    image: {
      type: Array, // Cloudinary image URLs
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    bestseller: {
      type: Boolean,
    },

    date: {
      type: Date,
      required: true,
    },
  },
//   {
//     timestamps: true, // createdAt & updatedAt
//   }
);

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
