import { UpdateGenreDto } from "./dto/update-genre.dto";
import { NewGenreDto } from "./dto/new-genre.dto";
import { Request, Response } from "express";
import { Genre } from "./entities/genre.entity";
import GenreServices from "./genre.service";

const genreServices = new GenreServices();

class GenreControllers {
  async getAll(req: Request, res: Response) {
    const genres = await genreServices.getAll();

    res.send(genres);
  }

  async getForId(req: Request, res: Response) {
    const id = req.params._id as string;

    const genre = await genreServices.getForId(id);

    res.send(genre);
  }

  async newGenre(req: Request, res: Response): Promise<void> {
    const body: NewGenreDto = req.body;

    try {
      const genre: Genre | unknown = await genreServices.newGenre(body);

      res.status(201).send(genre);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async updateGenre(req: Request, res: Response) {
    const id = req.params._id as string;
    const genreEdited: UpdateGenreDto = req.body;

    try {
      const book: Genre | unknown = await genreServices.updateGenre(
        id,
        genreEdited
      );

      res.send(book);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteGenre(req: Request, res: Response) {
    const id = req.params._id as string;

    await genreServices.deleteGenre(id);

    res.sendStatus(204);
  }
}

export default GenreControllers;
