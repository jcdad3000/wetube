export const newUser = (req, res) => res.send("New User");
export const join = (req, res) => res.send("User Join");
export const login = (req, res) => res.send("User Login");
export const users = (req, res) => res.send("Hello");
export const id = (req, res) => res.send(`User ID: #${req.params.id}`);
export const editProfile = (req, res) => res.send("Edit User's Profile");
