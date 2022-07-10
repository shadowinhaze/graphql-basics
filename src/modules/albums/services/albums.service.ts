import 'dotenv/config';
import fetch from 'cross-fetch';

import { Album } from '../../../types';

export class AlbumsService {
  private albumsApiUrl = process.env.Albums_URL;

  public async getAllAlbums(
    _limit: number,
    _offset: number,
  ): Promise<{ items: Album[]; total: number }> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.albumsApiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const { items, total } = await response.json();

    return { items, total } as const;
  }

  public async getAlbumById(id: string): Promise<Album> {
    const response = await fetch(`${this.albumsApiUrl}/${id}`);

    const foundAlbum = await response.json();

    return foundAlbum as Album;
  }
}
