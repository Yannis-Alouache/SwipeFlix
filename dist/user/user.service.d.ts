import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOne(email: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
