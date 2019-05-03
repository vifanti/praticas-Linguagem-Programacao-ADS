// lib/server.ts
import app from './app';
const PORT = 3000;

app.listen(PORT, function() {
    console.log('server running on port' + PORT)
})