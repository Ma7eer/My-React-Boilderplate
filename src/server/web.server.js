import express from 'express';

class ExpressWebServer {
  constructor() {
    this.app = express();
    this.app.use(express.static('dist/public')); //use static files at the dist/ directory
  }

  start() {
    const PORT = 3000;
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(PORT, function () {
          resolve();
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        reject(error);
      }
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);
        reject(error);
      }
    });
  }
}

export default ExpressWebServer;