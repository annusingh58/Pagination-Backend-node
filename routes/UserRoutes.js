import express from "express";
import { addProduct, paginationproduct} from "../controllers/ProductController.js";


const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/paginationproduct',paginationproduct)

export default router;