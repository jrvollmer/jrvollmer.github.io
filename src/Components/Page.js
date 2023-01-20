import * as React from "react";
import { Link, Flex, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import Home from './Home';
import AboutMe from './AboutMe';
import { useRef } from "react";
import useOnScreen from '../Hooks/useOnScreen';
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import GithubImage from '../Assets/github.png';


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
                zIndex={1}
                position='absolute'
                // TODO values for the following:
                bottom='25px'
                h='75px'
                right='75px'
                w='180px'
                bg='#00000040'
                borderRadius='25px'
                alignItems='center'
                backdropFilter='auto'
                backdropBlur='15px' // TODO Tune or drop the blur
            >
                {/*
                TODO Add functionality or remove
                <Image src={GithubImage} fit='fit' h='40px' ml='25px' />
                <Spacer/>*/}

                <Link href='https://www.linkedin.com/in/james-vollmer' isExternal>
                    <Image src={LinkedinImage} fit='fit' h='40px' ml='25px' />
                </Link>
                <Spacer/>
                <Link href='mailto:jrvollmer@wisc.edu' isExternal>
                    <Image src={EmailImage} fit='fit' h='40px' mr='25px' />
                </Link>
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

                <AboutMe/>
            </Box>
        </>
    );
}

export default Page;
