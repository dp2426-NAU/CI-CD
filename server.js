const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CI/CD Deployment</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 600px;
        }
        h1 {
          color: #1e3c72;
          margin-bottom: 20px;
          font-size: 2em;
        }
        p {
          color: #555;
          font-size: 1.1em;
          line-height: 1.6;
        }
        .deployment-image {
          width: 250px;
          height: 250px;
          margin: 20px auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(30, 60, 114, 0.4);
        }
        .deployment-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="deployment-image">
          <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=500&fit=crop" alt="CI/CD Pipeline" />
        </div>
        <h1>Hello Welcome to Automated Deployment (CI/CD) and Application Monitoring!</h1>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});