const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');

chai.use(chaiHttp);

describe('Test top level / route', () => {
    it('it should have a 200 status code', (done) => {
        chai.request('http://localhost:8086') // the top level web address
            .get('/') // the route to add to the top level address
            .end((err, res) => { // what to do once the request returns
                assert.equal(res.status, 200); // check we have the 200 OK HTTP code
                done(); // finish up
            });
    });
})
