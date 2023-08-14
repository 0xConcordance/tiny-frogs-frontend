import { Window, WindowHeader } from "react95"
import { useGetAllHoldingById } from "../hooks/useGetAllHoldingsById"
import { useAccount } from "wagmi"
import { ReturnImageById } from "./ReturnImageById"

export const Holdings = () => {

    const { address, isConnecting, isDisconnected } = useAccount()

    const holdings = useGetAllHoldingById(address)

    const selectToken = (holding) => {
        console.log("holding")
    }

    if (holdings == undefined) {console.log('loading')} else {
    return(
        
        <Window className="holdings-main">
            <WindowHeader>Tiny_based_frogs.exe</WindowHeader>
            <div className="row">
 
                {holdings.map(
                holding => (
                    <div onClick={selectToken} className="col-sm-3">
                        <ReturnImageById className='image' id={Number(holding)} />
                    </div>
                    )
                )}



            </div>
        </Window>
    )
}}