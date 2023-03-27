import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
import { StarWarsService } from './star_wars.service';

@Controller('star_wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) { }

    @Get('/characters')
    findCharacters(@Query() query: { page: string, name: string }): Promise<IReturnParameters> {
        return this.starWarsService.findCharacters(query);
    }

    @Get('/films/:id')
    findFilmsById(@Param('id') id: string): Promise<IFilms> {
        return this.starWarsService.findFilmsById(id);
    }

}
