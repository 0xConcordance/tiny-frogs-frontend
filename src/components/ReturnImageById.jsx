// we pass in ID and it returns the corrosponding image/svg


// call the 'seed' function to get the seed for the nft
// call the 'getSVG' with the seed to get the svg back

import { useGetSeed } from "../hooks/useGetSeed"
import { ContractAddress } from "../contracts/ContractAddress"
import { ABI } from "../contracts/ContractABI"
import { useContractRead } from 'wagmi'

export const ReturnImageById = (props) => {

    let seed = useGetSeed(props.id).toString()

    const { data, isError, isLoading, error } = useContractRead({
        address: ContractAddress,
        abi: ABI,
        functionName: 'getSVG',
        args: [seed,0]
      })

      // replace the width and height with empty 

    
    if(data == undefined) {
        return(<p>Image not rendered</p>)
    } else {
    let string_image = data.replace('width="512"', 'height="auto"');

    const dataString = { __html: string_image}
          
    return (
        <div className="singleImage">
            <div className="tokenImage" dangerouslySetInnerHTML={dataString} ></div>
            <p className="idfor">id: {props.id}</p>
        </div>
        )
    }
    
    

}