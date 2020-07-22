exports.Error404 = (req, res) => {
  res
    .status(404)
    .json({ StatusCode: '404', data: { message: 'Page Not Found 404' } });
};

exports.Error500 = (err, req, res, next) => {
  res.status(500).json({
    StatusCode: '500',
    data: { message: ' Interanl Server Error 500 ', err },
  });
};
