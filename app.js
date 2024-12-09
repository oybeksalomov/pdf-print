const express = require('express');
const multer = require('multer');
const path = require('path');
const {print} = require('pdf-to-printer')

const app = express();
const upload = multer({dest: './uploads/'});

app.post('/print', upload.single('file'), async (req, res) => {
    const filePath = path.join(__dirname, req.file.path)

    try {
        await print(filePath)
        res.status(200).send({message: 'Pdf is successfully printed!'})
    } catch (err) {
        res.status(500).send({message: 'Something went wrong!'})
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});