import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { IStarWars } from './interface/IStar_wars';

@Injectable()
export class StarWarsService {
    constructor(
        private readonly httpRequest: HttpService
    ) { }

    public async findAll(): Promise<Array<IStarWars>> {
        const url = "https://swapi.dev/api/people";
        const response = await lastValueFrom(
            this.httpRequest.get(url).pipe(map((r) => r.data))
        );
        return response?.results;
    }
}
