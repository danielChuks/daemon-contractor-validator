// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0],
      2: [ctc0, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Contractor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contractor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contractor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
  ;
  const v76 = stdlib.protect(ctc1, await interact.wagerToPay(), {
    at: './index.rsh:31:61:application',
    fs: ['at ./index.rsh:30:18:application call to [unknown function] (defined at: ./index.rsh:30:22:function exp)'],
    msg: 'wagerToPay',
    who: 'Contractor'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v70, v71, v76],
    evt_cnt: 1,
    funcNum: 1,
    lct: v72,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [v76, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
      
      sim_r.txns.push({
        amt: v78,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v88 = stdlib.addressEq(v70, v85);
  stdlib.assert(v88, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Contractor'
    });
  ;
  stdlib.protect(ctc2, await interact.displayFunds(v78, v71), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)'],
    msg: 'displayFunds',
    who: 'Contractor'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, await interact.supplier(), {
    at: './index.rsh:23:49:application',
    fs: ['at ./index.rsh:22:13:application call to [unknown function] (defined at: ./index.rsh:22:17:function exp)'],
    msg: 'supplier',
    who: 'Owner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v71], secs: v73, time: v72, didSend: v27, from: v70 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v38, from: v77 } = txn2;
  ;
  stdlib.protect(ctc2, await interact.informTimeOut(), {
    at: './index.rsh:39:27:application',
    fs: ['at ./index.rsh:38:13:application call to [unknown function] (defined at: ./index.rsh:38:17:function exp)'],
    msg: 'informTimeOut',
    who: 'Owner'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v70, v71, v78],
    evt_cnt: 0,
    funcNum: 2,
    lct: v79,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v71,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v87, time: v86, didSend: v46, from: v85 } = txn3;
  ;
  const v88 = stdlib.addressEq(v70, v85);
  stdlib.assert(v88, {
    at: './index.rsh:41:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  stdlib.protect(ctc2, await interact.displayFunds(v78, v71), {
    at: './index.rsh:47:26:application',
    fs: ['at ./index.rsh:46:7:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)'],
    msg: 'displayFunds',
    who: 'Owner'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBVClkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAJhJJAxAAEAkEkQkNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0A1cAIDEAEkSxIrIBNAOBQFuyCCOyEDQDVyAgsgezQgCQSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/1cgIDX+STUFFzX9gATVFRkUNP0WULA0/YgAxjT/NP5QNP0WUChLAVcASGdIJDUBMgY1AkIAWkiBoI0GiACjIjQBEkQ0BEkiEkw0AhIRREk1BTX/gAT7hm/uNP9QsDEANP9QKEsBVwBAZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a98380380610a98833981016040819052610022916101bb565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a1610085341560076100f9565b604080518082018252600060208083018281523380855286830151516001600160a01b03908116835260019485905543909455855192830152519091169281019290925290606001604051602081830303815290604052600290805190602001906100f1929190610122565b5050506102af565b8161011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012e90610274565b90600052602060002090601f0160209004810192826101505760008555610196565b82601f1061016957805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019657825182559160200191906001019061017b565b506101a29291506101a6565b5090565b5b808211156101a257600081556001016101a7565b60008183036040808212156101cf57600080fd5b80518082016001600160401b0380821183831017156101fe57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561021757600080fd5b83519450602085019150848210818311171561024357634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b038216821461026257600080fd5b90825260208101919091529392505050565b600181811c9082168061028857607f821691505b602082108114156102a957634e487b7160e01b600052602260045260246000fd5b50919050565b6107da806102be6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780637eea518c14610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105b7565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105b7565b61025e565b3480156100bf57600080fd5b506100c8610407565b60405161006f9291906105da565b6100e6600260005414600d6104a4565b610100813515806100f957506001548235145b600e6104a4565b60008080556002805461011290610637565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610637565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610688565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516101d69291906106fe565b60405180910390a16101ea3415600b6104a4565b8051610202906001600160a01b03163314600c6104a4565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610243573d6000803e3d6000fd5b506000808055600181905561025a906002906104c9565b5050565b61026e60016000541460096104a4565b6102888135158061028157506001548235145b600a6104a4565b60008080556002805461029a90610637565b80601f01602080910402602001604051908101604052809291908181526020018280546102c690610637565b80156103135780601f106102e857610100808354040283529160200191610313565b820191906000526020600020905b8154815290600101906020018083116102f657829003601f168201915b505050505080602001905181019061032b919061073b565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16103853460208401351460086104a4565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a85013583526002958690554360015588518086019190915292511682880152518185015285518082039094018452608001909452815192936104019391920190610506565b50505050565b60006060600054600280805461041c90610637565b80601f016020809104026020016040519081016040528092919081815260200182805461044890610637565b80156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b50505050509050915091509091565b8161025a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104d590610637565b6000825580601f106104e5575050565b601f016020900490600052602060002090810190610503919061058a565b50565b82805461051290610637565b90600052602060002090601f016020900481019282610534576000855561057a565b82601f1061054d57805160ff191683800117855561057a565b8280016001018555821561057a579182015b8281111561057a57825182559160200191906001019061055f565b5061058692915061058a565b5090565b5b80821115610586576000815560010161058b565b6000604082840312156105b157600080fd5b50919050565b6000604082840312156105c957600080fd5b6105d3838361059f565b9392505050565b82815260006020604081840152835180604085015260005b8181101561060e578581018301518582016060015282016105f2565b81811115610620576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061064b57607f821691505b602082108114156105b157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461068357600080fd5b919050565b60006060828403121561069a57600080fd5b6040516060810181811067ffffffffffffffff821117156106cb57634e487b7160e01b600052604160045260246000fd5b6040526106d78361066c565b81526106e56020840161066c565b6020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461072c57600080fd5b80604085015250509392505050565b60006040828403121561074d57600080fd5b6040516040810181811067ffffffffffffffff8211171561077e57634e487b7160e01b600052604160045260246000fd5b60405261078a8361066c565b81526107986020840161066c565b6020820152939250505056fea2646970667358221220018f67575ee7097224f9175ac3d11818c49c97d67b5ee80237a994d6d10a996b64736f6c634300080c0033`,
  BytecodeLen: 2712,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Contractor": Contractor,
  "Owner": Owner
  };
export const _APIs = {
  };
