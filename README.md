## Bare bone Micro-frontend (No CSS, No JS framework)
This is a simple micro frontend application built with webpack module federation consisting of three separate apps.

https://user-images.githubusercontent.com/5136093/209764042-7348555e-f418-4399-a808-57e873ac077a.mov


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

### Roadmap
 - [X] Bare bone structure
 - [ ] Multi framework use case (Vue, swelte, react, etc.)
 - [ ] Deploy on Cloud (AWS, Vercel, Netlify)
 - [ ] CI/CD pipeline (Github Actions)
