import express from "express";
import { addProduct, getAllProducts, paginationproduct} from "../controllers/ProductController.js";


const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/paginationproduct',paginationproduct);
router.get('/getAllProducts',getAllProducts)

export default router;