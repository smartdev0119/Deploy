module.exports = (req, res, next) => {
  res.res = (data, message) => {
    res.status(200).json({ success: true, message: message, data: data });
  };

  res.err = (message, statusCode = 400) => {
    res.status(statusCode).json({ success: false, message: message });
  };

  next();
};