import BooksModel from "../book/book.model";
import { NewGenreDto } from "./dto/new-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./entities/genre.entity";
import GenresModel from "./genre.model";

class GenreServices {
  async getAll(): Promise<Genre[] | null> {
    const genres: Genre[] | null = await GenresModel.find();
    return genres;
  }

  async getForId(id: string): Promise<Genre | null> {
    const genre: Genre | null = await GenresModel.findById(id);
    return genre;
  }

  async newGenre(newGenre: NewGenreDto): Promise<Genre | unknown> {
    try {
      const genre: Genre = await BooksModel.create(newGenre);
      return genre;
    } catch (error) {
      throw error;
    }
  }

  async updateGenre(
    _id: string,
    UpdateGenre: UpdateGenreDto
  ): Promise<Genre | unknown> {
    try {
      await BooksModel.updateOne({ _id }, UpdateGenre);
      const genreEdited: Genre | null = await GenresModel.findById(_id);
      return genreEdited;
    } catch (error) {
      throw error;
    }
  }

  async deleteGenre(_id: string): Promise<void> {
    await GenresModel.findByIdAndDelete(_id);
  }
}

export default GenreServices;
