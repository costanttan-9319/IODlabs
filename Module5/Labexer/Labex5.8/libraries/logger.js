class Logger {
    // This is a static method (Utility function)
    static log(id, result) {
        console.log(`[Caller ID: ${id}] - Result generated: ${result}`);
    }
}

module.exports = Logger;