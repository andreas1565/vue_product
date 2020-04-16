const ContactInformaion = require('../models/Contactinformation');
exports.GetAllContactInformation = async (req, res) => {
  try {
    const contactInformaion = await ContactInformaion.findAll();
    res.status(200).json(contactInformaion);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};

exports.GetOneContactInformation = async (req, res) => {
  try {
    const contactInformaion = await ContactInformaion.findByPk(req.params.id);
    res.status(200).json(contactInformaion);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};

exports.EditContactIformation = async (req, res) => {
  try {
    const contactInformaion = await ContactInformaion.update(
      { ...req.fields },
      { where: { id: req.params.id } }
    );
    res.status(200).json(contactInformaion);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: 'noget gik galt på server prøv igen om lidt' });
  }
};
