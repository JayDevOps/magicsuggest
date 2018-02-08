function copyFiles(inputFile, outputFile) {
    var fs = require('fs');
    var dir = './dist';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    fs.createReadStream('./js/src/magicsuggest.js').pipe(fs.createWriteStream('./dist/magicsuggest.js'));
}
copyFiles();