const userService = require("./user.service");

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            message: "User created successfully",
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json({
            message: "Get users successfully",
            data: users,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            message: "Get user successfully",
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            message: "User updated successfully",
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            message: "User deleted successfully",
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const toggleUserStatus = async (req, res) => {
    try {
        const user = await userService.toggleUserStatus(req.params.id, req.body.isActive);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            message: `User ${user.isActive ? "activated" : "deactivated"} successfully`,
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const result = await userService.login(
            req.body.email,
            req.body.password
        );

        res.json({
            message: "Login successful",
            data: result,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const updateMe = async (req, res) => {
    try {
        const user = await userService.updateMe(
            req.user.id, 
            req.body
        );
        res.json({
            message: "Profile updated successfully",
            data: user,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const deleteMe = async (req, res) => {
    try {
        await userService.deleteMe(req.user.id);

        res.json({
            message: "Account deleted successfully",
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }

};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    toggleUserStatus,
    login,
    updateMe,
    deleteMe,
};