import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";
dotenv.config();
import List from "./model/List";

const PORT = process.env.PORT || 5003;
const app = express();

app.use(express.json);

app.post("/lists", async (req: Request, res: Response) => {
    const newList = new List({
        name: req.body.name,
        amount: req.body.amount,
        category: req.body.category,
        date: new Date,
    })
    const creatredList = await newList.save();
    res.json(creatredList);
});

//Server connect
const connectDb = async () => {
    const mongooseConnect = mongoose.connect(process.env.ATLAS_URI || "");
    try{
        await mongooseConnect;
        await app.listen(PORT);
    } catch (error) {
        console.error(`Connection Error: ${error instanceof Error}`);
        process.exit(1);
    }
}

connectDb().catch(error => console.error(error));