import { Application } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";

import home from './home.route.ts'
import users from './user.route.ts'

export default (app: Application) => {
    app.use('/', home)
    app.use('/users', users)
};