import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { IStarWars } from './interface/IStar_wars';

@Injectable()
export class StarWarsService {
    constructor(
        private readonly httpRequest: HttpService
    ) { }

    public async findCharacters(): Promise<Array<IStarWars>> {
        const url = "https://swapi.dev/api/people";
        const { results } = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        return results;
    }

    public async findOtherPage(page: string): Promise<Array<IStarWars>> {
        const url = `https://swapi.dev/api/people/?page=${page}`;
        const { results } = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        return results;
    }

    public async findBySearch(name: string): Promise<Array<IStarWars>> {
        const url = `https://swapi.dev/api/people/?search=${name}`;
        const { results } = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        return results;
    }
}
