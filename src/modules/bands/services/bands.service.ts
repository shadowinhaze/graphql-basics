import 'dotenv/config';
import fetch from 'cross-fetch';

import { Band } from '../../../types';

export class BandsService {
  private bandsApiUrl = process.env.BANDS_URL;

  public async getAllBands(
    _limit: number,
    _offset: number,
  ): Promise<{ items: Band[]; total: number }> {
    const limit = String(_limit) || '5';
    const offset = String(_offset) || '0';

    const response = await fetch(
      `${this.bandsApiUrl}?${new URLSearchParams({ limit, offset })}`,
    );

    const { items, total } = await response.json();

    return { items, total } as const;
  }

  public async getBandById(id: string): Promise<Band> {
    const response = await fetch(`${this.bandsApiUrl}/${id}`);

    const foundBand = await response.json();

    return foundBand as Band;
  }
}
