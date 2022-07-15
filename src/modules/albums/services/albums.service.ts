import 'dotenv/config';

import { Album } from '../../../types';
import { GetService } from '../../common/get-service';
import { GetItems } from '../../common/types';

export class AlbumsService {
  private albumsApiUrl = process.env.ALBUMS_URL;

  private getItemService = new GetService(this.albumsApiUrl);

  public async getAllAlbums(
    _limit: number,
    _offset: number,
  ): Promise<GetItems<Album>> {
    const { items, total } = await this.getItemService.getAllItems<
      GetItems<Album>
    >(_limit, _offset);

    return {
      items: this.getItemService.renameKey(items, '_id', 'id'),
      total,
    } as const;
  }

  public async getAlbumById(id: string): Promise<Album> {
    return this.getItemService.getItemById<Album>(id);
  }
}
