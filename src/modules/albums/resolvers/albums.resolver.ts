import { AlbumsService } from '../services/albums.service';

const albumsService = new AlbumsService();

export default {
  Query: {
    async albums(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allAlbums = await albumsService.getAllAlbums(limit, offset);
      return allAlbums;
    },

    async album(_: unknown, { id }: { id: string }) {
      const albumById = await albumsService.getAlbumById(id);
      return albumById;
    },
  },
};
