### Init project
```bash
npm init -y
```

### Install dependencies
```bash
npm i nodemon esm dotenv graphql express apollo-server-express mongoose
```

### Start appplication
```bash
npm start
```

### Example using graphql

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
```bash
{
  user(id: "5f9b0c14543f316570bd5240") {
    id,
    name
  }
}
```

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
