import React, { useState } from "react";
import './Catalogo.css';
import { Header, Footer, GridLayout, Button } from "../../Components";
import elementsConfig from './catalogue.json';
import ItemDetails from "../../Components/ItemDetails/ItemDetails";
import AddProductForm from "../../Components/AddProduct/AddProduct";

export default function Catalogo() {
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  const handleAddProduct = () => {
    setShowAddProductForm(true);
  };

  const handleCloseAddProductForm = () => {
    setShowAddProductForm(false);
  };

  return (
    <>
      <Header />
      <main className="catalogueMain">
        <GridLayout elements={elementsConfig} ItemComponent={ItemDetails} />
        
        {isAdmin && (
          <Button className="add-product-button" text="Aggiungi Prodotto" funct={handleAddProduct} />
        )}

        {showAddProductForm && (
          <div className="add-product-form-container">
            <AddProductForm onClose={handleCloseAddProductForm} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
