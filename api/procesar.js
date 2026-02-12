export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre === "error") {
    return res.status(400).json({
      error: "Nombre 'error' no permitido",
      mensaje: "Fallo simulada. Intente de nuevo con otro nombre."
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}