var express = require("express"),
  bodyParser = require("body-parser"),
 swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation for Innergy M9 API.",
      version: "1.0.0",
      description:
        "A documentation page for Innergy M9 API. powered by SwaggerUI",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "worawanbydiistudent",
        url: "https://worawanbydiistudent.store",
        // email: "info@email.com",
      },
    },
    servers: [
      {
        url: "https://worawanbydiistudent.store/api/v1/",
      }
    ],
      security: [
        { bearerAuth: [] }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      }
  },
  apis: ["./routes/books.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);
