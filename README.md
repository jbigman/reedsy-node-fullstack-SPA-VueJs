## 4. SPA

Using **Vue.js**, create a basic SPA that implements the following UI:

![SPA 1](./images/node_4-01.png "SPA 1")

![SPA 2](./images/node_4-02.png "SPA 2")

### Solution

- [x] be written to a Production-level standard
- [x] use Vue.js
- [x] display 5 books per page
- [ ] have multiple pages to have pagination
- Not using multiple pages, data are simply switched in spa
- [x] expand/collapse details when clicking the book
  - click anywhere on the row except on links expend to show description.attributes.
- [x] have reasonable test coverage
 - `npm run test:unit` => 85% coverage for components, other files should be excluded, but there is almost nothing to test with this imple app.
 - Included also a very simple e2e playwright test
- [x] be scalable — this is a small app, but write it as if it will grow into a full, Production-grade SPA
- [x] assume books will be fetched over HTTP
- Currently using local json file, but it would work nearly the same using fetch (except delay) in BookList.vue
- [x] highlight assumptions you have made; 
- Clicking on a book does not collapse other descriptions 

- [x] highlight uncertainties you have; 
- Assuming descriptions are xss safe, i used v-html to display description with bold or any other html. If not safe, we should display description as is.
- Impossible from screenshot to determine the font used. I currently use `Segoe UI` but numbers are very different.
- We could sort books by column (rating/year of pub) but we need to know if the api can handle requests with this kind of params.
  
- [x] highlight things you would have improved with more time
- Create a pagination component and improve style to handle :disable state
- Redirect to pages `/page/<number>`
- We could click on a book, to show a detail page, with more information
  
- [x] use modern features of vanilla CSS or SASS. Please **do not use styling libraries** like Tailwind or Bootstrap (we want to see how you write CSS).