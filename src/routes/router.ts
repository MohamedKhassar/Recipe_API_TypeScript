import express, { Request, Response } from "express"
import { deleteData, getAll, getOneData, postData, updateData } from "../controllers/RecipeController"

// Create an instance of the router.
const router = express.Router()

// Define GET request to retrieve all recipes.
router.get("/", getAll)

// Define POST request to add a new recipe.
router.post("/", postData)

// Define GET request to retrieve a single recipe by ID.
router.get("/:id", getOneData)

// Define PUT request to update a recipe by ID.
router.put("/:id", updateData)

// Define DELETE request to delete a recipe by ID.
router.delete("/:id", deleteData)

// Export the router.
export default router