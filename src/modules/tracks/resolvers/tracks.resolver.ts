import { TracksService } from '../services/tracks.service';

const tracksService = new TracksService();

export default {
  Query: {
    async tracks(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allTracks = await tracksService.getAllTracks(limit, offset);
      return allTracks;
    },

    async track(_: unknown, { id }: { id: string }) {
      const trackById = await tracksService.getTrackById(id);
      return trackById;
    },
  },
};
