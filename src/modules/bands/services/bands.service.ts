import 'dotenv/config';

import { Band } from '../../../types';
import { GetService } from '../../common/get-service';
import { GetItems } from '../../common/types';

export class BandsService {
  private bandsApiUrl = process.env.BANDS_URL;

  private getItemService = new GetService(this.bandsApiUrl);

  public async getAllBands(
    _limit: number,
    _offset: number,
  ): Promise<GetItems<Band>> {
    const { items, total } = await this.getItemService.getAllItems<
      GetItems<Band>
    >(_limit, _offset);

    return {
      items: this.getItemService.renameKey(items, '_id', 'id'),
      total,
    } as const;
  }

  public async getBandById(id: string): Promise<Band> {
    return this.getItemService.getItemById<Band>(id);
  }
}
