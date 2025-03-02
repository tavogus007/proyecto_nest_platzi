import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit} y offset => ${offset} y ${brand}`;
  }

  @Get('products/filter')
  getProductfilter() {
    return `Yo soy un filtro`;
  }
  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${id} and ${productId}`;
  }
}
