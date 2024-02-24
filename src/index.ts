import { env } from "./env";

import express from 'express';
import cors from "cors"

import routes from "./routes"

const app = express()
app.use(cors())

// Healthcheck endpoint
app.get("/", (req, res) => {
  res.status(200).send("API is online!")
})

// Register routes for api endpoints
app.use("/", routes)

const PORT = env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})