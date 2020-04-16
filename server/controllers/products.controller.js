const Products = require('../models/Products');
const Categories = require('../models/Categories');
const fs = require('fs');
const { join } = require('path');

exports.GetAllProductsWithPagination = async (req, res) => {
  try {
    // bestem hvor mange elementer der skal vises pr side
    let items_pr_page = 3;

    // vi går som standard ud fra at det er den første side der skal vises
    let current_page = 1;
    if (req.query.page != undefined) {
      if (parseInt(req.query.page) < 1) {
        res.status(400);
        return;
      }
      if (parseInt(req.query.page) >= 1) {
        current_page = parseInt(req.query.page);
      }
    }
    let [result] = await Products.sequelize.query(
      'SELECT COUNT(*) AS total_items FROM products'
    );
    let total_items = result[0].total_items;
    let offset = (current_page - 1) * items_pr_page;
    let total_pages = Math.ceil(total_items / items_pr_page);

    const products = await Products.sequelize.query(
      'SELECT products.id, products.name, products.price, products.description, products.imageurl, categories.name  FROM products INNER JOIN categories ON products.categoryId = categories.id  LIMIT :offset, :items_pr_page',
      {
        replacements: { offset: offset, items_pr_page: items_pr_page },
        model: Products
      }
    );
    res
      .status(200)
      .json({
        products,
        total_pages,
        current_page,
        items_pr_page,
        total_items
      });
    res.end();
  } catch (error) {
    console.log(error);
  }
};

exports.GetAllProducts = async (req, res) => {
  try {
    // const products = await Products.findAll({ include: [Categories] });
    const products = await Products.findAll({
      include: [{ model: Categories, as: 'category' }]
    });
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

exports.CreateProduct = async (req, res) => {
  try {
    const product = await Products.create({
      name: req.fields.name,
      price: req.fields.price,
      description: req.fields.description,
      categoryId: req.fields.categories,
      image: req.files.image.name,
      imageurl:
        'http://localhost:1337/file-bucket/' +
        req.files.image.path.split('/').pop()
    });
    res.status(201).json(product);
    res.end();
  } catch (error) {
    console.log(error);
    if (error.message) {
      res
        .status(400)
        .json({ message: error.message })
        .end();
    }
  }
};

exports.GetOneProduct = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id, {
      include: [{ model: Categories, as: 'category' }]
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    if (error) {
      res
        .send(500)
        .json({ message: 'noget gik galt på server prøv igen om lidt' });
    }
  }
};
exports.EditProduct = async (req, res) => {
  try {
    const product = await Products.update(
      {
        name: req.fields.name,
        price: req.fields.price,
        description: req.fields.description,
        categoryId: req.fields.categories
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    if (error.message) {
      res
        .status(400)
        .json({ message: error.message })
        .end();
    }
  }
};

exports.EditProductImage = async (req, res) => {
  try {
    const oldproduct = await Products.findAll({ where: { id: req.params.id } });
    fs.unlinkSync(
      join(__dirname, '../public/', oldproduct[0].imageurl.split('/').pop())
    );
    const product = await Products.update(
      {
        image: req.files.image.name,
        imageurl:
          'http://localhost:1337/file-bucket/' +
          req.files.image.path.split('/').pop()
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json(product);
    res.end();
  } catch (error) {
    if (error.message) {
      res
        .status(400)
        .json({ message: error.message })
        .end();
    }
  }
};

exports.DeleteProdut = async (req, res) => {
  try {
    const oldproduct = await Products.findAll({ where: { id: req.params.id } });
    // console.log(oldproduct[0].imageurl.split('/').pop());
    fs.unlinkSync(
      join(__dirname, '../public/', oldproduct[0].imageurl.split('/').pop())
    );
    const product = await Products.destroy({ where: { id: req.params.id } });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    if (error) {
      res
        .send(500)
        .json({ message: 'noget gik galt på server prøv igen om lidt' });
      return;
    }
  }
};
