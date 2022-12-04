React Commands

Create Project folder
  make new repo on github and follow steps

npx create-react-app client 

Inside client folder
  npm start

  npm install axios 

  npm install react-router-dom

Make server folder and server.js
  inside server folder 
    npm init -y
    npm install mongoose express
    npm install cors


  server.js will always have : 
    const express = require('express')
    const app = express()
    const PORT = 8000

    app.listen(PORT,()=>{
      console.log(`Server is up and running on port ${PORT}`)
    })


    run server - nodemon server.js

    MiddleWare in server.js: 
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
  Routes
    app.get('/user',(request,response)=>{

    })  

    Folder structure 
    server
      - config - will handle the database configuration and connection
      - controllers - will hold all logic for each model (i.e creating, updating, etc...)
      - models - will hold all the schemas
      - routes - will handle all of our routes for each model
      server.js - will handle all the server logic with express
    
      