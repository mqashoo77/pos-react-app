import React from "react";
import { Modal } from "antd";

import ProductForm from "./modals/productForm.jsx";
import ProductDescription from "./modals/productDescription";
import ProductDeleteConfirmation from "./modals/productDeleteConfirmation";

function ProductPageModals({
  products,
  productFormPopModel,
  setProductFormPopModal,
  deleteProductConfirmPopModel,
  setDeleteProductConfirmPopModel,
  productDescriptionPopModel,
  setProductDescriptionPopModal,
  productId,
  setProductId,
  categories,
}) {
  return (
    <div>
      <div>
        {productFormPopModel && (
          <Modal
            title={productId === false ? "Add a new Product" : "Edit Product"}
            open={productFormPopModel}
            onCancel={() => {
              setProductFormPopModal(false);
              setProductId(false);
            }}
            footer={null}
          >
            <ProductForm
              productId={productId}
              setProductId={setProductId}
              setProductFormPopModal={setProductFormPopModal}
              categories={categories}
            />
          </Modal>
        )}
      </div>
      <div>
        {deleteProductConfirmPopModel && (
          <Modal
            title="Delete confirmation"
            open={deleteProductConfirmPopModel}
            onCancel={() => {
              setDeleteProductConfirmPopModel(false);
              setProductId(false);
            }}
            footer={null}
          >
            <ProductDeleteConfirmation
              productId={productId}
              setProductId={setProductId}
              setDeleteProductConfirmPopModel={setDeleteProductConfirmPopModel}
            ></ProductDeleteConfirmation>
          </Modal>
        )}
      </div>
      <div>
        {productDescriptionPopModel && (
          <Modal
            title="Product Description"
            open={productDescriptionPopModel}
            onCancel={() => {
              setProductDescriptionPopModal(false);
              setProductId(false);
            }}
            footer={null}
          >
            <ProductDescription
              products={products}
              productId={productId}
            ></ProductDescription>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ProductPageModals;
