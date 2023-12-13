// this hook returns the seed from an ID

import { ContractAddress } from "../contracts/ContractAddress"
import { ABI } from "../contracts/ContractABI"
import { useContractRead } from 'wagmi'

export const useGetSeed = (id) => {

    const { data, isError, isLoading, error } = useContractRead({
        address: ContractAddress,
        abi: ABI,
        functionName: 'seeds',
        args: [id.toString()],
        watch:true
      })
    
    return data

}