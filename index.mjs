import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Ali', email: 'ali@gmail.com' },
  { id: 2, name: 'Janifer', email: 'janifers@gmail.com' },
];
// GET REQUEST WITH STATUS CODE 
app.get('/api/users', (req, res) => {
    res.status(200).json(users);    
  });

//     app.post('/api/users', (req, res) => {
//     const newUser = { id: users.length + 1, ...req.body };
//     users.push(newUser);
//     res.status(201).json(newUser);
//   });


//   app.put('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex(u => u.id === userId);
    
//     if (index !== -1) {
//       users[index] = { id: userId, ...req.body };
//       res.json(users[index]);
//     } else {
//       res.status(404).send('User not found');
  
//     }
//   });


 
//   app.delete('/api/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex(u => u.id === userId);
    
//     if (index !== -1) {
//       users.splice(index, 1);
//       res.json({ message: 'User deleted successfully' });
//     } else {
//       res.status(404).send('User not found');
//     }
//   });
  


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});