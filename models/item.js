const db = require("../db/config");
const Item = {};
Item.findAll = () => {
  return db.query('SELECT * FROM items');
};

Item.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM items
    WHERE id = $1
  `, [id]);
};

Item.create = (item) => {
  return db.one(`
    INSERT INTO items (url, name, description, expiration, price, user_id)
    VALUES ($/url/, $/name/, $/description/, $/expiration/, $/price/, $/user_id/)
    RETURNING *
    `,
    item);
};

Item.update = (item, itemID) => {
  return db.one(`
    UPDATE items SET
    url = $1,
    name = $2,
    description = $3,
    expiration = $4,
    price = $5
    WHERE id = $6
    RETURNING *
  `, [item.url, item.name, item.description, item.expiration, item.price, itemID]);
}

Item.destroy = (id) => {
    return db.none(`
    DELETE FROM items WHERE id = $1`, id);
};
module.exports = Item;
