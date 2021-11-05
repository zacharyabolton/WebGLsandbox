const chaiHttp = require('chai-http');
const chaiDom = require('chai-dom');
const assert = require('assert');
const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
require('jsdom-global')();

chai.use(chaiHttp);
chai.use(chaiDom);

describe('Test top level / route', () => {
    it('it should have a 200 status code', (done) => {
        // the top level web address
        chai.request('http://localhost:8086')
            // the route to add to the top level address
            .get('/')
            // what to do once the request returns
            .end((err, res) => {
                // check we have the 200 OK HTTP code
                assert.equal(res.status, 200);
                // finish up
                done();
            });
    });
    it('it should have content', (done) => {
        // the top level web address
        chai.request('http://localhost:8086')
            // the route to add to the top level address
            .get('/')
            .end((err, res) => {
                const dom = new JSDOM(res.text);
                const element = dom.window.document.querySelector('h1');
                expect(element).to.have.text("WebGL sandbox")
                //assert.equal(res.body, expected)
            })
    })
})
