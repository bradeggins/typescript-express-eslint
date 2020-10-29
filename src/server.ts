import morgan from "morgan";
import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(
    "App is listening on http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

type Api = {
  endpoint: string,
}

const calls: Api = {
  endpoint: '/v1/aura/test'
}
setInterval(() => {
  process.stdout.write(JSON.stringify(calls, null, 4))
}, 30000);

export default server;
