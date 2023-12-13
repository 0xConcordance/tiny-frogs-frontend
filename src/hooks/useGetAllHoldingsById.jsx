// return all the user holdings (ids of the tokens)

import { ContractAddress } from "../contracts/ContractAddress"
import { ABI } from "../contracts/ContractABI"
import { useContractRead } from 'wagmi'

// simply call tokensOfOwner function

export const useGetAllHoldingById = (address) => {

    const { data, isError, isLoading, error } = useContractRead({
        address: ContractAddress,
        abi: ABI,
        functionName: 'tokensOfOwner',
        args: [address],
        watch:true
      })

    return data

}