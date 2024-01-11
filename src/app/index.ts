import express, { Request, Response } from "express"
import router from "../routes/router"
import dotenv from "dotenv"
import "../DB/Connection"

// load environment variables from a .env file into process.env
dotenv.config()

// define the port to run the server on, or default to 8080
const PORT = process.env.PORT!

// create an instance of the express application
const app = express()

// enable the parsing of JSON data in request bodies
app.use(express.json())

// use the imported router to handle all incoming requests
app.use(router)

// start the server on the specified port and log a message to the console
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})