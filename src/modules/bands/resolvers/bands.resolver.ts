import { BandsService } from '../services/bands.service';

const bandsService = new BandsService();

export default {
  Query: {
    async bands(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allBands = await bandsService.getAllBands(limit, offset);
      return allBands;
    },

    async band(_: unknown, { id }: { id: string }) {
      const bandById = await bandsService.getBandById(id);
      return bandById;
    },
  },
};
