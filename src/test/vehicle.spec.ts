import should from "should";
import request from "request";
import chai from "chai";
const expect = chai.expect;

describe("Veículos", () => {
  it("Adicionando veículo", (done) => {
    request.post(
      {
        url: "http://localhost:4000/vehicles",
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

  it("Atualizando veículo", (done) => {
    request.put(
      {
        url: "http://localhost:4000/vehicles/6417ccd0d155032c22333d63",
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

  it("Deletando veículo", (done) => {
    request.delete(
      {
        url: "http://localhost:4000/vehicles/6417ccd0d155032c22333d63",
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

  it("Buscando todos os veículos", (done) => {
    request.get(
      {
        url: "http://localhost:4000/vehicles",
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

  it("Buscando veículo por ID", (done) => {
    request.get(
      {
        url: "http://localhost:4000/vehicles/6417ccd0d155032c22333d63",
      },
      function (error, response, body) {
        let _body = {};
        try {
          _body = JSON.parse(JSON.stringify(body));
        } catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });
});
