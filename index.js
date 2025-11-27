const logger = require("acme-internal-logger");
function main() {
  logger.log("Starting victim app...");
  console.log("Victim app is doing some work...");
}
main();