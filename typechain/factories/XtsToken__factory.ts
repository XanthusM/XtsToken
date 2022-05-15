/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XtsToken, XtsTokenInterface } from "../XtsToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600981526020017f58746873546f6b656e00000000000000000000000000000000000000000000008152506003908051906020019062000051929190620000d0565b506040518060400160405280600481526020017f5874687300000000000000000000000000000000000000000000000000000000815250600490805190602001906200009f929190620000d0565b506012600560006101000a81548160ff021916908360ff160217905550348015620000c957600080fd5b50620001e5565b828054620000de9062000180565b90600052602060002090601f0160209004810192826200010257600085556200014e565b82601f106200011d57805160ff19168380011785556200014e565b828001600101855582156200014e579182015b828111156200014d57825182559160200191906001019062000130565b5b5090506200015d919062000161565b5090565b5b808211156200017c57600081600090555060010162000162565b5090565b600060028204905060018216806200019957607f821691505b60208210811415620001b057620001af620001b6565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61168480620001f56000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063b09f126611610066578063b09f126614610276578063d28d885214610294578063dd62ed3e146102b2578063e1f21c67146102e2576100f5565b806370a08231146101dc57806395d89b411461020c5780639dc29fac1461022a578063a9059cbb14610246576100f5565b8063313ce567116100d3578063313ce5671461016657806332424aa3146101845780633eaaf86b146101a257806340c10f19146101c0576100f5565b806306fdde03146100fa57806318160ddd1461011857806323b872dd14610136575b600080fd5b610102610312565b60405161010f9190611168565b60405180910390f35b6101206103a4565b60405161012d91906112aa565b60405180910390f35b610150600480360381019061014b9190610f21565b6103ad565b60405161015d919061114d565b60405180910390f35b61016e6103d5565b60405161017b91906112aa565b60405180910390f35b61018c6103de565b60405161019991906112c5565b60405180910390f35b6101aa6103f1565b6040516101b791906112aa565b60405180910390f35b6101da60048036038101906101d59190610f70565b6103f7565b005b6101f660048036038101906101f19190610ebc565b610405565b60405161020391906112aa565b60405180910390f35b61021461044e565b6040516102219190611168565b60405180910390f35b610244600480360381019061023f9190610f70565b6104e0565b005b610260600480360381019061025b9190610f70565b6104ee565b60405161026d919061114d565b60405180910390f35b61027e61050a565b60405161028b9190611168565b60405180910390f35b61029c610598565b6040516102a99190611168565b60405180910390f35b6102cc60048036038101906102c79190610ee5565b610626565b6040516102d991906112aa565b60405180910390f35b6102fc60048036038101906102f79190610f21565b6106ad565b604051610309919061114d565b60405180910390f35b6060600380546103219061140e565b80601f016020809104026020016040519081016040528092919081815260200182805461034d9061140e565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b60008054905090565b6000803390506103be8582856106c5565b6103c9858585610751565b60019150509392505050565b60006012905090565b600560009054906101000a900460ff1681565b60005481565b61040182826109bf565b5050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461045d9061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546104899061140e565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b6104ea8282610b07565b5050565b6000803390506104ff818585610751565b600191505092915050565b600480546105179061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546105439061140e565b80156105905780601f1061056557610100808354040283529160200191610590565b820191906000526020600020905b81548152906001019060200180831161057357829003601f168201915b505050505081565b600380546105a59061140e565b80601f01602080910402602001604051908101604052809291908181526020018280546105d19061140e565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b505050505081565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006106ba848484610cc7565b600190509392505050565b60006106d18484610626565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461074b578181101561073d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610734906111ca565b60405180910390fd5b61074a8484848403610cc7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b8906111ea565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610831576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108289061120a565b60405180910390fd5b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af9061122a565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461094d91906112fc565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109b191906112aa565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a269061128a565b60405180910390fd5b80600080828254610a4091906112fc565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a9691906112fc565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610afb91906112aa565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e9061126a565b60405180910390fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf59061124a565b60405180910390fd5b818103600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600080828254610c559190611352565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cba91906112aa565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2e906111aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610da7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9e9061118a565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e8591906112aa565b60405180910390a3505050565b600081359050610ea181611620565b92915050565b600081359050610eb681611637565b92915050565b600060208284031215610ece57600080fd5b6000610edc84828501610e92565b91505092915050565b60008060408385031215610ef857600080fd5b6000610f0685828601610e92565b9250506020610f1785828601610e92565b9150509250929050565b600080600060608486031215610f3657600080fd5b6000610f4486828701610e92565b9350506020610f5586828701610e92565b9250506040610f6686828701610ea7565b9150509250925092565b60008060408385031215610f8357600080fd5b6000610f9185828601610e92565b9250506020610fa285828601610ea7565b9150509250929050565b610fb581611398565b82525050565b6000610fc6826112e0565b610fd081856112eb565b9350610fe08185602086016113db565b610fe98161149e565b840191505092915050565b6000611001601b836112eb565b915061100c826114af565b602082019050919050565b6000611024601d836112eb565b915061102f826114d8565b602082019050919050565b60006110476016836112eb565b915061105282611501565b602082019050919050565b600061106a601e836112eb565b91506110758261152a565b602082019050919050565b600061108d601c836112eb565b915061109882611553565b602082019050919050565b60006110b0601f836112eb565b91506110bb8261157c565b602082019050919050565b60006110d3601b836112eb565b91506110de826115a5565b602082019050919050565b60006110f6601a836112eb565b9150611101826115ce565b602082019050919050565b60006111196018836112eb565b9150611124826115f7565b602082019050919050565b611138816113c4565b82525050565b611147816113ce565b82525050565b60006020820190506111626000830184610fac565b92915050565b600060208201905081810360008301526111828184610fbb565b905092915050565b600060208201905081810360008301526111a381610ff4565b9050919050565b600060208201905081810360008301526111c381611017565b9050919050565b600060208201905081810360008301526111e38161103a565b9050919050565b600060208201905081810360008301526112038161105d565b9050919050565b6000602082019050818103600083015261122381611080565b9050919050565b60006020820190508181036000830152611243816110a3565b9050919050565b60006020820190508181036000830152611263816110c6565b9050919050565b60006020820190508181036000830152611283816110e9565b9050919050565b600060208201905081810360008301526112a38161110c565b9050919050565b60006020820190506112bf600083018461112f565b92915050565b60006020820190506112da600083018461113e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611307826113c4565b9150611312836113c4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561134757611346611440565b5b828201905092915050565b600061135d826113c4565b9150611368836113c4565b92508282101561137b5761137a611440565b5b828203905092915050565b6000611391826113a4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156113f95780820151818401526020810190506113de565b83811115611408576000848401525b50505050565b6000600282049050600182168061142657607f821691505b6020821081141561143a5761143961146f565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f617070726f766520746f20746865207a65726f20616464726573730000000000600082015250565b7f617070726f76652066726f6d20746865207a65726f2061646472657373000000600082015250565b7f696e73756666696369656e7420616c6c6f77616e636500000000000000000000600082015250565b7f7472616e736665722066726f6d20746865207a65726f20616464726573730000600082015250565b7f7472616e7366657220746f20746865207a65726f206164647265737300000000600082015250565b7f7472616e7366657220616d6f756e7420657863656564732062616c616e636500600082015250565b7f6275726e20616d6f756e7420657863656564732062616c616e63650000000000600082015250565b7f6275726e2066726f6d20746865207a65726f2061646472657373000000000000600082015250565b7f6d696e7420746f20746865207a65726f20616464726573730000000000000000600082015250565b61162981611386565b811461163457600080fd5b50565b611640816113c4565b811461164b57600080fd5b5056fea26469706673582212207b69b2a978d5ceef3f504c634f3f54b42405c163043c8978e73decdd9bfadd0a64736f6c63430008040033";

export class XtsToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XtsToken> {
    return super.deploy(overrides || {}) as Promise<XtsToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XtsToken {
    return super.attach(address) as XtsToken;
  }
  connect(signer: Signer): XtsToken__factory {
    return super.connect(signer) as XtsToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XtsTokenInterface {
    return new utils.Interface(_abi) as XtsTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XtsToken {
    return new Contract(address, _abi, signerOrProvider) as XtsToken;
  }
}
