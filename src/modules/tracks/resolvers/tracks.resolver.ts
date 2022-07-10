import { TracksService } from '../services/tracks.service';

const bandsService = new TracksService();

export default {
  Query: {
    async bands(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allBands = await bandsService.getAllTracks(limit, offset);
      return allBands;
    },

    async band(_: unknown, { id }: { id: string }) {
      const bandById = await bandsService.getTrackById(id);
      return bandById;
    },
  },
};
