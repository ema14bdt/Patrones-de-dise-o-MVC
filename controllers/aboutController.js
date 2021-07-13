const path = require('path');

module.exports = {
   about: (req, res) => {
      return res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
   },
};
