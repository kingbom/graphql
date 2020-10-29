### npm init -y
### npm i nodemon esm dotenv graphql express apollo-server-express mongoose
### npm start


### Query user profile
```bash
query {
  me {
    id
    name
  }
}
```

### Query find user by id
{
  user(id: "5f9b0c14543f316570bd5240") {
    id,
    name
  }
}

### Query find users
```bash
{
  users {id, name}
}
```

### Create user function signup
```bash
mutation {
  signup (
    name : "jaruwit" 
    email: "jaruwit@gmail.com",
    password: "pass@aaaa"
  ) {
    name 
    email
    password
  }
}
```
