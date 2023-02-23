const express = require('express')
const dotenv = require('dotenv')
const app = express();
const path = require('path')
dotenv.config();

const port = process.env.PORT || 4260
const destinationDir = path.join(__dirname,'../dist')
app.use(express.static(destinationDir));

// hosting from dist folder
console.log(`express hosting from ${destinationDir}`);
// serving index.html
app.use('*', (req, res) => {
    res.sendFile(path.join(destinationDir,'index.html'));
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})