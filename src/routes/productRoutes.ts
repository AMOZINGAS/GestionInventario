import { Router } from "express";
import { getAllProcuts, createProcut, updateProduct, deleteProduct } from "../controllers/productController";

const router = Router();

router.get("/", getAllProcuts);
router.post("/", createProcut);
router.put("/", updateProduct);
router.delete("/:id", deleteProduct);

export default router;