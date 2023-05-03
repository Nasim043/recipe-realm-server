const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000;

app.use(cors())
const chefs = require('./data/Chef.json')
const recipes = require('./data/recipes.json')

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let chefRecipes = recipes.filter(recipe => recipe.chef_id === id)
  res.send(chefRecipes);
})

app.get('/popular', (req, res) => {
  let chefRecipes = recipes.filter(recipe => recipe.rating > 4.7)
  res.send(chefRecipes);
})

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
})