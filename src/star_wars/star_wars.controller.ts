import { Controller, Get, Param } from '@nestjs/common';
import { IFilms } from './interface/IFilms';
import { IReturnParameters } from './interface/IReturnParameters';
import { StarWarsService } from './star_wars.service';

@Controller('star_wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) { }

    @Get('/characters')
    findCharacters(): Promise<IReturnParameters> { 
        return this.starWarsService.findCharacters();
    }

    @Get('/characters/otherPage/:page')
    findOtherPage(@Param('page') page: string): Promise<IReturnParameters> {
        return this.starWarsService.findOtherPage(page);
    }

    @Get('/characters/search/:name')
    findBySearch(@Param('name') name: string): Promise<IReturnParameters> {
        return this.starWarsService.findBySearch(name);
    }

    @Get('/characters/search/:name/otherPage/:page')
    findBySearchOtherPage(@Param('name') name: string, @Param('page') page: string): Promise<IReturnParameters> {
        return this.starWarsService.findBySearchOtherPage(name, page);
    }

    @Get('/films/:id')
    findFilmsById(@Param('id') id: string): Promise<IFilms> {
        return this.starWarsService.findFilmsById(id);
    }

}
