// Import the mongoose library for working with MongoDB
import mongoose from "mongoose"

/**
 * Interface defining the structure of a recipe document
 */
interface Recipe {

    /**
     * The type of dish (e.g., 'main course', 'dessert', etc.)
     */
    dishType: string

    /**
     * The name of the recipe
     */
    name: string

    /**
     * A URL to an image of the dish prepared using the recipe
     */
    image: string

    /**
     * An array of strings describing the ingredients required for the recipe
     */
    ingredients: string[]

    /**
     * An array of strings describing the preparation instructions for the recipe
     */
    instructions: string[]

}

/**
 * Define a schema for a recipe document in MongoDB using mongoose
 */
const RecipeSchema = new mongoose.Schema<Recipe>({
    dishType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    }
})

/**
 * Create a model in mongoose for the recipes collection in MongoDB, using the defined schema
 */
export const RecipeModel = mongoose.model("recipes", RecipeSchema)