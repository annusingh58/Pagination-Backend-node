import express from "express";
import { addProduct,  filterColour,  filterProductsize,  filtercatergory,  filterfabric, filterBrand, paginationproduct } from "../controllers/ProductController.js";


const router = express.Router();

router.post('/addProduct',addProduct);
router.get('/paginationproduct',paginationproduct);
// router.get('/filterProduct',filterProduct);
router.post('/filterColour',filterColour);
router.post('/filterBrand',filterBrand);
router.post('/filterProductsize',filterProductsize);
router.post('/filtercatergory',filtercatergory);
router.post('/filterfabric',filterfabric);





export default router;