# headless-cms-assignment

## About

This repository was created for the CPRG-310-A assignment: Intergrating a Headless CMS
Front-End: Next.js
Headless CMS: Strapi.js

## Testing Instructions

Both the my-app folder and the my-strapi-app will need to be ran on a local server in order to test.

Next-js
-cd into the my-app folder and run the command line npm run dev to start the next server.

Strapi.js
-cd into the my-strapi-project folder and run the command line npm run develop to start the strapi server.
-Ensure this is running on localhost 1337 otherwise the api will not load and an error message will appear.

## Steps Taken

After initializing a GitHub Repository my first steps were to create the next.js app and the strapi.js app. This was done by running the command npx create-next-app@latest for the next application, and npx create-strapi-app@latest for the strapi application. Following this I created the admin credentials for strapi, then I began creating content structure as well as filling in the information for the API. Once these were created my next task was to fetch the information from the api in next and display it on the page. A large amount of this time was spent figuring out how to pull and image from a json database as strapi did not automatically store the data within the API. Once this was all figured out I began working on simple css for the page. The overall design is incredibly simple as I was not concerned with creating a very detailed page. The api I created only has three components because if I can figure out how to put three components on the page, I can scale up the api and use the same principles on a larger page in the future.
