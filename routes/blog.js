/**
 * For when I eventually make a blog, these endpoints
 * will retrieve blog entries.
 */

const router = require('express').Router();

/**
 * Gets list of all blog entries
 */
router.get('/all', (req, res, next) => {
  // Placeholder
  res.json({message: 'No blogs yet'});
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
router.get('/:id', (req, res, next) => {

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