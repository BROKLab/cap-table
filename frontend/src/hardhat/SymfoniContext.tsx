/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { providers, Signer, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import Web3Modal, { IProviderOptions } from "web3modal";
import { ERC1400 } from "./typechain/ERC1400";
import { ERC1400__factory } from "./typechain/factories/ERC1400__factory";
import CapTableQueDeployment from "./deployments/brreg/CapTableQue.json";
import { CapTableQue } from "./typechain/CapTableQue";
import { CapTableQue__factory } from "./typechain/factories/CapTableQue__factory";
import CapTableRegistryDeployment from "./deployments/brreg/CapTableRegistry.json";
import { CapTableRegistry } from "./typechain/CapTableRegistry";
import { CapTableRegistry__factory } from "./typechain/factories/CapTableRegistry__factory";

const emptyContract = {
    instance: undefined,
    factory: undefined
};
const defaultProvider: providers.Provider | undefined = undefined;
export const ProviderContext = React.createContext<[providers.Provider | undefined, React.Dispatch<React.SetStateAction<providers.Provider | undefined>>]>([defaultProvider, () => { }]);
const defaultCurrentAddress: string = "";
export const CurrentAddressContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>([defaultCurrentAddress, () => { }]);
const defaultSigner: Signer | undefined = undefined;
export const SignerContext = React.createContext<[Signer | undefined, React.Dispatch<React.SetStateAction<Signer | undefined>>]>([defaultSigner, () => { }]);
const defaultSymfoniContext: SymfoniContextInterface = {
    currentHardhatProvider: "",
    init: () => { throw Error("Symfoni context not initialized") },
    loading: false,
    messages: [],
    providers: []
};
export const SymfoniContext = React.createContext<SymfoniContextInterface>(defaultSymfoniContext);
export const ERC1400Context = React.createContext<SymfoniERC1400>(emptyContract);
export const CapTableQueContext = React.createContext<SymfoniCapTableQue>(emptyContract);
export const CapTableRegistryContext = React.createContext<SymfoniCapTableRegistry>(emptyContract);

export interface SymfoniContextInterface {
    init: (provider?: string) => void;
    loading: boolean;
    messages: string[];
    currentHardhatProvider: string;
    providers: string[];
}

export interface SymfoniProps {
    autoInit?: boolean;
    showLoading?: boolean;
    loadingComponent?: React.ReactNode;
}

export interface SymfoniERC1400 {
    instance?: ERC1400;
    factory?: ERC1400__factory;
}

export interface SymfoniCapTableQue {
    instance?: CapTableQue;
    factory?: CapTableQue__factory;
}

export interface SymfoniCapTableRegistry {
    instance?: CapTableRegistry;
    factory?: CapTableRegistry__factory;
}

export const Symfoni: React.FC<SymfoniProps> = ({
    showLoading = true,
    autoInit = true,
    ...props
}) => {
    const [initializeCounter, setInitializeCounter] = useState(0);
    const [currentHardhatProvider, setCurrentHardhatProvider] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [/* providerName */, setProviderName] = useState<string>();
    const [signer, setSigner] = useState<Signer | undefined>(defaultSigner);
    const [provider, setProvider] = useState<providers.Provider | undefined>(defaultProvider);
    const [currentAddress, setCurrentAddress] = useState<string>(defaultCurrentAddress);
    const [providerPriority, setProviderPriority] = useState<string[]>(["web3modal", "brreg", "hardhat"]);
    const [ERC1400, setERC1400] = useState<SymfoniERC1400>(emptyContract);
    const [CapTableQue, setCapTableQue] = useState<SymfoniCapTableQue>(emptyContract);
    const [CapTableRegistry, setCapTableRegistry] = useState<SymfoniCapTableRegistry>(emptyContract);
    useEffect(() => {
        if (messages.length > 0)
            console.debug(messages.pop())
    }, [messages])

    const getProvider = async (): Promise<{ provider: providers.Provider, hardhatProviderName: string } | undefined> => {
        let hardhatProviderName = "Not set";
        const provider = await providerPriority.reduce(async (maybeProvider: Promise<providers.Provider | undefined>, providerIdentification) => {
            let foundProvider = await maybeProvider
            if (foundProvider) {
                return Promise.resolve(foundProvider)
            }
            else {
                switch (providerIdentification.toLowerCase()) {
                    case "web3modal":
                        try {
                            const provider = await getWeb3ModalProvider()
                            const web3provider = new ethers.providers.Web3Provider(provider);
                            hardhatProviderName = "web3modal";
                            return Promise.resolve(web3provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        }
                    case "hardhat":
                        try {
                            const provider = new ethers.providers.JsonRpcProvider({
                                url: "http://127.0.0.1:8545",
                            });
                            hardhatProviderName = "hardhat";
                            return Promise.resolve(provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        } case "brreg":
                        try {
                            const provider = new ethers.providers.JsonRpcProvider({
                                url: "https://e0qchlost7-e0zi3w4q2r-rpc.de0-aws.kaleido.io",
                                user: "e0cteq8qnh",
                                password: "IY2scS2ywMZkinR5m4sS7GBs7EDgm4Mh9F1uUVkmKFI"
                            });
                            hardhatProviderName = "brreg";
                            return Promise.resolve(provider)
                        } catch (error) {
                            return Promise.resolve(undefined)
                        } default:
                        return Promise.resolve(undefined)
                }
            }
        }, Promise.resolve(undefined)) // end reduce
        return provider ? { provider, hardhatProviderName } : undefined
    };
    const getSigner = async (_provider: providers.Provider, hardhatProviderName: string): Promise<Signer | undefined> => {
        switch (_provider.constructor.name) {
            case "Web3Provider":
                const web3provider = _provider as ethers.providers.Web3Provider
                return await web3provider.getSigner()
            case "JsonRpcProvider":
                switch (hardhatProviderName) {
                    case "hardhat":
                        return ethers.Wallet.fromMnemonic("test test test test test test test test test test test junk").connect(_provider)
                    default:
                        return undefined
                }
            default:
                return undefined
        }
    };
    const getWeb3ModalProvider = async (): Promise<any> => {
        const providerOptions: IProviderOptions = {};
        const web3Modal = new Web3Modal({
            // network: "mainnet",
            cacheProvider: true,
            providerOptions, // required
        });
        return await web3Modal.connect();
    };

    useEffect(() => {
        let subscribed = true
        const doAsync = async () => {
            const finish = (text: string) => {
                setLoading(false)
                setMessages(old => [...old, text])
            }
            const finishWithContracts = (text: string) => {
                setERC1400(getERC1400(_provider, _signer))
                setCapTableQue(getCapTableQue(_provider, _signer))
                setCapTableRegistry(getCapTableRegistry(_provider, _signer))
                finish(text)
            }
            if (!autoInit && initializeCounter === 0) return finish("Auto init turned off.")
            setLoading(true)
            setMessages(old => [...old, "Initiating Symfoni React"])
            const providerObject = await getProvider() // getProvider can actually return undefined, see issue https://github.com/microsoft/TypeScript/issues/11094

            if (!subscribed || !providerObject) return finish("No provider or signer.")
            const _provider = providerObject.provider
            const _providerName = _provider.constructor.name;
            setProvider(_provider)
            setProviderName(_providerName)
            setMessages(old => [...old, "Useing " + _providerName + " from " + providerObject.hardhatProviderName])
            setCurrentHardhatProvider(providerObject.hardhatProviderName)
            const _signer = await getSigner(_provider, providerObject.hardhatProviderName);

            if (!subscribed || !_signer) return finishWithContracts("Provider, without signer.")
            setSigner(_signer)
            setMessages(old => [...old, "Useing signer"])
            const address = await _signer.getAddress()

            if (!subscribed || !address) return finishWithContracts("Provider and signer, without address.")
            setCurrentAddress(address)

            return finishWithContracts("Completed Symfoni context initialization.")
        };
        doAsync();
        return () => { subscribed = false }
    }, [initializeCounter])

    const getERC1400 = (_provider: providers.Provider, _signer?: Signer) => {
        let instance = undefined
        const contract: SymfoniERC1400 = {
            instance: instance,
            factory: _signer ? new ERC1400__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getCapTableQue = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = CapTableQueDeployment.receipt.contractAddress
        const instance = _signer ? CapTableQue__factory.connect(contractAddress, _signer) : CapTableQue__factory.connect(contractAddress, _provider)
        const contract: SymfoniCapTableQue = {
            instance: instance,
            factory: _signer ? new CapTableQue__factory(_signer) : undefined,
        }
        return contract
    }
        ;
    const getCapTableRegistry = (_provider: providers.Provider, _signer?: Signer) => {

        const contractAddress = CapTableRegistryDeployment.receipt.contractAddress
        const instance = _signer ? CapTableRegistry__factory.connect(contractAddress, _signer) : CapTableRegistry__factory.connect(contractAddress, _provider)
        const contract: SymfoniCapTableRegistry = {
            instance: instance,
            factory: _signer ? new CapTableRegistry__factory(_signer) : undefined,
        }
        return contract
    }
        ;

    const handleInitProvider = (provider?: string) => {
        console.log("running")
        if (provider) {
            setProviderPriority(old => old.sort((a, b) => {
                return a === provider ? -1 : b === provider ? 1 : 0;
            }))
        }
        setInitializeCounter(initializeCounter + 1)
    }
    return (
        <SymfoniContext.Provider value={{ init: (provider) => handleInitProvider(provider), providers: providerPriority, currentHardhatProvider, loading, messages }}>
            <ProviderContext.Provider value={[provider, setProvider]}>
                <SignerContext.Provider value={[signer, setSigner]}>
                    <CurrentAddressContext.Provider value={[currentAddress, setCurrentAddress]}>
                        <ERC1400Context.Provider value={ERC1400}>
                            <CapTableQueContext.Provider value={CapTableQue}>
                                <CapTableRegistryContext.Provider value={CapTableRegistry}>
                                    {showLoading && loading ?
                                        props.loadingComponent
                                            ? props.loadingComponent
                                            : <div>
                                                {messages.map((msg, i) => (
                                                    <p key={i}>{msg}</p>
                                                ))}
                                            </div>
                                        : props.children
                                    }
                                </CapTableRegistryContext.Provider >
                            </CapTableQueContext.Provider >
                        </ERC1400Context.Provider >
                    </CurrentAddressContext.Provider>
                </SignerContext.Provider>
            </ProviderContext.Provider>
        </SymfoniContext.Provider>
    )

};
