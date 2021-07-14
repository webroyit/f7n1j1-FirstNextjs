# First Nextjs

# Notes
- Nextjs is a React web framework that enables functionality such as server-side rendering and static site generation
- React app is loaded and rendered on the client
- Nextjs allows the first page load to be rendered by the server which is great for SEO and performance

- The convention for files name is to use lowercase for pages and uppercae for any other components
- A custom Document is used to augment `<html>` and `<body>` tags

- getStaticProps fetch data at build time
- server side props fetch data on every request
- get static path to dynamically generate paths based on the data that is fetched

## Next.js Benefits
- Easy page routing
- API Routes
- Out of the box TypeScript and Sass
- Static site generation (next export)
- Easy deployment

## Folders
- -- public => A static folder for anything that is accessible from the browser (ex = images)
- -- styles => For css styles
- -- pages => For react component, it has routes
-  |__ _app.js => It wraps around all the page components