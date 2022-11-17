React Commands

npx create-react-app "your-project-name-here"

Inside app folder
  npm start

  npm install axios 

  npm install react-router-dom

  make server folder and server.js
  inside server folder 
    npm init -y
    npm i express 

    server.js will always have : 
    const express = require('express')
    const app = express()
    const PORT = 8000

    app.listen(PORT,()=>{
      console.log(`Server is up and running on port ${PORT}`)
    })

    app.get('/user',(request,response)=>{

    })  

    run server - nodemon server.js

    MiddleWare : 
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))