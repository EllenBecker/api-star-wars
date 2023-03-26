import { Controller, Get, Param } from '@nestjs/common';
import { IFilms } from './interface/IFilms';
import { IStarWars } from './interface/IStar_wars';
import { StarWarsService } from './star_wars.service';

@Controller('star_wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) { }

    @Get('/characters')
    findCharacters(): Promise<Array<IStarWars>> {
        return this.starWarsService.findCharacters();
    }

    @Get('/characters/otherPage/:page')
    findOtherPage(@Param('page') page: string): Promise<Array<IStarWars>> {
        return this.starWarsService.findOtherPage(page);
    }

    @Get('/characters/search/:name')
    findBySearch(@Param('name') name: string): Promise<Array<IStarWars>> {
        return this.starWarsService.findBySearch(name);
    }

    @Get('/films/:id')
    findFilmsById(@Param('id') id: string): Promise<IFilms> {
        return this.starWarsService.findFilmsById(id);
    }

}
