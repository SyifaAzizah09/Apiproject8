const express = require('express');
const app = express();
const PORT = 8001;

// Middleware agar bisa membaca JSON
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/products.routes');

// Daftarkan Routes (WAJIB pakai slash di depan)
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Endpoint awal untuk test
app.get('/', (req, res) => {
    res.send('Hello, World');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
