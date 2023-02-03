const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((data) => {
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.json(data);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    name: req.body.name
  }).then(() => {
    res.send("Successfully posted new category.");
  })
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((updatedCategory) => {
    res.json(updatedCategory);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedCategory) => {
    res.json(deletedCategory);
  });
});

module.exports = router;
