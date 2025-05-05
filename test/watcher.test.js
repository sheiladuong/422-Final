const path = require('path');
const watcher = require('../src/watcher.js');

// correctly outputs that file was parsed
test('watch correctly outputs that file was parsed', () => {
    const watched = path.join(__dirname, '/test_inbound');
    const output = path.join(__dirname, '/test_outbound');
    const processed = path.join(__dirname, '/test_processed');

    const consoleSpy = jest.spyOn(console, 'info');

    watcher.watch(watched, output, processed);

    expect(consoleSpy).toHaveBeenCalledWith(watched);
});