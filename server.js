import express from 'express';
import helmet from 'helmet';


import mainRoutes from './src/main.routes';
import userRoutes from './user.routes'


const app = express();
const port = 3003;

app.use(express.json());
app.use(helmet());

app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});