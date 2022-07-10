import 'dotenv/config';
import fetch from 'cross-fetch';

import { Artist } from '../../../types';

export class ArtistsService {
  private artistsApiUrl = process.env.ARTISTS_URL;

  public async getAllArtists(
    _limit: number,
    _offset: number,
  ): Promise<{ items: Artist[]; total: number }> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.artistsApiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const { items, total } = await response.json();

    return { items, total } as const;
  }

  public async getArtistById(id: string): Promise<Artist> {
    const response = await fetch(`${this.artistsApiUrl}/${id}`);

    const foundArtist = await response.json();

    return foundArtist as Artist;
  }
}
