
import { ContractAddress } from "../contracts/ContractAddress"
import { ABI } from "../contracts/ContractABI"
import { useContractWrite } from 'wagmi'
import { Button } from "react95"

export const SoulbindFrogButton = (props) => {

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: ContractAddress,
        abi: ABI,
        functionName: 'soulbindFrog',
        args: [props.id]
      })
    
    return(
        <div>
        <Button onClick={write}>Soulbind: {props.id}</Button>
        <p>{data}</p>
        </div>
    )

}