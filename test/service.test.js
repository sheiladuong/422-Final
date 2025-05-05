const fs = require('fs');
const path = require('path');
const service = require('../src/service.js');
const watcher = require('../src/watcher.js');

// inbound file correcty moves to processed directory
test('inbound file correctly moves to processed directory', () => {
    const watched = path.join(__dirname, '/test_inbound');
    const output = path.join(__dirname, '/test_outbound');
    const processed = path.join(__dirname, '/test_processed');

    const originalFilePath = path.join(__dirname, '/test_inbound', 'parser_test_data.csv');
    const destinationFilePath = path.join(__dirname, '/test_processed', 'parser_test_data.csv');

    watcher.watch(watched, output, processed);

    expect(fs.existsSync(originalFilePath)).toBe(false);
    expect(fs.existsSync(destinationFilePath)).toBe(true);
});