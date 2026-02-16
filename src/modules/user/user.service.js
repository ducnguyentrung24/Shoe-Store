const User = require("./user.model");

const createUser = async (data) => {
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    return await User.create(data);
};

const getUsers = async () => {
    return await User.find().select("-password");
};

const getUserById = async (id) => {
    return await User.findById(id).select("-password");
};

const updateUser = async (id, data) => {
    const user = await User.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
    ).select("-password");

    return user;
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

const toggleUserStatus = async (id, isActive) => {
    return await User.findByIdAndUpdate(
        id,
        { isActive },
        { new: true }
    ).select("-password");
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    toggleUserStatus,
};