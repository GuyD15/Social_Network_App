const router = require('express').Router();
const UserAdmin = require('../controllers/admin-controller');

router.get('/', async (req, res) => {
    try {
        await UserAdmin.getAllUsers(req, res);
    } catch (err) {
        res.status(500).json({ message: "Error getting all users", error: err.message });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        await UserAdmin.getOneUser(req, res);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving a user", error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        await UserAdmin.createUser(req, res);
    } catch (err) {
        res.status(400).json({ message: "Error creating a user", error: err.message });
    }
});

router.put('/:userId', async (req, res) => {
    try {
        await UserAdmin.updateUser(req, res);
    } catch (err) {
        res.status(400).json({ message: "Error updating a user", error: err.message });
    }
});

router.delete('/:userId', async (req, res) => {
    try {
        await UserAdmin.deleteUser(req, res);
    } catch (err) {
        res.status(500).json({ message: "Error deleting the user", error: err.message });
    }
});

router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        await UserAdmin.addFriend(req, res);
    } catch (err) {
        res.status(500).json({ message: "Error adding friend", error: err.message });
    }
});

router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        await UserAdmin.removeFriend(req, res);
    } catch (err) {
        res.status(500).json({ message: "Error removing friend", error: err.message });
    }
});

module.exports = router;