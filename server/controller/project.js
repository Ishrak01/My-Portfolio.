const projectModel=require('../Model/projectModel')

exports.create= async (req, res) => {
  try {
    const { name,image,url } = req.body;
    const newLink = new projectModel({ name,image,url });
    const savedLink = await newLink.save();
    res.json(savedLink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all links
exports.getData= async (req, res) => {
  try {
    const links = await projectModel.find();
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read a specific link by ID
exports.getById= async (req, res) => {
  try {
    const link = await projectModel.findById(req.params.id);
    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json(link);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a link by ID
exports.updateById= async (req, res) => {
  try {
    const { name,image,url } = req.body;
    const updatedLink = await projectModel.findByIdAndUpdate(req.params.id, { name,image,url }, { new: true });
    if (!updatedLink) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json(updatedLink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a link by ID
exports.deleteById= async (req, res) => {
  try {
    const deletedLink = await projectModel.findByIdAndDelete(req.params.id);
    if (!deletedLink) {
      return res.status(404).json({ error: 'Link not found' });
    }
    res.json({ message: 'Link deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};