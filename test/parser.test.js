const path = require('path');
const { processChange } = require('../src/parser.js');

// when a csv file with one row is parsed,
// a json file with the same row exists
test('csv file is correctly parsed to json file', () => {
    // data (one row from patient_data_1.csv)
    const csvFilePath = path.join(__dirname, 'parser_test_data.csv');

    expect(processChange(csvFilePath)).toBe(JSON.stringify('Eric,Rose,1989-09-07,eric.rose97@coruscant.space,"954 Hanson Turnpike, Ericafort, VA 19735",710-37-0415,535.250.0117,INS-8990-8170,Aetna,Abdominal Pain; Runny Nose,COVID-19', null, 2));
});