import {useCall} from "@usedapp/core";
import {UsdcContract} from "../const.js";
import {TreasuryAddress} from "../const.js";
import {useEthers} from "@usedapp/core";

const useAllowance = () => {

    const {account} = useEthers();

    const { value, error } = useCall(
        account && {
            contract: UsdcContract,
            method: 'allowance',
            args: [account, TreasuryAddress]
        }) ?? {}
    if(error) {
        console.error(error.message)
        return undefined
    }

    return {
        allowance: value?.[0],
    }
}

export default useAllowance;