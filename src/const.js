import {TreasuryAbi} from "./abi/treasury.js";
import {UsdcAbi} from "./abi/usdc.js";
import {MugenAbi} from "./abi/mugen.js";
import {Contract} from "@ethersproject/contracts";

export const TreasuryAddress = "0xf7bE8476AE27d27eBc236e33020150B23a86F3Dd";
export const UsdcAddress = "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8";
export const MugenAddress = "0xFc77b86F3ADe71793E1EEc1E7944DB074922856e";

export const TreasuryContract = new Contract(TreasuryAddress, TreasuryAbi);
export const UsdcContract = new Contract(UsdcAddress, UsdcAbi);
export const MugenContract = new Contract(MugenAddress, MugenAbi);

