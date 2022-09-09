import {useCall} from "@usedapp/core";
import {MugenContract} from "../const.js";
import {useEthers} from "@usedapp/core";

const useMugenBalance = () => {

    const {account} = useEthers();

    const { value, error } = useCall(
        account && {
            contract: MugenContract,
            method: 'balanceOf',
            args: [account]
        }) ?? {}
    if(error) {
        console.error(error.message)
        return undefined
    }

    console.log(value)
    return {
        balance: value?.[0],
    }
}

export default useMugenBalance;