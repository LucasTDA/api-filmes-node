//impoirtando pacotes

const request = require('supertest');
const app = require('../app');

describe('API de filmes', ()=>{

    test('Deve retornar 200 em GET / api/ filmes', async()=>{

        const res = await request(app).get('/api/filmes')
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    })

})