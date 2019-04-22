/**
 * For when I eventually make a blog, these endpoints
 * will retrieve blog entries.
 */

const router = require('express').Router();
const db = require('../db');

/**
 * Gets list of all blog entries
 */
router.get('/all', async (req, res, next) => {
  db.collection('blogs').get()
    .then((blogDocs) => {
      const blogs = [];
      blogDocs.forEach(blog => blogs.push(blog.data()));
      res.json({blogs});
    }, (err) => {
      next(err);
    });
});

// Allow user to post a comment, passing blog id in body
router.post('/comment', (req, res, next) => {
  const { blogId, comment, username } = req.body;
  
  if (blogId && comment && username) {

  } else {
    res.status(422).json({});
  }
});

/**
 * Gets specified blog
 */
router.get('/:slug', (req, res, next) => {
  console.log(req.params.slug)
  db.collection('blogs').where('slug', '==', req.params.slug)
    .limit(1).get()
      .then((blogDocs) => {
        const blog = blogDocs.docs[0].data();
        res.json({blog});
      })
      .catch((err) => {
        next(err);
      })
});

/**
 * Searches for a blog entry based on keyword
 */
router.get('/search', (req, res, next) => {
  if (req.query.key) {
    // Search by the key
  } else {
    // Give back all blogs
  }
});

module.exports = router;