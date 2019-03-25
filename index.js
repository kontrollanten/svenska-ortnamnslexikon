const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser();

pdfParser.on('pdfParser_dataError', errData => console.error(errData));

pdfParser.on('pdfParser_dataReady', pdfData => {
  fs.writeFileSync('./output.json', pdfParser.getRawTextContent());
});

pdfParser.loadPDF('./kort.pdf');
