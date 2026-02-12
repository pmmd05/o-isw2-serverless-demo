export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre === "error") {
    return res.status(400).json({
      error: "Error",
      mensaje: "Fallo al procesar. Intente de nuevo."
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}