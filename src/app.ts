import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/UserRoute';
import roleRoutes from './routes/RoleRoute';
import userRoleRoutes from './routes/UserRoleRoute';
import projectRoutes from './routes/ProjectRoute';
import projectMemberRoutes from './routes/ProjectMemberRoute';
import taskRoutes from './routes/TaskRoute';
import timeEntryRoutes from './routes/TimeEntryRoute';
import documentRoutes from './routes/DocumentRoute';
import knowledgeBaseRoutes from './routes/KnowledgeBaseRoute';
import notificationRoutes from './routes/NotificationRoute';
import activityLogRoutes from './routes/ActivityLogRoute';
import sequelize from './config/sequelize';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', userRoleRoutes);
app.use('/api', projectRoutes);
app.use('/api', projectMemberRoutes);
app.use('/api', taskRoutes);
app.use('/api', timeEntryRoutes);
app.use('/api', documentRoutes);
app.use('/api', knowledgeBaseRoutes);
app.use('/api', notificationRoutes);
app.use('/api', activityLogRoutes);

// Manejo global de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.authenticate()
  .then(() => console.log('Database connected..Server is running'))
  .catch(err => console.log('Error: ' + err));

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;
