import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo!';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'Yo soy nuevo, el nuevo metodo';
  }

  @Get('ruta')
  otroNewEndPoint9() {
    return 'hello, 2do endpoint';
  }
}
