import { Request, Response } from "express";
import { RecipeModel } from "../Models/RecipeModel";

const getAll = async (req: Request, res: Response) => {
    try {
        const data = await RecipeModel.find({});
        res.status(200).json({
            status: res.statusCode,
            data,
            message: "Data retrieved successfully",
        });
        console.log("/GET", res.statusCode);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: error,
        });
    }
};

// Posts data to the Recipe model
const postData = async (req: Request, res: Response) => {
    try {
        const data = await RecipeModel.create(req.body);
        res.status(201).json({
            status: res.statusCode,
            data,
            message: "Data posted successfully",
        });
        console.log("/POST", res.statusCode);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: error,
        });
    }
};

// Deletes data from the Recipe model by id
const deleteData = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await RecipeModel.findByIdAndDelete(id);
        res.status(200).json({
            status: res.statusCode,
            data,
            message: "Data deleted successfully",
        });
        console.log(`/DELETE/${id}`, res.statusCode);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: error,
        });
    }
};

// Updates data in the Recipe model by id
const updateData = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: false,
        });
        res.status(200).json({
            status: res.statusCode,
            data,
            message: "Data updated successfully",
        });
        console.log(`/PUT/${id}`, res.statusCode);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: error,
        });
    }
};

// Retrieves data from the Recipe model by id
const getOneData = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await RecipeModel.findById(id, { __v: 0 });
        res.status(200).json({
            status: res.statusCode,
            data,
            message: "Data retrieved successfully",
        });
        console.log(`/GET/${id}`, res.statusCode);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: error,
        });
    }
};

export { getAll, getOneData, postData, updateData, deleteData }