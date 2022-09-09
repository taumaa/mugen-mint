import {useState, useEffect} from "react";
import {useEthers, shortenAddress, useTokenBalance, useTokenAllowance} from "@usedapp/core";
import useAllowance from "./hooks/useAllowance.js";
import useAllow from "./hooks/useAllow.js";
import useMint from "./hooks/useMint.js";
import useMugenBalance from "./hooks/useMugenBalance.js";
import {BigNumber, utils} from "ethers";
import {TreasuryAddress} from "./const.js";
import {MugenAddress} from "./const.js";
import {UsdcAddress} from "./const.js";
import './App.css'


function App() {

    const {activateBrowserWallet, account, deactivate} = useEthers()
    const {allowance} = useAllowance()
    const [readableAllowance, setReadableAllowance] = useState(0)
    const [allowInput, setAllowInput] = useState(0)
    const [mintInput, setMintInput] = useState(0)

    useEffect(() => {
        if (allowance) {
            setReadableAllowance(allowance / 10 ** 6)
        }
    }, [allowance])


    const {increaseAllowance} = useAllow()
    const {deposit} = useMint()

    const handleAllow = async () => {
        return increaseAllowance(
            TreasuryAddress,
            utils.parseUnits(allowInput.toString(), 6),
        )
    }

    const handleMint = async () => {
        return deposit(
            UsdcAddress,
            utils.parseUnits(mintInput.toString(), 6),
        )
    }



    return (
        <>
        <h1 className="text-3xl font-medium mb-12">
            Mugen Mint UI
        </h1>
        <div className="text-xl flex flex-col items-center justify-center space-y-6">

            <div>
              {!!account && (
                  <button
                      className="bg-gray-900 text-white my-2 font-medium p-4 rounded-lg"
                      onClick={deactivate} disabled={true}>
                    {shortenAddress(account)}
                  </button>
              )}
              {!account && (
                  <button
                      className="bg-gray-900 text-white my-2 font-medium px-4 py-2 rounded-lg"
                      onClick={activateBrowserWallet}>
                    Connect with Metamask
                  </button>
              )}
            </div>
            <div className="flex flex-col items-center">
                <span className="text-sm mb-2">First, enter the amount of USDC you want to deposit and click on allow to allow the treasury contract to spend your USDC</span>
                <input
                    type="number"
                    className="bg-gray-100 p-4 rounded-lg shadow text-sm"
                    placeholder="USDC Amount to Allow"
                    onChange={(e) => setAllowInput(parseFloat(e.target.value))}/>
                <button
                    onClick={() => handleAllow()}
                    className="bg-green-600 text-white my-2 font-medium px-4 py-2 text-sm rounded-lg"
                >
                    Allow
                </button>
            </div>

            <div className="flex flex-col items-center">
                <span className="text-sm mb-2">Then, enter the same amount of USDC and click on deposit</span>
                <span className="text-sm font-bold mb-2">
                    Current Allowance: {readableAllowance} $USDC
                </span>
                <input
                    type="number"
                    className="bg-gray-100 p-4 rounded-lg shadow text-sm"
                    onChange={(e) => setMintInput(parseFloat(e.target.value))}
                    placeholder="Deposit (Min 50 USDC)"
                />
                <button
                    onClick={() => handleMint()}
                    className="bg-green-600 text-white my-2 font-medium px-4 py-2 text-sm rounded-lg"
                >
                    Deposit (mint)
                </button>
            </div>
        </div>
        </>
    )
}

export default App
