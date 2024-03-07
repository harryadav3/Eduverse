import  express from 'express';

const app = express();

// Define a simple route to return "Hello, world!"
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

export default app;
