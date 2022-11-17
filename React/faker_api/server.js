const express = require('express')
const app = express()
const PORT = 8000

const {faker} = require('@faker-js/faker')

const createUser = () => { 
  return {
    _id:faker.datatype.uuid(), 
    first_name:faker.name.firstName(), 
    last_name:faker.name.lastName(), 
    email:faker.internet.email(), 
    password:faker.internet.password(), 
    phone_number:faker.phone.number()
  }
}

const createCompany = () => { 
  return {
    _id:faker.datatype.uuid(), 
    name:faker.company.name(), 
    street:faker.address.streetAddress(),
    city:faker.address.cityName(),
    state:faker.address.state(),
    zipCode:faker.address.zipCode(),
    country:faker.address.country()
  }
}


app.get('/api/users/new',(request,response)=>{
  const user = createUser()
  response.json(user);
})
app.get('/api/companies/new',(request,response)=>{
  const company = createCompany()
  response.json(company);
})
app.get('/api/user/company',(request,response)=>{
  const user = createUser();
  const company = createCompany();
  const userCompany = {
    user: user, 
    company: company
  }
  response.json(userCompany);
  
})
app.listen(PORT,()=>{
  console.log(`Server is up and running on port ${PORT}`)
})