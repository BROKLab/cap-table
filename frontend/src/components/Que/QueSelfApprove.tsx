import { ethers } from 'ethers';
import { Box, Button, Grid, Text, TextInput } from 'grommet';
import { Checkmark, Clear } from 'grommet-icons';
import React, { useContext, useEffect, useState } from 'react';
import { SymfoniContext } from '../../hardhat/ForvaltContext';
import { CapTableQue } from '../../hardhat/typechain/CapTableQue';

interface Props {
    capTableQue: CapTableQue,
    capTableAddress: string,
}

export const QueSelfApprove: React.FC<Props> = ({ ...props }) => {
    const { address: currentAddress } = useContext(SymfoniContext)
    const { init } = useContext(SymfoniContext)
    const [reason, setReason] = useState("");
    // TODO useContext(SymfoniContext)


    const handleSelfApproval = async () => {

    }

    return (
        <Box>
            <Text>Du kan godkjenne selskapet selv ved å bekrefte identitet til Brreg</Text>
            <Button label="Start godkjenning" size="small" onClick={() => handleSelfApproval()}></Button>

        </Box>
    )
}