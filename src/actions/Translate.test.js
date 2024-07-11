const LogOutLink = require("./Translate");

test("Retornar link en espanol", () => {
  expect(LogOutLink("es-ES")).toBe("Desconectar");
});
