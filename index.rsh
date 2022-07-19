'reach 0.1';

const commonInterface = {
  displayFunds: Fun([UInt, Address], Null),
}

export const main = Reach.App(() => {
  
  const Owner = Participant('Owner', {
    // Specify Creator interact interface here..............................
    ...commonInterface,
    supplier: Fun([], Address),
    informTimeOut: Fun([], Null)
  });
  const Contractor = Participant('Contractor', {
    //  Attacher's interact interface here
    ...commonInterface,
    wagerToPay: Fun([], UInt)
  });
  init();
  //The first one to publish deploys the contract the owner of the project who i will call someone who employs a contractor to build and estate but want does not trust the integrity of the contractor employed by a third party agent.Address.Address
  Owner.only(() => {
    const address = declassify(interact.supplier());
  })
  Owner.publish(address);
  commit();

  //The second one to publish always attaches.....Address
  //This line of code, the contractor take the wager expected to disburse and pay disbursement to supplier...
  Contractor.only(() => {
    const wagerDisbursement = declassify(interact.wagerToPay());
  })
  Contractor.publish(wagerDisbursement).pay(wagerDisbursement);
  commit();


  // write your program here...
  Owner.only(() => {
    interact.informTimeOut()
  });
  Owner.publish();

  transfer(wagerDisbursement).to(address);
  commit();

  each([Owner, Contractor], () => {
    interact.displayFunds(wagerDisbursement, address);
  })

  exit();
});
