import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance";


export const useBalance = () => {
    // const value = useRecoilValue(balanceAtom);
    const value = 23;
    return value;
}   