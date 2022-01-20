import request from 'supertest'
import app from "../routes/routes";

/*
    @describe- lets you wrap many tests together under one umbrella. (It is used for organizing your tests).
    @it -  lets you run a test.
    @expect -  lets you perform assertions. The test passes if all assertions passes.
* */

test('User should get back a list of all items /get', async () => {
    const response = await request(app).get('/get');
    expect(response.statusCode).toBe(200);
})


test('User should see hello world', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello World!');
})
