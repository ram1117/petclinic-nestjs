import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { response } from 'express';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    prisma = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
  });

  it('/doctpos(GET)', async () => {
    await request(app.getHttpServer())
      .get('/doctors/')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toEqual(5);
      });
  });

  it('/auth/signup (POST) handle signup request', async () => {
    await request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        fullname: 'Test User 45',
        email: 'testuser45@test.com',
        username: 'testuser45',
        password: 'Abcd@Test45',
      })
      .expect(201)
      .then((response) => {
        const { password, username } = response.body;
        expect(password).toBeUndefined;
        expect(username).toEqual('testuser45');
      });
  });

  it('/auth/signin (POST) handle signing request', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/signin')
      .send({ username: 'testuser45', password: 'Abcd@Test45' })
      .expect(201);

    const access_token_cookie = response.headers['set-cookie'];
    expect(access_token_cookie.length).toEqual(1);
  });

  it('/auth/signout/ (POST)  handle signout request', async () => {
    const signin = await request(app.getHttpServer())
      .post('/auth/signin')
      .send({ username: 'testuser45', password: 'Abcd@Test45' });

    const token = signin.headers['set-cookie'];

    const response = await request(app.getHttpServer())
      .post('/auth/signout')
      .send()
      .set('Cookie', token)
      .expect(201);

    const access_token = response.get('Set-Cookie');
    expect(access_token[0]).toBeUndefined();
  });
});
