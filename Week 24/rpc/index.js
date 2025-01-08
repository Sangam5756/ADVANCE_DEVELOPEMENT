import express, { json } from "express";

const app = express();

app.use(express.json());

function add(a, b) {
  return a + b;
}

app.post("/rpc", (req, res) => {
  const { jsonrpc, method, params, id } = req.body;

  if (jsonrpc !== "2.0" || !method || !Array.isArray(params)) {
    res.status(400).json({
      jsonrpc: "2.0",
      error: {
        code: -32600,
        message: "invalid Request",
      },
      id,
    });

    return;
  }
  let result;
  switch (method) {
    case "add":
      result = add(params[0], params[1]);
      break;
    default:
      res.status(404).json({
        jsonrpc: "2.0",
        error: {
          code: -32601,
          message: "Method",
        },
      });
      return;
  }

    // Send back the response
    res.json({ jsonrpc: '2.0', result, id });
});

app.listen(8000, () => {
  console.log("listening on the port 8000");
});
