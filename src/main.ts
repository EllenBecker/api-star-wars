import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // todo: desabilidato pois o vercel configurar o CORS
  // app.enableCors();
  return await app.listen(process.env.PORT);
}
export default bootstrap();
