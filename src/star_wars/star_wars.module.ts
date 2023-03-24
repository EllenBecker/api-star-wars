import { Module } from '@nestjs/common';
import { StarWarsService } from './star_wars.service';
import { StarWarsController } from './star_wars.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [StarWarsController],
    providers: [StarWarsService],
    exports: [StarWarsService]
})
export class StarWarsModule {}
