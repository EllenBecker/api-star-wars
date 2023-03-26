import { HttpService } from '@nestjs/axios';
import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
export declare class StarWarsService {
    private readonly httpRequest;
    constructor(httpRequest: HttpService);
    private readonly BASE_URL;
    findCharacters(): Promise<IReturnParameters>;
    findOtherPage(page: string): Promise<IReturnParameters>;
    findBySearch(name: string): Promise<IReturnParameters>;
    findBySearchOtherPage(name: string, page: string): Promise<IReturnParameters>;
    findFilmsById(id: string): Promise<IFilms>;
    private getDataAndTotalPages;
}
