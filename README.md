# Jinx Places
Is an web app developed with MERN Stack. App was made as a trening project to learn MERN stack. Jinx Places is all about CRUD operations using react mongo and express/node, in the app we can add, delete, alter and view posts, made my us or other users. It is connected with Google Geocoding to allow user to enter address of the place they wanna share and got a Google map as an output.

## Projects File System
Project consits of 2 directories:
1.Front-end
2.Back-end

## How to run it
Your machine needs to be equipted with stable version of Node.js(I was working on Node 16.13.2 LTS)

1.Enter directory ./backend and ./frontend in both run "npm install" in termian. You will install all node modules needed by this project.
2.Then on both directories run "npm start"
3. Working

Default ports:
1.frontend - localhost:3000
2.backend - localhost:5000

## API key and MongoDB address
To avoid any unpleasant suprises there is no api key and mongoDB credentials in the project files.
If you wanna run it you need to:
1.Get your own Google Maps + Geocoding API key and inject it into frontent/public/index.html. There is a special place for it commented in code.
2.You need to create MongoDB cluster and inject credentials for it in backend/app.js. There also is a special place for it commented in code.
