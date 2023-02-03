const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    where: {
      // be sure to include its associated Product data
    }
  }).then((data) => {
    res.json(data);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
      // be sure to include its associated Product data
    }
  }).then((data) => {
    res.json(data);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(() => {
    res.send("Successfully posted new tag.");
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      id: req.body.id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((updatedTag) => {
    res.json(updatedTag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedTag) => {
    res.json(deletedTag);
  });
});

module.exports = router;
