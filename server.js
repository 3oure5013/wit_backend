const {Wit, log} = require('node-wit');


const MY_TOKEN = "GIHYJKL7GFQCLINX4RV5AYLPPR2TGJLH";

const client = new Wit({
  accessToken: MY_TOKEN,
  logger: new log.Logger(log.DEBUG) // optional
});

console.log(client.message('Salut'));
