const express = require('express');
const { getMessage, setMessage } = require('./contractInteraction');

const app = express();
app.use(express.json());

app.get('/api/message', async (req, res) => {
    try {
        const message = await getMessage();
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/message', async (req, res) => {
    try {
        const { message } = req.body;
        await setMessage(message);
        res.json({ message: "Message set successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
