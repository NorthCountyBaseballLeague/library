const express = require('express');

const authorRouter = express.Router();

function router(nav) {
  const authors = [];

  authorRouter.route('/')
    .get((req, res) => {
      res.render(
        'authorListView',
        {
          nav,
          title: 'Library',
          authors
        }
      );
    });

  authorRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'authorView',
        {
          nav,
          title: 'Library',
          author: authors[id]
        }
      );
    });

  return authorRouter;
}

module.exports = router;
