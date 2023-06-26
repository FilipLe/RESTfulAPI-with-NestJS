import { Test } from '@nestjs/testing'
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { after } from 'node:test';

describe('App e2e', () => {
  let app: INestApplication;

  // starting logic
  beforeAll(async () => {
    // compiling module for integration testing
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    
    // creating NestJS application testing application for e2e testing
    app = moduleRef.createNestApplication();
    
    app.useGlobalPipes(new ValidationPipe({
      // strip out any input that is not defined in the DTO
      whitelist: true,
    }));
    
    // start server
    await app.init();
  });


  // tear down logic - close app after all the tests are done
  afterAll(() => {
    app.close();
  });


  // test DB

  
  it.todo('should pass');
});