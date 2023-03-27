import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
import { IResponseSwapi } from './interface/IResponseSwapi';

@Injectable()
export class StarWarsService {
    constructor(
        private readonly httpRequest: HttpService
    ) { }
    private readonly BASE_URL = 'https://swapi.dev/api';

    public async findCharacters(query: { page: string, name: string }): Promise<IReturnParameters> {
        const url = query.name && query.name !== ''
            ? `${this.BASE_URL}/people/?search=${query.name}&page=${query.page}`
            : `${this.BASE_URL}/people/?page=${query.page}`;

        const { items, totalPages } = await this.getDataAndTotalPages(url);
        return { items, totalPages };
    }

    public async findFilmsById(id: string): Promise<IFilms> {
        const url = `${this.BASE_URL}/films/${id}`;
        const data = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        return data;
    }

    private async getDataAndTotalPages(url: string): Promise<IReturnParameters> {
        const response: IResponseSwapi = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        const totalPages = Math.ceil(response.count / 10);
        return { items: response.results, totalPages };
    }

}
