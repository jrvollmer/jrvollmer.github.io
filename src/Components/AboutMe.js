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
            <HStack w='90vw' h='max-content' pt='7.5vh' align='top'>
                <VStack
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    align='center'
                    pt='5px'
                    pb='20px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        Background
                    </Text>
                    <Text
                        pl='25px'
                        pr='25px'
                        /* TODO */ fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' }}
                        color='#404040'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.
                        At ultrices mi tempus imperdiet nulla malesuada pellentesque. Gravida arcu ac tortor dignissim
                        convallis aenean et. Vulputate mi sit amet mauris commodo quis imperdiet. Quam elementum
                        pulvinar etiam non quam lacus suspendisse faucibus interdum. Dolor morbi non arcu risus quis.
                        Risus ultricies tristique nulla aliquet enim tortor at auctor. Imperdiet sed euismod nisi porta
                        lorem mollis aliquam. Suscipit tellus mauris a diam maecenas sed enim. Enim blandit volutpat
                        maecenas volutpat blandit aliquam etiam erat velit. Etiam dignissim diam quis enim. Leo duis ut
                        diam quam nulla porttitor massa id.
                    </Text>
                </VStack>
                <Spacer/>
                <VStack
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    align='center'
                    pt='5px'
                    pb='20px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        My Skills
                    </Text>
                    <Text
                        pl='25px'
                        pr='25px'
                        /* TODO */ fontSize={{ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' }}
                        color='#404040'
                    >
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
