import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // todo: desabilidato pois o vercel irá definir a porta e configurar o CORS
  // app.enableCors();
  // await app.listen(3000);
  await app.init();
  return app;
}
export default bootstrap();
