import bcrypt from 'bcrypt';

const users = [
  {
    username: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    username: 'John Doe',
    email: "john@example.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    username: 'Mary Doe',
    email:'mary@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default users;
