import { GenresService } from '../services/genres.sevice';

const genresService = new GenresService();

export default {
  Query: {
    async genres(
      _: unknown,
      { limit, offset }: { limit?: number; offset?: number },
    ) {
      const allGenres = await genresService.getAllGenres(limit, offset);
      return allGenres;
    },

    async genre(_: unknown, { id }: { id: string }) {
      const genreById = await genresService.getGenreById(id);
      return genreById;
    },
  },
};
