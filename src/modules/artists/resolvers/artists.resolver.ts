import { ArtistsService } from '../services/artists.service';

const bandsService = new ArtistsService();

export default {
  Query: {
    async bands(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allBands = await bandsService.getAllArtists(limit, offset);
      return allBands;
    },

    async band(_: unknown, { id }: { id: string }) {
      const bandById = await bandsService.getArtistById(id);
      return bandById;
    },
  },
};
