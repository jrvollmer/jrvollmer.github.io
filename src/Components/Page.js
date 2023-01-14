import * as React from "react";
import { Flex, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import Home from './Home';
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import GithubImage from '../Assets/github.png';

function Page() {
    return (
        <>
            <HStack position='absolute' h='10vh' w='100vw'>
                <Box ml='15px' /* TODO */ boxSize='7.5vh' borderRadius='full' bg='#e0e0e0'>
                    <Image
                        borderRadius='full'
                        fit='scale-down'
                        src={FaceImage}
                        alt='James Vollmer'
                    />
                </Box>
                <Text as='b' /* TODO */ fontSize='48'>James Vollmer</Text>
                <Spacer/>
                {/* TODO Change Texts below to a Breadcrumb */}
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={1} fontSize='28'><Text as='u'>Home</Text></Text>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>About</Text>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>Projects</Text>
            </HStack>

            <Flex
                position='absolute'
                // TODO values for the following:
                bottom='25px'
                h='75px'
                right='50px'
                w='250px'
                bg='#00000040'
                borderRadius='25px'
                alignItems='center'
            >
                <Image src={GithubImage} fit='fit' h='40px' ml='25px' />
                <Spacer/>
                <Image src={LinkedinImage} fit='fit' h='40px' />
                <Spacer/>
                <Image src={EmailImage} fit='fit' h='40px' mr='25px' />
            </Flex>

            <Box
                overflowY='scroll'
                maxH='100vh'
                css={{
                "&::-webkit-scrollbar": {
                    width: "0px"
                }
            }}>
                <Home/>

                <Box h={100} bg='#00ff00'></Box>
            </Box>
        </>
    );
}

export default Page;
