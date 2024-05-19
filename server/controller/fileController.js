const path = require('path');
const fs = require('fs');

let latestUploadedFile = '';


// Endpoint to handle file upload
exports.uploadFile = (req, res) =>{
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  latestUploadedFile = req.file.filename; // Store the latest uploaded file's name
  console.log('File uploaded:', latestUploadedFile);
  res.status(200).send('File uploaded successfully.');
};

const getAllFilePaths = (dir) => {
  let results = [];

  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      // Recursively call the function for subdirectories
      results = results.concat(getAllFilePaths(file));
    } else {
      results.push(file);
    }
  });

  return results;
};

exports.downloadFile = (req, res) =>{
 
  const allFiles = getAllFilePaths(path.join(__dirname, '../uploads'));
  if(allFiles.length > 0){
    const isFileExist = fs.existsSync(allFiles[allFiles.length - 1])
    if (isFileExist) {
      res.download(allFiles[allFiles.length - 1], (err) => {
        if (err) {
          console.error('Error downloading file:', err); 
          res.status(500).send('Internal Server Error');
        }
      });
    } else {
      console.error('File not found:', filePath);
      res.status(404).send('File not found.');
    }
  }
  
  
  
};