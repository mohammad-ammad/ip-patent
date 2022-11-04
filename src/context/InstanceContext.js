import { createContext, useEffect, useState } from "react";
import { ethers } from 'ethers';
import axios from "axios";
import NFTABI from '../utils/NFT.json';
import MARKETPLACEABI from '../utils/MARKETPLACE.json';
import COIN from '../utils/COIN.json';
import { toast } from "react-toastify";

const InstanceContext = createContext();


//----CONTRACT LOAD CONTEXT
const InstanceProvider = ({ children }) => {

    //---USESTATES
    const [collectionInstance, setCollectionInstance] = useState([]);
    const [MarketplaceInstance, setMarketplaceInstance] = useState([]);
    const [CoinInstance, setCoinInstance] = useState([]);
    const [address, setAddress] = useState("");
    const [token, setToken] = useState("")
    const [count, setCount] = useState(0);
    const [unlisted, setUnListed] = useState([]);
    const [listed, setListed] = useState([]);

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
                loadIpCoin(signer)
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

    //---load IP coin
    const loadIpCoin = async (signer) => {
        try {
            const contract = new ethers.Contract(process.env.REACT_APP_COIN_CONTRACT, COIN, signer);
            setCoinInstance(contract)
            console.log(contract)
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
    const mintFunc = async (metadata, qty, id) => {
        try {
            // console.log(metadata,qty,parseInt(id._hex,16))
            const resp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/create`, {
                wallet: address,
                name: metadata.name,
                image_url: metadata.image,
                pdf_url: metadata.pdf,
                quantity: qty,
                tokenId: parseInt(id._hex, 16)
            })

            console.log(resp)
        } catch (error) {
            console.log(error.message)
        }
    }

    //---UNLISTED NFT
    const unListedNFT = async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/collection/unlisted/${address}`);
            setUnListed(resp['data'])
            console.log(resp)
        } catch (error) {
            console.log(error.message)
        }
    }

    //---LIST NFT
    const ListNft = async (id, price, amount, _id) => {
        try {
            if (MarketplaceInstance != "") {
                toast.promise(
                    MarketplaceInstance.list(id, ethers.utils.parseUnits(price.toString(), "ether"), amount).then(resp => {
                        toast.promise(
                            resp.wait().then(res => {
                                axios.put(`${process.env.REACT_APP_BACKEND_URL}/collection/list/${_id}`, { price }).then((data) => {
                                    console.log(data);
                                    unListedNFT()
                                }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                            ,
                            {
                                loading: 'Creating Request Please Wait',
                                success: 'NFT Listed Successfully',
                                error: 'Something Went Wrong',
                            }
                        )
                    }).catch(err => console.log(err))
                    ,
                    {
                        loading: 'Creating Request Please Wait',
                        success: 'Please Wait',
                        error: 'Something Went Wrong',
                    }
                )

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //---GET LISTED NFT
    const ListedNft = async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/collection/listed`);
            setListed(resp['data'])
            console.log(resp)
        } catch (error) {
            console.log(error.message)
        }
    }

    //---BUY NFT
    const buyNft = async (data, quantity) => {
        console.log(data)
        try {
            if (loadIpCoin != "") {
                const allowance = await CoinInstance.allowance(address, process.env.REACT_APP_COIN_CONTRACT);
                if (ethers.utils.formatEther(data.price) > parseInt(allowance._hex, 16)) {
                    const resp = await CoinInstance.approve(process.env.REACT_APP_COIN_CONTRACT, (data.price * 10 ** 18).toString());
                    resp.wait().then(async (res) => {
                        console.log(res)
                        // const sell = await MarketplaceInstance.sell(data.tokenId, quantity);
                        // sell.wait().then(res => {
                        //     console.log(res)
                        //     axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/buy`, {
                        //         wallet: address,
                        //         name: data.name,
                        //         image_url: data.image,
                        //         pdf_url: data.pdf,
                        //         quantity: quantity,
                        //         tokenId: data.tokenId
                        //     }).then(resp => {
                        //         console.log(resp)
                        //     }).catch(err => console.log(err))
                        // }).catch(err => console.log(err))
                    }).catch(err => console.log(err))

                    axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/buy`, {
                            wallet: address,
                            name: data.name,
                            image_url: data.image_url,
                            pdf_url: data.pdf_url,
                            quantity: quantity,
                            tokenId: data.tokenId,
                            id:data._id
                        }).then(resp => {
                            console.log(resp)
                        }).catch(err => console.log(err))
                }
                else {
                    // const _sell = await MarketplaceInstance.sell(data.tokenId, quantity);
                    // _sell.wait().then(res => {
                    //     console.log("sellll")
                    //     console.log(res)
                    //     axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/buy`, {
                    //         wallet: address,
                    //         name: data.name,
                    //         image_url: data.image,
                    //         pdf_url: data.pdf,
                    //         quantity: quantity,
                    //         tokenId: data.tokenId
                    //     }).then(resp => {
                    //         console.log(resp)
                    //     }).catch(err => console.log(err))
                    // }).catch(err => console.log(err))
                    console.log(address,data.name,data.image_url,data.pdf_url,quantity,data.tokenId)

                    axios.post(`${process.env.REACT_APP_BACKEND_URL}/collection/buy`, {
                            wallet: address,
                            name: data.name,
                            image_url: data.image_url,
                            pdf_url: data.pdf_url,
                            quantity: quantity,
                            tokenId: data.tokenId,
                            id:data._id
                        }).then(resp => {
                            console.log(resp)
                        }).catch(err => console.log(err))
                }


            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <InstanceContext.Provider value={{ collectionInstance, MarketplaceInstance, address, connect, registerUser, token, setToken, loginUser, createFile, count, mintFunc, unListedNFT, unlisted, ListNft, listed, ListedNft, buyNft }}>
            {children}
        </InstanceContext.Provider>
    );
}

export { InstanceContext, InstanceProvider }