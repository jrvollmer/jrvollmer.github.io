import * as React from "react";
import { VStack, HStack, Spacer, Text, Box } from '@chakra-ui/react';

function Home() {
    return (
        <VStack
            align='center'
            spacing={0}
            h='90vh'
        >
            <Box
                h='0.75vh'
                borderRadius='full'
                w='95vw'
                bgColor='#000000'
            />
            <Text as='b' fontSize='72'>About Me</Text>
            <Box
                h='0.375vh'
                borderRadius='full'
                w='60vw'
                bgColor='#000000'
            />
            <HStack w='90vw' pt='7.5vh'>
                <VStack
                    h='50vh'
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    align='center'
                    pt='5px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        Background
                    </Text>
                    <Text pl='25px' pr='25px' /* TODO */ fontSize='30' color='#404040'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus.
                        Neque sodales ut etiam sit amet. At erat pellentesque adipiscing commodo. Semper feugiat nibh
                        sed pulvinar proin gravida hendrerit lectus a. Nunc sed blandit libero volutpat sed cras ornare
                        arcu.
                    </Text>
                </VStack>
                <Spacer/>
                <VStack
                    h='50vh'
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    align='center'
                    pt='5px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        My Skills
                    </Text>
                    <Text pl='25px' pr='25px' /* TODO */ fontSize='30' color='#404040'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus.
                        Neque sodales ut etiam sit amet. At erat pellentesque adipiscing commodo. Semper feugiat nibh
                        sed pulvinar proin gravida hendrerit lectus a. Nunc sed blandit libero volutpat sed cras ornare
                        arcu.
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    );
}

export default Home;
