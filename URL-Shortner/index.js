import express from 'express'
import { connectDB } from "./db/db.js";

import urlRouter from './routes/url.routes.js';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

connectDB();

app.use("/url", urlRouter);

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
})