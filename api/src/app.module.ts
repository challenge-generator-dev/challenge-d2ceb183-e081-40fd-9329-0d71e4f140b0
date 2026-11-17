import { Module } from '@nestjs/common';
import { ProductService } from './application/services/product.service';
import { ProductsController } from './application/controllers/products.controller';
import { ProductDynamoRepository } from './infrastructure/repositories/dynamodb/product-dynamo.repository';
import { ProductMongoRepository } from './infrastructure/repositories/mongodb/product-mongo.repository';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    ProductService,
    {
      provide: 'DynamoDBPort',
      useClass: ProductDynamoRepository,
    },
    {
      provide: 'MongoDBPort',
      useClass: ProductMongoRepository,
    },
  ],
})
export class AppModule {}