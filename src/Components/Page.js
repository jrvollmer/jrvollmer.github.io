import * as React from "react";
import { useRef } from "react";
import { VStack, Flex, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import Home from './Home';
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import GithubImage from '../Assets/github.png';
import useOnScreen from './useOnScreen';

function Page() {
    // There will be a reference element to determine when the user is at the top of the screen
    const ref = useRef();
    // True if at the top of the screen; false otherwise
    const atTop = useOnScreen(ref);

    return (
        <>
            <HStack
                position='absolute'
                h='10vh'
                w='100vw'
                backdropFilter='auto'
                backdropBlur={atTop ? '0px' : '10px'} // TODO Tune the blur
            >
                <Box ml='25px' /* TODO */ boxSize='7.5vh' borderRadius='full' bg='#e0e0e0'>
                    <Image
                        borderRadius='full'
                        fit='scale-down'
                        src={FaceImage}
                        alt='James Vollmer'
                    />
                </Box>
                <Text as='b' pl='10px' /* TODO */ fontSize='48'>James Vollmer</Text>
                <Spacer/>
                {/* TODO Add functionality */}
                <Text as='b' pr='50px' /* TODO */ color='#000000' opacity={1} fontSize='28'><Text as='u'>Home</Text></Text>
                <Text as='b' pr='50px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>About</Text>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>Projects</Text>
            </HStack>
            {/* TODO This looks too unnatural when it just pops into existence
                atTop ?
                    <></>
                    :
                    <Box
                        position='absolute'
                        top='10vh'
                        h='5px'
                        borderRadius='full'
                        w='90vw'
                        mx='5vw'
                        bgColor='#000000'
                    />
            */}

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
                backdropFilter='auto'
                backdropBlur='15px' // TODO Tune or drop the blur
            >
                {/* TODO Add functionality */}
                <Image src={GithubImage} fit='fit' h='40px' ml='25px' />
                <Spacer/>
                <Image src={LinkedinImage} fit='fit' h='40px' />
                <Spacer/>
                <Image src={EmailImage} fit='fit' h='40px' mr='25px' />
            </Flex>

            <Box
                overflowY='scroll'
                maxH='100vh'
                bgColor='#ffffff'
                css={{
                    "&::-webkit-scrollbar": {
                        width: "0px"
                    }
                }}
            >
                {/* TODO The top of the scrollable section */}
                <div ref={ref}/>

                <Home/>


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
                    <Spacer/>
                    <Box h={1}></Box>
                </VStack>
            </Box>
        </>
    );
}

export default Page;
