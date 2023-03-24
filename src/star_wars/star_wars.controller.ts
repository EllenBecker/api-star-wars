import { Controller, Get } from '@nestjs/common';
import { IStarWars } from './interface/IStar_wars';
import { StarWarsService } from './star_wars.service';

@Controller('star_wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) { }

    @Get()
    findAll(): Promise<Array<IStarWars>> {
        return this.starWarsService.findAll();
    }

}
