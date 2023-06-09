import express from "express";
import { addProduct, filter, paginationproduct, } from "../controllers/ProductController.js";


const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/paginationproduct',paginationproduct);
router.get('/filter',filter)
// router.get('/getAllProducts',getAllProducts)

export default router;