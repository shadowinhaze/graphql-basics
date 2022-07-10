export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AllGenres = {
  __typename?: 'AllGenres';
  items?: Maybe<Array<Maybe<Genre>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  token: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  _id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: RegisteredUser;
};


export type MutationRegisterArgs = {
  user: RegisterUser;
};

export type Query = {
  __typename?: 'Query';
  genres?: Maybe<AllGenres>;
  user: RegisteredUser;
};


export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type RegisterUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type RegisteredUser = {
  __typename?: 'RegisteredUser';
  _id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
};
