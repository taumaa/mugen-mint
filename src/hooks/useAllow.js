import {UsdcContract} from "../const.js";
import {useContractFunction} from "@usedapp/core";

const useAllow = () => {

    const { send } = useContractFunction(UsdcContract, 'approve')

    return {
        increaseAllowance: send
    }
}

export default useAllow;