const itemsModel = require('../models/item');
const itemsController = {};
itemsController.index = (req, res) => {
  itemsModel.findAll()
    .then(items=> {
      res.json({
        message: "ok",
        data: {items}
      });
    })
    .catch((err) => {
      console.log(err);
      res.status('400').json({ message: '400', err });
    });
};
itemsController.show = (req, res) => {
  itemsModel.findById(req.params.id)
    .then(item => {
      res.json({
        message: "ok",
        data: { item }
      });
    })
    .catch(err => {
      res.status(400).json({ message: "400", err });
    });
};

itemsController.create = (req, res) => {
  console.log("inside create: ", req.body)
  itemsModel.create(req.body)
    .then(item => {
      res.json({ message: "ok", data: { item } });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

itemsController.update = (req, res) => {
  itemsModel.update(req.body)
    .then((record) => {
      res.json({ message: `items ${item} updated` });
      res.redirect('/user');
    }).catch((err) => {
        console.log(err);
        res.status(401).json({ message: 'something went wrong' });
    });
};

  /*delete records*/
  itemsController.destroy = (req, res, next) => {
    console.log(res);
    itemsModel
      .destroy(res.params)
      .then(() => {
        console.log(res.params)
        next();
      })
      .catch((err) => {
        console.log(err);
      });
  };
module.exports = itemsController;
