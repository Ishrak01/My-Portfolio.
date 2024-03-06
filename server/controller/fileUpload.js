const path=require('path')
const fileForge=require("express-fileforge")

const fileUpload = async (req, res) => {
  try {
    // Set up file storage directory
    const fileStoragePath = path.resolve(__dirname, 'myFiles');
    
    // Save the uploaded file
    let uploadedFile = await fileForge.saveFile(req, fileStoragePath, 'abc.pdf');
    
    res.end(`File uploaded successfully: ${uploadedFile}`);
  } catch (error) {
    console.error(error);
    res.status(500).end('Internal Server Error');
  }
};

module.exports = fileUpload;