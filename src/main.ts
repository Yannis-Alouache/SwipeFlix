import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import * as hbs from "hbs";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    cors: true,
    bodyParser: true,
    snapshot: true,
  });

  app.useStaticAssets(join(__dirname, "..", "src/views/assets"));
  app.setBaseViewsDir(join(__dirname, "..", "src/views"));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transform is recomended configuration for avoind issues with arrays of files transformations
    }),
  );
  hbs.registerPartials(join(__dirname, "..", "src/views/partials"));
  app.setViewEngine("hbs");

  // TODO add paseportJs Authentication
  // TODO Add movie directly in fav without going through the swipe
  // TODO Add swipe history in user profile
  await app.listen(3000);
  console.log("🚀 server started on port 3000");
}
bootstrap();
