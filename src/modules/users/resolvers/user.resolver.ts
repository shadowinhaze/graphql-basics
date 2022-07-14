import { LoginUser, RegisterUser } from '../../../types';
import { UserService } from '../services/user.service';

const userService = new UserService();

export default {
  Query: {
    async user(_: unknown, { id }: { id: string }) {
      const foundUser = await userService.getUserById(id);
      return foundUser;
    },
    async jwt(_: unknown, { user }: { user: LoginUser }) {
      const { jwt } = await userService.signIn(user);
      return jwt;
    },
  },

  Mutation: {
    async register(_: unknown, { user }: { user: RegisterUser }) {
      const newUser = await userService.register(user);
      // eslint-disable-next-line no-underscore-dangle
      return { ...newUser, id: newUser._id, secondName: newUser.lastName };
    },
  },
};
