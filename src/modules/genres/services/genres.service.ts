import 'dotenv/config';
import fetch from 'cross-fetch';

import { Genre } from '../../../types';

export class GenresService {
  private genresApiUrl = process.env.GENRES_URL;

  public async getAllGenres(
    _limit: number,
    _offset: number,
  ): Promise<{ items: Genre[]; total: number }> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.genresApiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const { items, total } = await response.json();

    return { items, total } as const;
  }

  public async getGenreById(id: string): Promise<Genre> {
    const response = await fetch(`${this.genresApiUrl}/${id}`);

    const foundGenre = await response.json();

    return foundGenre as Genre;
  }
}
