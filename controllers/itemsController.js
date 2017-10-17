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
  console.log(req.body)
  console.log(req.params.id)
  itemsModel.update(req.body, req.params.id)
    .then((record) => {
      res.json({ message: `Item ${record.name} updated` });
    }).catch((err) => {
        res.status(401).json({ message: 'Something went wrong when updating' });
    });
};

  /*delete records*/
  itemsController.destroy = (req, res, next) => {
    //console.log();
    itemsModel
      .destroy(req.params.id)
      .catch((err) => {
        console.log(err);
      });

      itemsModel.findAll().then(res => res.json(res)).catch(err => console.error(err));
  };
module.exports = itemsController;
