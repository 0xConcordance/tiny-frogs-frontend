import { Button, Window, WindowHeader } from "react95"
import { useGetAllHoldingById } from "../hooks/useGetAllHoldingsById"
import { useAccount } from "wagmi"
import { ReturnImageById } from "./ReturnImageById"
import { useState } from "react"

import { MorphFrogButton, useMorphFrog } from "../hooks/useMorphFrog"
import { SoulbindFrogButton } from "./SoulbindFrog"

export const HoldingsComp = () => {

    const { address, isConnecting, isDisconnected } = useAccount()

    const holdings = useGetAllHoldingById(address.toString())
    const [selectedFrog, setSelectedFrog] = useState(0)

    const selectToken = (holding) => {

        // check if the frog is already selected
        if(holding == selectedFrog) {
            // deselect frog
            setSelectedFrog(0)
            console.log("deselect")
        } else {

        console.log(holding)
        setSelectedFrog(holding)
    }}

    if (holdings == undefined) {
        return(
            <p>Loading</p>
        )
    } 
    else {

        return( 
        <Window className="holdings-main">
            <WindowHeader>Tiny_based_frogs.exe</WindowHeader>
            <div className="row">
 
                {holdings.map(
                holding => (    
                    
                    <div onClick={() => selectToken(Number(holding))} className="col-sm-3">
                        <ReturnImageById className='image' id={Number(holding)} />
                    </div>

                    )
                )}
            
            <MorphFrogButton className="leftButton" id={selectedFrog.toString()} />
            <SoulbindFrogButton className="leftButton" id={selectedFrog.toString()} />

            </div>
        </Window>
    )
}}