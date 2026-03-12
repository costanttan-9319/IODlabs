const app = require('./app');
const port = 3018;

app.listen(port, () => {
    console.log(`-----------------------------------------`);
    console.log(`✅ BACK-END IS ONLINE (Mode: Production)`);
    console.log(`📡 URL: http://localhost:${port}`);
    console.log(`-----------------------------------------`);
});