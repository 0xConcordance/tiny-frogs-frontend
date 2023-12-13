import { Button, Window, WindowHeader } from "react95"
import { useGetAllHoldingById } from "../hooks/useGetAllHoldingsById"
import { useAccount } from "wagmi"
import { ReturnImageById } from "./ReturnImageById"
import { useState } from "react"

import { MorphFrogButton, useMorphFrog } from "../hooks/useMorphFrog"
import { SoulbindFrogButton } from "./SoulbindFrog"
import { HoldingsComp } from "./HoldingsComp"

export const Holdings = () => {

    const { address, isConnecting, isDisconnected } = useAccount()

    if(address != undefined) {
        return(
            <HoldingsComp />
        ) 
    } else {
        return(<p></p>)
    }}