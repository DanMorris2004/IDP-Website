
import express from 'express';
import Comment from '../models/Comment.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get comments for an event
router.get('/event/:eventId', async (req, res) => {
  try {
    const comments = await Comment.find({ event: req.params.eventId })
      .populate('user', 'username')
      .sort('-createdAt');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add comment to an event
router.post('/event/:eventId', authenticateToken, async (req, res) => {
  try {
    const comment = new Comment({
      event: req.params.eventId,
      user: req.user.userId,
      content: req.body.content
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
