import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/procesar.js";

//test Nombre a mayúsculas
test("procesar convierte el nombre a mayúsculas", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  //Cambios en la prueba para Reto 2
  assert.deepEqual(res.body, {
  "resultado": "Nombre procesado: JUAN",
  "longitud": 4
  });
});


//Prueba Reto 1: Sin nombre
test("procesar maneja nombre ausente", () => {
  const req = { query: {} };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.ok(res.body.resultado.includes("ANÓNIMO"));
});

//Prueba Reto 3: Estructura JSON esperada
test("procesar devuelve estructura JSON esperada", () => {
  const req = { query: { nombre: "juan" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(Object.keys(res.body).sort(), ["longitud", "resultado"]);
  assert.equal(typeof res.body.resultado, "string");
  assert.equal(typeof res.body.longitud, "number");
});

//Prueba Reto 4: Manejo de nombre "error"
test("procesar falla cuando nombre es 'error'", () => {
  const req = { query: { nombre: "error" } };

  const res = {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };

  handler(req, res);

  assert.equal(res.statusCode, 400);
  assert.ok(res.body.error);
  assert.equal(res.body.error, "Nombre 'error' no permitido");
});