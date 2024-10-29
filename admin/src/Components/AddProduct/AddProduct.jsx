// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./AddProduct.scss";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      console.log(productDetails);
      let responseData;
      let product = productDetails;
  
      let formData = new FormData();
      formData.append("product", image);
  
      // Upload image
      const uploadResponse = await fetch("https://e-commerce-store-1-qn5q.onrender.com/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
  
      // Check if the upload request was successful
      if (!uploadResponse.ok) {
        throw new Error(`Upload failed with status ${uploadResponse.status}`);
      }
  
      // Parse the response
      const uploadData = await uploadResponse.json();
      responseData = uploadData;
  
      // If image upload succeeded, continue with adding the product
      if (responseData.success) {
        product.image = responseData.image_url;
  
        // Add product
        const productResponse = await fetch("https://e-commerce-store-1-qn5q.onrender.com/addproduct", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
  
        // Check if the product addition was successful
        if (!productResponse.ok) {
          throw new Error(`Product addition failed with status ${productResponse.status}`);
        }
  
        const productData = await productResponse.json();
        productData.success ? alert("Product Added") : alert("Failed to Add Product");
  
      } else {
        alert("Image upload failed");
      }
  
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    }
  };
  

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="Women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Product();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
