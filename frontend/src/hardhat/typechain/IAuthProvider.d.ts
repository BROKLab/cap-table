/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAuthProviderInterface extends ethers.utils.Interface {
  functions: {
    "authenticate(address)": FunctionFragment;
    "ttl(address)": FunctionFragment;
    "controllers()": FunctionFragment;
    "hasAuthenticated(address,uint256)": FunctionFragment;
    "isAuthenticated(address)": FunctionFragment;
    "setControllers(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "authenticate",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "ttl", values: [string]): string;
  encodeFunctionData(
    functionFragment: "controllers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasAuthenticated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthenticated",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllers",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "authenticate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "controllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasAuthenticated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthenticated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllers",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAuthProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAuthProviderInterface;

  functions: {
    authenticate(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "authenticate(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ttl(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ttl(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    controllers(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    "controllers()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    hasAuthenticated(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "hasAuthenticated(address,uint256)"(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isAuthenticated(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAuthenticated(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  authenticate(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "authenticate(address)"(
    addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ttl(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "ttl(address)"(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  controllers(overrides?: CallOverrides): Promise<string[]>;

  "controllers()"(overrides?: CallOverrides): Promise<string[]>;

  hasAuthenticated(
    addr: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasAuthenticated(address,uint256)"(
    addr: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAuthenticated(addr: string, overrides?: CallOverrides): Promise<boolean>;

  "isAuthenticated(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setControllers(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setControllers(address[])"(
    operators: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    authenticate(addr: string, overrides?: CallOverrides): Promise<void>;

    "authenticate(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ttl(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(address)"(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    controllers(overrides?: CallOverrides): Promise<string[]>;

    "controllers()"(overrides?: CallOverrides): Promise<string[]>;

    hasAuthenticated(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasAuthenticated(address,uint256)"(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAuthenticated(addr: string, overrides?: CallOverrides): Promise<boolean>;

    "isAuthenticated(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setControllers(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    authenticate(addr: string, overrides?: Overrides): Promise<BigNumber>;

    "authenticate(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ttl(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(address)"(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    controllers(overrides?: CallOverrides): Promise<BigNumber>;

    "controllers()"(overrides?: CallOverrides): Promise<BigNumber>;

    hasAuthenticated(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasAuthenticated(address,uint256)"(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAuthenticated(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAuthenticated(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authenticate(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "authenticate(address)"(
      addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ttl(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ttl(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controllers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controllers()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasAuthenticated(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasAuthenticated(address,uint256)"(
      addr: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuthenticated(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAuthenticated(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setControllers(
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setControllers(address[])"(
      operators: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
