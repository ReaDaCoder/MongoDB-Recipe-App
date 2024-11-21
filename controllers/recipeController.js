import express from "express";
import Recipes from "../models/recipes.js";

const createRecipe = async (req, res) => {
    try {
        
        const recipe = await Recipes.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ error: "There is an error" });
    }
};

const getRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      console.error("Error getting recipes:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const deleteRecipe = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRecipe = await Recipe.findByIdAndDelete(id);
      if (!deletedRecipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
      console.error("Error deleting recipe:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };



export default createRecipe;
