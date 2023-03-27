import { HttpService } from '@nestjs/axios';
import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
export declare class StarWarsService {
    private readonly httpRequest;
    constructor(httpRequest: HttpService);
    private readonly BASE_URL;
    findCharacters(query: {
        page: string;
        name: string;
    }): Promise<IReturnParameters>;
    findFilmsById(id: string): Promise<IFilms>;
    private getDataAndTotalPages;
}
