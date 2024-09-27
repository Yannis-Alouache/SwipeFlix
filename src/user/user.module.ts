import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/schemas/user.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [],
  providers: [UserService],
  exports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
})
export class UserModule {}
