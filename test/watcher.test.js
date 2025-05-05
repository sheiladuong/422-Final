const path = require('path');
const watcher = require('../src/watcher.js');

// correctly outputs that file was parsed
test('watch correctly outputs that file was parsed', () => {
    const watched = path.join(__dirname, '/test_inbound');
    const output = path.join(__dirname, '/test_outbound');
    const processed = path.join(__dirname, '/test_processed');

    expect(watcher.watch(watched, output, processed)).toThrow('Parsed /Users/sheiladuong/iste422/final-exam/test/test_inbound/parser_test_data.csv');
});