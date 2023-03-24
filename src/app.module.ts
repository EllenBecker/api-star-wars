import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsModule } from './star_wars/star_wars.module';

@Module({
  imports: [StarWarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
