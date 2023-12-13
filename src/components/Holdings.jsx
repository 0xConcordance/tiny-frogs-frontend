import { useAccount } from "wagmi"
import { HoldingsComp } from "./HoldingsComp"

export const Holdings = () => {

    const { address, isConnecting, isDisconnected } = useAccount()
    console.log("addresssss")

    if(address != undefined) {
        return(
            <HoldingsComp />
        ) 
    } else {
        return(<p></p>)
    }}