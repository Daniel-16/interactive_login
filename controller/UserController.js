const UserModel = require("../model/UserModel");

exports.signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const user = await UserModel.signup(fullname, email, password);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.find({}).sort({ createdAt: -1 });
    res.json({ user });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
