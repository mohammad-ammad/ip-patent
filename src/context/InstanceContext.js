import { createContext, useEffect, useState } from "react";
import { ethers } from 'ethers';
import axios from "axios";
import NFTABI from '../utils/NFT.json';
import MARKETPLACEABI from '../utils/MARKETPLACE.json';

const InstanceContext = createContext();


//----CONTRACT LOAD CONTEXT
const InstanceProvider = ({ children }) => {

    //---USESTATES
    const [collectionInstance, setCollectionInstance] = useState([]);
    const [MarketplaceInstance, setMarketplaceInstance] = useState([]);
    const [address, setAddress] = useState("");
    const [token, setToken] = useState("")
    const [count, setCount] = useState(0);

    //---NETWORK RESTRICT
    const networks = {
        polygon: {
            chainId: `0x${Number(80001).toString(16)}`,
            chainName: "Polygon Testnet",
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
        },
    };

    //---USEEFFECT FOR CONTRACT LOAD
    useEffect(() => {
        providerWrapper()
    }, [])

    //---USEEFFECT FOR COUNT CALL
    useEffect(() => {
        address && fileCount()
    }, [token, address])

    //---SIGNER AND PROVIDER WRAPPER
    const providerWrapper = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);

                if (provider.network !== "matic") {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                ...networks["polygon"],
                            },
                        ],
                    });
                }

                const signer = provider.getSigner();

                loadNFT1155(signer)
                loadMarketplace(signer)
            }
            else {
                console.log("Please install metamask..")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---load NFT1155 contract
    const loadNFT1155 = async (signer) => {
        try {
            const contract = new ethers.Contract(process.env.REACT_APP_NFT_CONTRACT, NFTABI, signer);
            setCollectionInstance(contract)
        } catch (error) {
            console.log(error.message)
        }
    }

    //---load MARKETPLACE contract
    const loadMarketplace = async (signer) => {
        try {
            const contract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT, MARKETPLACEABI, signer);
            setMarketplaceInstance(contract)
        } catch (error) {
            console.log(error.message)
        }
    }

    //---CONNECT METAMASK WALLET AND STORE ADDRESS
    const connect = async () => {
        try {
            const result = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAddress(result[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    //---REGISTER USER
    const registerUser = (data) => {
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
                ...data,
                wallet: address
            }).then(resp => {
                console.log(resp)
                localStorage.setItem("tokenId", resp.data.token);
                setToken(resp['data']['token'])
            }).catch(err => console.log(err))
        } catch (error) {
            console.log(error.message)
        }
    }

    //---LOGIN USER 
    const loginUser = (data) => {
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
                ...data,
                wallet: address
            }).then(resp => {
                console.log(resp)
                localStorage.setItem("tokenId", resp.data.token);
                setToken(resp['data']['token'])
            })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error.message)
        }
    }

    //---CREATE JSON FILE IN SERVER
    const createFile = (data) => {
        try {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/form/file/${address}`, {
                ...data
            }).then(resp => {
                console.log(resp)
            })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error.message)
        }
    }

    //---JSON FILE COUNT 
    const fileCount = () => {
        try {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/form/count/${address}`)
                .then(resp => {
                    console.log(resp)
                    setCount(resp['data']['counter'] + 1)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error.message)
        }
    }

    //---MINT FUNC 
    const mintFunc = async (metadata,qty) => {
        try {
            console.log(metadata,qty)
            // const resp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/create`,{
                
            // })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <InstanceContext.Provider value={{ collectionInstance, MarketplaceInstance, address, connect, registerUser, token, setToken, loginUser, createFile, count, mintFunc }}>
            {children}
        </InstanceContext.Provider>
    );
}

export { InstanceContext, InstanceProvider }