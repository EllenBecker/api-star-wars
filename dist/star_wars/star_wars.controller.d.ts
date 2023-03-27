import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
import { StarWarsService } from './star_wars.service';
export declare class StarWarsController {
    private readonly starWarsService;
    constructor(starWarsService: StarWarsService);
    findCharacters(query: {
        page: string;
        name: string;
    }): Promise<IReturnParameters>;
    findFilmsById(id: string): Promise<IFilms>;
}
