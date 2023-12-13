
import { ContractAddress } from "../contracts/ContractAddress"
import { ABI } from "../contracts/ContractABI"
import { useContractWrite } from 'wagmi'
import { Button } from "react95"

export const MorphFrogButton = (props) => {

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: ContractAddress,
        abi: ABI,
        functionName: 'morphFrog',
        args: [props.id]
      })
    
    return(
        <div>
        <Button onClick={write}>Morph: {props.id}</Button>
        </div>
    )

}