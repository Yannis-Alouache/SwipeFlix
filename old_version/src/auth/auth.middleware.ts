import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.session["accessToken"];
    if (token) {
      try {
        const payload = this.jwtService.verify(token, {
          secret: process.env.JWT_SECRET,
        });
        req["user"] = payload;
      } catch (error) {
        // Token is invalid, but we won't block the request
        console.error("Invalid token:", error);
      }
    }
    next();
  }
}
