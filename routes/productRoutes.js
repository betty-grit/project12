import { Router } from "express";
import { checkProduct } from "../middleware/products.js";
import { checkForUser } from "../middleware/users.js";

import {
  addProduct,
  getAllUserProducts,
  getSingleProduct,
  deleteSingleProduct,
} from "../controllers/products.js";
const router = Router();

router.post("/products/add", checkForUser, addProduct);

router.post("/products", checkForUser, getAllUserProducts);
router.get("/product/:id", checkProduct, getSingleProduct);
router.delete("/deleteProduct/:id", checkProduct, deleteSingleProduct);

export default router;
