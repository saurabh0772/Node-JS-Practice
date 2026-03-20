import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log("middleware 1")
    // res.send("end through middleware 1")
    req.name = "Saurabh"
    next();
});


app.get('/', (req , res) => {
    res.send(`Hello ${req.name}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   );