import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthController } from "./auth/auth.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthMiddleware } from "./auth/auth.middleware";
import { MovieModule } from "./movie/movie.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb://localhost:27017/SwipeFlixBdd"),
    AuthModule,
    UserModule,
    MovieModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}
