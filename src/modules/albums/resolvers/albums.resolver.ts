import { AlbumsService } from '../services/albums.service';

const bandsService = new AlbumsService();

export default {
  Query: {
    async bands(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allBands = await bandsService.getAllAlbums(limit, offset);
      return allBands;
    },

    async band(_: unknown, { id }: { id: string }) {
      const bandById = await bandsService.getAlbumById(id);
      return bandById;
    },
  },
};
