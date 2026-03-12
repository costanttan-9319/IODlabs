const request = require('supertest');
const app = require('./app');

describe('Calculator API Unit Tests', () => {

    test('GET /calculator/add => 10 + 5 should equal 15', () => {
        return request(app)
            .get('/calculator/add?num1=10&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.result).toBe(15);
            });
    });

    test('GET /calculator/subtract => 20 - 5 should equal 15', () => {
        return request(app)
            .get('/calculator/subtract?num1=20&num2=5')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.result).toBe(15);
            });
    });

    test('GET /calculator/multiply => 4 * 3 should equal 12', () => {
        return request(app)
            .get('/calculator/multiply?num1=4&num2=3')
            .expect(200)
            .then((response) => {
                expect(response.body.result).toBe(12);
            });
    });

    test('GET /calculator/divide => prevents division by zero', () => {
        return request(app)
            .get('/calculator/divide?num1=10&num2=0')
            .expect(200)
            .then((response) => {
                expect(response.body.result).toBe("Cannot divide by zero");
            });
    });
});