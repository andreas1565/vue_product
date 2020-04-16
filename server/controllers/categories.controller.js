const Categories = require('../models/Categories');
exports.GetAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    res
      .send(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};

exports.CreateCategories = async (req, res) => {
  try {
    const categories = await Categories.create({
      name: req.fields.name
    });
    res.status(201).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};

exports.GetOneCategorie = async (req, res) => {
  try {
    const categorie = await Categories.findByPk(req.params.id);
    res.status(200).json(categorie);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
exports.EditCategorie = async (req, res) => {
  try {
    const categorie = await Categories.update(
      {
        name: req.fields.name
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(categorie);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
exports.DeleteCategorie = async (req, res) => {
  try {
    const product = await Categories.destroy({ where: { id: req.params.id } });
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
