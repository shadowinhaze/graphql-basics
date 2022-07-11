import 'dotenv/config';

import { Track } from '../../../types';
import { GetService } from '../../common/get-service';
import { GetItems } from '../../common/types';

export class TracksService {
  private tracksApiUrl = process.env.TRACKS_URL;

  private getItemService = new GetService(this.tracksApiUrl);

  public async getAllTracks(
    _limit: number,
    _offset: number,
  ): Promise<GetItems<Track>> {
    const { items, total } = await this.getItemService.getAllItems<
      GetItems<Track>
    >(_limit, _offset);

    return {
      items: this.getItemService.renameKey(items, '_id', 'id'),
      total,
    } as const;
  }

  public async getTrackById(id: string): Promise<Track> {
    return this.getItemService.getItemById<Track>(id);
  }
}
