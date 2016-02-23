/**
 * The task is somehow poorly defined (on purpose).
 * "Append to a JSON file" could mean several things:
 *
 * 1. JSON array
 *   - "append" means add new item to the array
 * 2. JSON object
 *   - "append" means add new property to the object
 * 3. newline-delimited JSON
 *   - "append" means add the object on a new row
 *
 * I guess (and implement) option 1) since it will be the most useful
 * when reading the data later.
 * It is also the hardest to implement.
 *
 * @param {Filesystem} fs instance of core module, separate for testing
 * @param {string} filename
 * @param {Object} data to be appended in the filename
 */
module.exports = function(fs, filename, data, done) {
  fs.readFile(filename, 'utf8', function(err, strContent) {
    if (err && err.code != 'ENOENT') {
      // ignore ENOENT: the file does not exist yet or is empty
      // throw other errors
      return done(err)
    }

    if (strContent) {
      try {
        content = JSON.parse(strContent)
      } catch (ex) {
        console.error('Data corrupted, failed to parse.')
        return done(ex)
      }
    } else {
      // start fresh
      content = []
    }
    content.push(data)
    try {
      // JSON.stringify might throw
      var serialized = JSON.stringify(content)
      fs.writeFile(filename, serialized, done)
    } catch (ex) {
      done(ex)
    }
  })
}
