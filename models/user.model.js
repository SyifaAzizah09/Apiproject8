const db = require('./db.config');

const User = {};

User.getAll = (result) => {
  db.query("SELECT * FROM users", (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

User.getById = (id, result) => {
  db.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
    if (err) return result(err, null);
    result(null, res[0]);
  });
};

User.create = (data, result) => {
  db.query("INSERT INTO users SET ?", data, (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

User.update = (id, data, result) => {
  db.query(
    "UPDATE users SET name=?, email=?, password=? WHERE id=?",
    [data.name, data.email, data.password, id],
    (err, res) => {
      if (err) return result(err, null);
      result(null, res);
    }
  );
};

User.delete = (id, result) => {
  db.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) return result(err, null);
    result(null, res);
  });
};

module.exports = User;