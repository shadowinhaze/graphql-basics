import 'dotenv/config';
import fetch from 'cross-fetch';

import { Track } from '../../../types';

export class TracksService {
  private tracksApiUrl = process.env.TRACKS_URL;

  public async getAllTracks(
    _limit: number,
    _offset: number,
  ): Promise<{ items: Track[]; total: number }> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.tracksApiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const { items, total } = await response.json();

    return { items, total } as const;
  }

  public async getTrackById(id: string): Promise<Track> {
    const response = await fetch(`${this.tracksApiUrl}/${id}`);

    const foundBand = await response.json();

    return foundBand as Track;
  }
}
