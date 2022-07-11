import 'dotenv/config';

import { Genre } from '../../../types';
import { GetService } from '../../common/get-service';
import { GetItems } from '../../common/types';

export class GenresService {
  private genresApiUrl = process.env.GENRES_URL;

  private getItemService = new GetService(this.genresApiUrl);

  public async getAllGenres(
    _limit: number,
    _offset: number,
  ): Promise<GetItems<Genre>> {
    const { items, total } = await this.getItemService.getAllItems<
      GetItems<Genre>
    >(_limit, _offset);

    return {
      items: this.getItemService.renameKey(items, '_id', 'id'),
      total,
    } as const;
  }

  public async getGenreById(id: string): Promise<Genre> {
    return this.getItemService.getItemById<Genre>(id);
  }
}
