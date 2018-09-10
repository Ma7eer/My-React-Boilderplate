import ExpressWebServer from './web.server';

let webServer = new ExpressWebServer();

webServer.start()
  .then(() => {
    console.log('Web server started at port 3000!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });