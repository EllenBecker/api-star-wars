import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
import { StarWarsService } from './star_wars.service';
export declare class StarWarsController {
    private readonly starWarsService;
    constructor(starWarsService: StarWarsService);
    findCharacters(): Promise<IReturnParameters>;
    findOtherPage(page: string): Promise<IReturnParameters>;
    findBySearch(name: string): Promise<IReturnParameters>;
    findBySearchOtherPage(name: string, page: string): Promise<IReturnParameters>;
    findFilmsById(id: string): Promise<IFilms>;
}
