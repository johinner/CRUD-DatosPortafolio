import express from "express";
import morgan from "morgan";
import cors from "cors";

// Archive Routes
import indexRoutes from "./routes/index.routes.js"
import projectsRouter from "./routes/projects.routes.js"

// Initialization
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use(projectsRouter);

// Error Handling
app.use((req, res) => {
  res.status(404).send('Not Found Porfolio')
});

export default app; 