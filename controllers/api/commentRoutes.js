const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST /api/comments
router.post('/:id', withAuth, async (req, res) => {
    try {
        const currentDate = new Date();
        const newComment = await Comment.create({
            content: req.body.content,
            date: currentDate,
            user_id: req.session.user_id,
            post_id: req.params.id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;