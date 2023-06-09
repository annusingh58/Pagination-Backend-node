import express from "express";
import { addProduct, filterProduct, paginationproduct, } from "../controllers/ProductController.js";


const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/paginationproduct',paginationproduct);
router.get('/filterProduct',filterProduct)
// router.get('/getAllProducts',getAllProducts)

export default router;