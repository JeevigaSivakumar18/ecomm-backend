const express = require("express"); 
const router = express.Router();

const { 
cartProd,
viewCart,
deleteCart } = require("../controller/cartController");

router.post("/addtocart", cartProd);
router.get("/viewcart", viewCart);
router.delete("/deletecart/:id", deleteCart);

module.exports = router;
