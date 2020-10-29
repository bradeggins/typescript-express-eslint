import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log(
    "App is listening on http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});

type Api = {
  api: string,
  data: number
}

type App = {
  app: string,
  data: number
}

const apiLog: Api = {
  api: 'Api logging test',
  data: Math.random()
}

const appLog: App = {
  app: 'App logging test',
  data: Math.random()
}


setInterval(() => {
  process.stdout.write(JSON.stringify(apiLog, null, 4))
}, 30000);


setInterval(() => {
  process.stdout.write(JSON.stringify(appLog, null, 4))
}, 60000);




export default server;
