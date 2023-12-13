import { useAccount } from "wagmi"
import { HoldingsComp } from "./HoldingsComp"

export const Holdings = () => {

    const { address, isConnecting, isDisconnected, isConnected } = useAccount()
    console.log("addresssss")

    return(
        <div>
            {isConnected ? (
                <HoldingsComp />
            ) : (
                <></>
            )}
        </div>
    )    

}