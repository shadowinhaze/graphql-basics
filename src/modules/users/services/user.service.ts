import 'dotenv/config';
import fetch from 'cross-fetch';

import { LoginUser, RegisteredUser, RegisterUser } from '../../../types';

export class UserService {
  private userApiUrl = process.env.USERS_URL;

  public async getUserById(id: string): Promise<RegisteredUser> {
    const response = await fetch(`${this.userApiUrl}/${id}`);

    const user = await response.json();

    return user as RegisteredUser;
  }

  public async register(user: RegisterUser): Promise<RegisteredUser> {
    const response = await fetch(`${this.userApiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const createdUser = await response.json();

    return createdUser as RegisteredUser;
  }

  public async signIn(user: LoginUser): Promise<{ jwt: string }> {
    const response = await fetch(`${this.userApiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const loggedInUser = await response.json();

    return loggedInUser;
  }
}
