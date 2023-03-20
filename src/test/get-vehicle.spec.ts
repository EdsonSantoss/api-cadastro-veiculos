import should from "should";
import request from "request";
import chai from "chai";
const expect = chai.expect;

describe("Teste de consulta de veículos", () => {
  it("Buscando todos os veículos", (done) => {
    request.get(
      {
        uri: "http://localhost:4000/vehicles",
      },
      function (error, response, body) {
        let _body = {};
        try {
          _body = JSON.parse(JSON.stringify(body));
        } catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(201);

        done();
      }
    );
  });
});
