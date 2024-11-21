import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    category: {type: String, required: true},
    preparationTime : {type: Number, required: true},
    cookingTime: {type: Number, required: true},
    servings: {type: Number, required: true}
})

export default mongoose.model("Recipe", recipeSchema);