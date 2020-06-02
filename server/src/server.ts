import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
app.use(cors());
//express entender as requisições JSON
app.use(express.json());

//arquivo de rotas
app.use(routes);

//arquivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);