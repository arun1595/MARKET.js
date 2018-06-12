/* GENERATED BY TYPECHAIN VER. 0.2.1 */
/* tslint:disable */

import { BigNumber } from "bignumber.js";
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper,
  DeferredEventWrapper
} from "./typechain-runtime";

export class MarketContractRegistry extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "contractAddress", type: "address" }],
        name: "AddressAddedToWhitelist",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "contractAddress", type: "address" }],
        name: "AddressRemovedFromWhitelist",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "factoryAddress", type: "address" }],
        name: "FactoryAddressAdded",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: "factoryAddress", type: "address" }],
        name: "FactoryAddressRemoved",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "previousOwner", type: "address" },
          { indexed: true, name: "newOwner", type: "address" }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        constant: true,
        inputs: [{ name: "contractAddress", type: "address" }],
        name: "isAddressWhiteListed",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "getAddressWhiteList",
        outputs: [{ name: "", type: "address[]" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          { name: "contractAddress", type: "address" },
          { name: "whiteListIndex", type: "uint256" }
        ],
        name: "removeContractFromWhiteList",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "contractAddress", type: "address" }],
        name: "addAddressToWhiteList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "factoryAddress", type: "address" }],
        name: "addFactoryAddress",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [{ name: "factoryAddress", type: "address" }],
        name: "removeFactoryAddress",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<MarketContractRegistry> {
    const contract = new MarketContractRegistry(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);

    // in case of missing smartcontract, code can be equal to "0x0" or "0x" depending on exact web3 implementation
    // to cover all these cases we just check against the source code length — there won't be any meaningful EVM program in less then 3 chars
    if (code.length < 4) {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get owner(): Promise<string> {
    return promisify(this.rawWeb3Contract.owner, []);
  }
  public get getAddressWhiteList(): Promise<string[]> {
    return promisify(this.rawWeb3Contract.getAddressWhiteList, []);
  }
  public isAddressWhiteListed(contractAddress: BigNumber | string): Promise<boolean> {
    return promisify(this.rawWeb3Contract.isAddressWhiteListed, [contractAddress.toString()]);
  }

  public transferOwnershipTx(newOwner: BigNumber | string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "transferOwnership", [
      newOwner.toString()
    ]);
  }
  public removeContractFromWhiteListTx(
    contractAddress: BigNumber | string,
    whiteListIndex: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "removeContractFromWhiteList", [
      contractAddress.toString(),
      whiteListIndex.toString()
    ]);
  }
  public addAddressToWhiteListTx(
    contractAddress: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "addAddressToWhiteList", [
      contractAddress.toString()
    ]);
  }
  public addFactoryAddressTx(
    factoryAddress: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "addFactoryAddress", [
      factoryAddress.toString()
    ]);
  }
  public removeFactoryAddressTx(
    factoryAddress: BigNumber | string
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, "removeFactoryAddress", [
      factoryAddress.toString()
    ]);
  }

  public AddressAddedToWhitelistEvent(eventFilter: {
    contractAddress?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { contractAddress: BigNumber | string },
    { contractAddress?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { contractAddress: BigNumber | string },
      { contractAddress?: BigNumber | string | Array<BigNumber | string> }
    >(this, "AddressAddedToWhitelist", eventFilter);
  }
  public AddressRemovedFromWhitelistEvent(eventFilter: {
    contractAddress?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { contractAddress: BigNumber | string },
    { contractAddress?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { contractAddress: BigNumber | string },
      { contractAddress?: BigNumber | string | Array<BigNumber | string> }
    >(this, "AddressRemovedFromWhitelist", eventFilter);
  }
  public FactoryAddressAddedEvent(eventFilter: {
    factoryAddress?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { factoryAddress: BigNumber | string },
    { factoryAddress?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { factoryAddress: BigNumber | string },
      { factoryAddress?: BigNumber | string | Array<BigNumber | string> }
    >(this, "FactoryAddressAdded", eventFilter);
  }
  public FactoryAddressRemovedEvent(eventFilter: {
    factoryAddress?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { factoryAddress: BigNumber | string },
    { factoryAddress?: BigNumber | string | Array<BigNumber | string> }
  > {
    return new DeferredEventWrapper<
      { factoryAddress: BigNumber | string },
      { factoryAddress?: BigNumber | string | Array<BigNumber | string> }
    >(this, "FactoryAddressRemoved", eventFilter);
  }
  public OwnershipTransferredEvent(eventFilter: {
    previousOwner?: BigNumber | string | Array<BigNumber | string>;
    newOwner?: BigNumber | string | Array<BigNumber | string>;
  }): DeferredEventWrapper<
    { previousOwner: BigNumber | string; newOwner: BigNumber | string },
    {
      previousOwner?: BigNumber | string | Array<BigNumber | string>;
      newOwner?: BigNumber | string | Array<BigNumber | string>;
    }
  > {
    return new DeferredEventWrapper<
      { previousOwner: BigNumber | string; newOwner: BigNumber | string },
      {
        previousOwner?: BigNumber | string | Array<BigNumber | string>;
        newOwner?: BigNumber | string | Array<BigNumber | string>;
      }
    >(this, "OwnershipTransferred", eventFilter);
  }
}
