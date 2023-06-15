const express = require('express');
const routerChecklist = require('./src/routes/checklists');

const app = express();

app.use(express.json());
app.use('/checklists', routerChecklist);

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});