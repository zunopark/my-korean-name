import app from "./app";

const PORT = 5000;

const handleListening = () =>
  console.log(`😻LISTENING ON: https://localhost:5000`);

app.listen(PORT, handleListening);
