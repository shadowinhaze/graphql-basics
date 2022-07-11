import 'dotenv/config';

import { Artist } from '../../../types';
import { GetService } from '../../common/get-service';
import { GetItems } from '../../common/types';

export class ArtistsService {
  private artistsApiUrl = process.env.ARTISTS_URL;

  private getItemService = new GetService(this.artistsApiUrl);

  public async getAllArtists(
    _limit: number,
    _offset: number,
  ): Promise<GetItems<Artist>> {
    const { items, total } = await this.getItemService.getAllItems<
      GetItems<Artist>
    >(_limit, _offset);

    return {
      items: this.getItemService.renameKey(items, '_id', 'id'),
      total,
    } as const;
  }

  public async getArtistById(id: string): Promise<Artist> {
    return this.getItemService.getItemById<Artist>(id);
  }
}
