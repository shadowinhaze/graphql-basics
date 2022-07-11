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

export type Album = {
  __typename?: 'Album';
  artists?: Maybe<Array<Maybe<Artist>>>;
  bands?: Maybe<Array<Maybe<Band>>>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['Int']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type AllAlbums = {
  __typename?: 'AllAlbums';
  items?: Maybe<Array<Maybe<Album>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllArtists = {
  __typename?: 'AllArtists';
  items?: Maybe<Array<Maybe<Artist>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllBands = {
  __typename?: 'AllBands';
  items?: Maybe<Array<Maybe<Band>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllGenres = {
  __typename?: 'AllGenres';
  items?: Maybe<Array<Maybe<Genre>>>;
  total?: Maybe<Scalars['Int']>;
};

export type AllTracks = {
  __typename?: 'AllTracks';
  items?: Maybe<Array<Maybe<Track>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Artist = {
  __typename?: 'Artist';
  bands?: Maybe<Array<Maybe<Band>>>;
  birthDate?: Maybe<Scalars['String']>;
  birthPlace?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instruments?: Maybe<Array<Maybe<Scalars['String']>>>;
  middleName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  token: Scalars['String'];
};

export type Band = {
  __typename?: 'Band';
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  members?: Maybe<Array<Maybe<Member>>>;
  name?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'Genre';
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type LoginUser = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Member = {
  __typename?: 'Member';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  instrument?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  years?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  album?: Maybe<Album>;
  albums?: Maybe<AllAlbums>;
  artist?: Maybe<Artist>;
  artists?: Maybe<AllArtists>;
  band?: Maybe<Band>;
  bands?: Maybe<AllBands>;
  genre?: Maybe<Genre>;
  genres?: Maybe<AllGenres>;
  jwt: Scalars['String'];
  track?: Maybe<Track>;
  tracks?: Maybe<AllTracks>;
  user: RegisteredUser;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryAlbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryBandArgs = {
  id: Scalars['ID'];
};


export type QueryBandsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
};


export type QueryGenresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryJwtArgs = {
  user: LoginUser;
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};


export type QueryTracksArgs = {
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

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  bands?: Maybe<Array<Maybe<Band>>>;
  duration?: Maybe<Scalars['Int']>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  released?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
};
