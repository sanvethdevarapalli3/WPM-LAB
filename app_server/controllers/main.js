const index = (req, res) => {
  res.render('index', { title: 'WPM LAB' });
};
module.exports = {
  index
};
