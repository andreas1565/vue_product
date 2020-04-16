const Contact = require('../models/Contact');
exports.GetAllContact = async (req, res) => {
  try {
    const contact = await Contact.findAll();
    res.status(200).json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
exports.CreateContact = async (req, res) => {
  try {
    console.log(req.fields.name);
    const contact = await Contact.create({
      name: req.fields.name,
      address: req.fields.address,
      phone: req.fields.phone,
      email: req.fields.email,
      messages: req.fields.messages
    });
    res.status(201).json(contact);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteContact = async (req, res) => {
  try {
    const contact = await Contact.destroy({ where: { id: req.params.id } });
    res.status(200).json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
