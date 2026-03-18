import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = JSON.parse(fs.readFileSync('./MOCK_DATA.json', 'utf-8'));

app.get('/users', (req, res) => {
    const html = `
    <h1>Users</h1>
    <ul>
        ${data.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);

});

app.get('/api/users', (req, res) => {
    res.json(data);
});

app.get('/api/users/:id', (req, res) => {
    const user = Number(req.params.id);
    const found = data.find((demo) => demo.id === user);

    return res.json(found);
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    console.log(body)
    
    data.push({...body, id: data.length + 1});

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error saving user" });
        }
        return res.json({ message: "User created", user: body });
    });

});

app.patch('/api/users/:id' ,(req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body);

    const index = data.findIndex((user) => user.id === id);

    (index === -1) ? res.status(404).json({ message: "User not found" }) : data[index] = {...data[index], ...body};

     fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error in saving updates in user" });
        }
        return res.json({ message: "User updated", user: body });
    });
});

app.put('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body); 

    const index = data.findIndex((user) => user.id === id);

    (index === -1) ? res.status(404).json({ message: "User not found" }) : data[index] = {id, ...body};

     fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error in saving updates in user" });
        }
        return res.json({ message: "User updated", user: body });
    });
});


app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = data.findIndex((user) => user.id === id);

    data.splice(index, 1);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error in deleting user" });
        }
        return res.json({ message: "User deleted", id: id });
    });

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});