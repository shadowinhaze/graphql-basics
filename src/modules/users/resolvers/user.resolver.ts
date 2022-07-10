import { RegisterUser } from '../../../types';
import { UserService } from '../services/user.service';

const userService = new UserService();

export default {
  Query: {
    async user(_: unknown, { id }: { id: string }) {
      const foundUser = await userService.getUserById(id);
      return foundUser;
    },
  },

  Mutation: {
    async register(_: unknown, { user }: { user: RegisterUser }) {
      const newUser = await userService.register(user);
      return newUser;
    },
  },
};
