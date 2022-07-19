import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accOwner, accContractor, accSupplier ] = await stdlib.newTestAccounts(3, startingBalance);
const [ addressOwner, addressContractor, addressSupplier ] = [ accOwner.getAddress(), accContractor.getAddress(), accSupplier.getAddress() ];

console.log(` Owner address: ${addressOwner} Contractor address: ${addressContractor} Supplier address: ${addressSupplier}`);

console.log(`Initialised participant accounts with ${startingBalance}`);

console.log('Launching...');
const ctcOwner = accOwner.contract(backend);
const ctcContractor = accContractor.contract(backend, ctcOwner.getInfo());

const deadline = 50;

const commonInterface = {
  displayFunds: async (funds, address) => {
    console.log(`Contract transferred ${funds} to Supplier ${address} `);
    console.log(`Owner balance: ${await accOwner.balanceOf()} Contractor balance: ${await accContractor.balanceOf()} Supplier balance: ${await accSupplier.balanceOf()}
    `);
  }
}

console.log('Starting backends...');
await Promise.all([
  backend.Owner(ctcOwner, {
    ...stdlib.hasRandom,
    ...commonInterface,
  
    supplier: async () => {
      const address = await ask.ask(`kindly provide the contract address of the supplier you want to pay:`, (x => x));
      return address;
    },
    informTimeOut: async () => {
      await stdlib.wait(deadline);
      console.log(`valid time exceeded!`)
    }
  }),
  backend.Contractor(ctcContractor, {
    ...stdlib.hasRandom,
    ...commonInterface,
    // implement Bob's interact object here
    wagerToPay: async () => {
      console.log(`Contractor (${accContractor.getAddress()}) balance before: ${await accContractor.balanceOf()}`)
      const funds = await ask.ask(`Enter wager for project:`, parseInt);
      console.log(`You paid wager ${funds}!`)
      return funds;
    }
  }),
]);
ask.done();
console.log('Goodbye');