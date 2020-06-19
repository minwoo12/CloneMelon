import app from "./app";

import "./db";

const port = 4000;

app.listen(port, () => console.log(`http://localhost:${port}`));
