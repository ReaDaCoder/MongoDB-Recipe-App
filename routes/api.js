import express from "express";
import createRecipe from "../controllers/recipeController.js";

const router = express.Router()

router.post('/recipes', createRecipe)

router.get('/recipes', createRecipe)

router.delete('/recipes', createRecipe)

export default router;