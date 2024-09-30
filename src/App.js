import React from "react";
import { AddProductForm } from "./features/products/AddProductForm";
import { ProductsList } from "./features/products/ProductsList";
import { EditProductForm } from "./features/products/EditProductForm";

function App() {
  return (
    <div>
      <h1>Product Catalog Management</h1>
      <AddProductForm />
      <ProductsList />
      <EditProductForm />
    </div>
  );
}

export default App;
