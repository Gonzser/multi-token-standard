/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ERC1155Metadata } from "./ERC1155Metadata";

export class ERC1155MetadataFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ERC1155Metadata> {
    return super.deploy(overrides) as Promise<ERC1155Metadata>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ERC1155Metadata {
    return super.attach(address) as ERC1155Metadata;
  }
  connect(signer: Signer): ERC1155MetadataFactory {
    return super.connect(signer) as ERC1155MetadataFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Metadata {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Metadata;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "URI",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610484806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780630e89341c1461008e575b600080fd5b61007a6004803603602081101561005157600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610120565b604080519115158252519081900360200190f35b6100ab600480360360208110156100a457600080fd5b5035610185565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100e55781810151838201526020016100cd565b50505050905090810190601f1680156101125780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000141561017457506001610180565b61017d826102d8565b90505b919050565b6060600061019283610322565b60405160200180838054600181600116156101000203166002900480156101f05780601f106101ce5761010080835404028352918201916101f0565b820191906000526020600020905b8154815290600101906020018083116101dc575b5050825160208401908083835b6020831061023a57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016101fd565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b606081610363575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610180565b818060005b821561037c57600101600a83049250610368565b60608167ffffffffffffffff8111801561039557600080fd5b506040519080825280601f01601f1916602001820160405280156103c0576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b831561044457600a840660300160f81b8282806001900393508151811061040a57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a840493506103e7565b509594505050505056fea264697066735822122082caa595b339093c3fcf32e44d8d5ae31ce35b5b3b1a389d721471b7bfe86dc464736f6c63430007040033";
