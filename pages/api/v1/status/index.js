function status(request, response) {
  response.status(200).json({ chave: "maior" });
}

export default status;
