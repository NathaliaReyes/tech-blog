const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
    
        res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route and get a single post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Comment,
            attributes: ['content', 'user_id', 'post_id', 'created_at'],
            include: {
              model: User,
              attributes: ['name'],
            },
          },
        ],
      });
  
      const posts = postData.get({ plain: true });
      console.log(posts);
  
      res.render('post', {
        ...posts,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Post }],
      });
  
      const user = userData.get({ plain: true });

      res.render('profile', {
        ...user,
        loggedIn: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/new', withAuth, async (req, res) => {
    res.render('newpost', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

module.exports = router;