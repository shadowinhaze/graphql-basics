import { ArtistsService } from '../services/artists.service';

const artistsService = new ArtistsService();

export default {
  Query: {
    async artists(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allArtists = await artistsService.getAllArtists(limit, offset);
      return allArtists;
    },

    async artist(_: unknown, { id }: { id: string }) {
      const artistById = await artistsService.getArtistById(id);
      return artistById;
    },
  },
};
