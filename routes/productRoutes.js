const express = require("express"); 
const router = express.Router();

const { addProd,
    getAllProd,
    Searchprod,
    deleteprod } = require("../controller/productController");

router.post("/addproduct", addProd);
router.get("/getallproducts", getAllProd);
router.get("/getproduct/:id", Searchprod);
router.delete("/deleteproduct/:id", deleteprod);

module.exports = router;
