import * as React from "react";
import { VStack, Image, Text, Spacer } from '@chakra-ui/react';
import BgImage from '../Assets/background.svg';
import DownArrowImage from '../Assets/down_arrow.svg';

function Home(props) {
    return (
        <VStack
            id={props.id}
            backgroundImage={BgImage}
            // TODO fit='none'
            h='100vh'
            w='100vw'
            flexDirection='column'
            align='center'
            spacing={0}
        >
            <Spacer/>
            <Text as='b' color='#181818' fontSize='48' textAlign='center'>
                HEY! I'M JAMES VOLLMER
            </Text>
            <Text color='#808080' fontSize='24' textAlign='center'>
                Computer Engineering and Computer Sciences
                <br/>
                student at UW-Madison
            </Text>
            <Spacer/>
            <Image
                src={DownArrowImage}
                pb='25px'
                w='25px'
                // TODO Make this clickable and transition to the "About" section
            />
        </VStack>
    );
}

export default Home;
