const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
const fs = require('fs')

let image_data = "";

const { exec } = require('child_process');
exec('[Convert]::ToBase64String([IO.File]::ReadAllBytes("./1.jpg")) > output.txt', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    console.log('ready')
})

fs.readFile('./output.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  image_data = data;
});
