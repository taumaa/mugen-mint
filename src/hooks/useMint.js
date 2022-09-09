import {TreasuryContract} from "../const.js";
import {useContractFunction} from "@usedapp/core";

const useMint = () => {

    const { send } = useContractFunction(TreasuryContract, 'deposit')

    return {
        deposit: send
    }
}

export default useMint;