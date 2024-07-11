// Translate.js
const enCodigo = "en-US";
const spCodigo = "es-ES";

function LogOutLink(lang) {
  switch (lang.toLowerCase()) {
    case enCodigo.toLowerCase():
      return "Logout";
    case spCodigo.toLowerCase():
      return "Desconectar";
  }
  return "";
}
module.exports = LogOutLink;
