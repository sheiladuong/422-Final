const { watch } = require('../src/watcher.js');

// correctly outputs that file was parsed
test('watch correctly outputs that file was parsed', () => {
    const watched = "/test_inbound";
    const output = "/test_outbound";
    const processed = "/test_processed";

    expect(watch(watched, output, processed)).toThrow('Parsed /Users/sheiladuong/iste422/final-exam/test/test_inbound/parser_test_data.csv');
});