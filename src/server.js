import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 3334;
app.listen(PORT);