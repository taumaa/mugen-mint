export const TreasuryAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_mugen",
                type: "address"
            },
            {
                internalType: "address",
                name: "_treasury",
                type: "address"
            },
            {
                internalType: "address",
                name: "_administrator",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "AdminRemoved",
        type: "error"
    },
    {
        inputs: [],
        name: "CapReached",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidPrice",
        type: "error"
    },
    {
        inputs: [],
        name: "NotCommunicator",
        type: "error"
    },
    {
        inputs: [],
        name: "NotDepositable",
        type: "error"
    },
    {
        inputs: [],
        name: "NotOwner",
        type: "error"
    },
    {
        inputs: [],
        name: "NotUpdated",
        type: "error"
    },
    {
        inputs: [],
        name: "UnderMinDeposit",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_depositor",
                type: "address"
            },
            {
                indexed: true,
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }
        ],
        name: "Deposit",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_priceFreed",
                type: "address"
            }
        ],
        name: "DepositableToken",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "Paused",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        name: "TokenRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "Unpaused",
        type: "event"
    },
    {
        inputs: [],
        name: "Communicator",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "RESERVE_RATIO",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "SCALE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_b",
                type: "uint256"
            }
        ],
        name: "accurateWeights",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_pricefeed",
                type: "address"
            }
        ],
        name: "addTokenInfo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "adminRemoved",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "administrator",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "calculateContinuousMintReturn",
        outputs: [
            {
                internalType: "uint256",
                name: "mintAmount",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_treasury",
                type: "address"
            }
        ],
        name: "changeTreasury",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        name: "checkDepositable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_sourceReserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_sourceReserveWeight",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_targetReserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_targetReserveWeight",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "crossReserveTargetAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Metadata",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "depositCap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }
        ],
        name: "depositableTokens",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_reserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_reserveRatio",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "fundCost",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_reserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_reserveRatio",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "fundSupplyAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "initMaxExpArray",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_reserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_reserveRatio",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "liquidateReserveAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "mugen",
        outputs: [
            {
                internalType: "contract IMugen",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_b",
                type: "uint256"
            }
        ],
        name: "normalizedWeights",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pauseDeposits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_baseN",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_baseD",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_expN",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "_expD",
                type: "uint32"
            }
        ],
        name: "power",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }
        ],
        name: "priceFeeds",
        outputs: [
            {
                internalType: "contract AggregatorPriceFeeds",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pricePerToken",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_reserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_reserveWeight",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "purchaseTargetAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "readSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "receiveMessage",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "removeAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "_token",
                type: "address"
            }
        ],
        name: "removeTokenInfo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "reserveBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "s_totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_a",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_b",
                type: "uint256"
            }
        ],
        name: "safeFactors",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_supply",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_reserveBalance",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "_reserveWeight",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "saleTargetAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newAdmin",
                type: "address"
            }
        ],
        name: "setAdministrator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "setCap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_comms",
                type: "address"
            }
        ],
        name: "setCommunicator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "treasury",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "unpauseDeposits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "valueDeposited",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        stateMutability: "payable",
        type: "receive"
    }
]