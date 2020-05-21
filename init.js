import app from "./app";

const PORT = 5000;

const handleListening = () =>
  console.log(`😻LISTENING ON: https://localhost:${PORT}`);

app.listen(PORT, handleListening);
