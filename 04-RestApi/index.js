import express from "express";
import fs from "fs";

const app = express();

const data = JSON.parse(fs.readFileSync('./MOCK_DATA.json', 'utf-8'));

app.get('/api/users', (req, res) => {
    res.json(data);
});

app.get('/api/users/:id', (req, res) => {
    const user = Number(req.params.id);
    const found = data.find((demo) => demo.id === user);

    res.json(found);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});