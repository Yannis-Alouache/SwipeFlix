"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
const session = require("express-session");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        rawBody: true,
        cors: true,
        bodyParser: true,
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'src/public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'src/views'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true
    }));
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'src/views/partials'));
    app.setViewEngine('hbs');
    app.use(session({
        secret: `${process.env.SESSION_SECRET}`,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    }));
    await app.listen(3000);
    console.log("🚀 server started on port 3000");
}
bootstrap();
//# sourceMappingURL=main.js.map