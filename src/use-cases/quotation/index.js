const quotationDB = require("../../data-access/quotation/index");
const quotationEntity = require("../../entities/quotation/index");
const viewAllProducts = require("./view-all-products.usecase");
const addQuotation = require("./add-quotation.usecase")
// const addSku = require("./add-sku.usecase");
// const editSku = require("./edit-sku.usecase");
// const viewSku = require("./view-sku.usecase");
// const viewAllSku = require("./view-all-sku.usecase");
// const softDelSku = require("./delete-sku.usecase");




// const addSkuUseCase = addSku({
//   skuDB,
//   skuEntity
// });
// const editSkuUseCase = editSku({
//   skuDB,
//   skuEntity
// });
// const viewSkuUseCase = viewSku({ skuDB });
// const viewAllSkuUseCase = viewAllSku({ skuDB });
// const softDeleteSkuUseCase = softDelSku({ skuDB });


const viewAllProductsUseCase = viewAllProducts({ quotationDB });
const addQuotationUseCase = addQuotation({ quotationDB, quotationEntity });


const skuService = Object.freeze({
  // addSkuUseCase,
  // editSkuUseCase,
  // viewSkuUseCase,
  // viewAllSkuUseCase,
  // softDeleteSkuUseCase
  viewAllProductsUseCase,
  addQuotationUseCase
});

module.exports = skuService;

module.exports = {
  // addSkuUseCase,
  // editSkuUseCase,
  // viewSkuUseCase,
  // viewAllSkuUseCase,
  // softDeleteSkuUseCase
  viewAllProductsUseCase,
  addQuotationUseCase
};
