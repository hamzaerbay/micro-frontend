## Bare bone Micro-frontend
This is a simple micro frontend application consisting of three separate apps

#### Product App: 
This app displays fake product data using the `faker.js` library and can be accessed at `localhost: 8081`.

#### Cart App: 
This app displays a fake cart number using the `faker.js` library and can be accessed at `localhost: 8082`.

#### Container App: 
This app loads and displays the product and cart apps, and can be accessed at `localhost: 8080`.

---
- Each of these apps operates in its own isolated environment
- Product and cart apps make use of the shared `faker.js` library.

Run `yarn start` in each directory and visit `http://localhost:8080`
