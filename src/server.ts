import express, { NextFunction, Request, Response } from 'express'
import todoRoutes from './routes/todos'

const app = express();

app.use('/todo',todoRoutes);

// 오류 핸들링 
app.use((err: Error , req: Request, res: Response, next: NextFunction) =>{
    res.status(500).json({message:err.message});
})

app.listen(4500);


