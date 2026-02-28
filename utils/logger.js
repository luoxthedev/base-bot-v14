const colors = require("colors");

function timestamp() {
    return new Date().toISOString();
}

const logger = {
    info(msg) {
        console.log(`[${timestamp()}] [${"INFO".cyan}] ${msg}`);
    },
    warn(msg) {
        console.log(`[${timestamp()}] [${"WARN".yellow}] ${msg}`);
    },
    error(msg, err) {
        console.log(`[${timestamp()}] [${"ERROR".red}] ${msg}`);
        if (err?.stack) console.log(err.stack.red);
    },
    debug(msg) {
        if (process.env.DEBUG) {
            console.log(`[${timestamp()}] [${"DEBUG".gray}] ${msg}`);
        }
    }
};

module.exports = logger;
