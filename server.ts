import { Application } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import middlewares from './src/middlewares/mod.ts';
import loadRoutes from './src/routes/mod.ts';

const app = new Application({ port: 3001 });

loadRoutes(app);

app.use(middlewares.errors);
app.use(middlewares.timing);

await app.run()