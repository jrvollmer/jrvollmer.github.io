import * as React from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Flex, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import Home from './Home';
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import GithubImage from '../Assets/github.png';
import useOnScreen from './useOnScreen';

function Page(props) {
    const ref = useRef();
    const isVisible = useOnScreen(ref);


    let y = 0;
    const maxPageHeight = props.pageHeight; // TODO Dynamically determine this
    //console.log(maxPageHeight);


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
                <Text as='b' pr='50px' /* TODO */ color='#000000' opacity={1} fontSize='28'><Text as='u'>Home</Text></Text>
                <Text as='b' pr='50px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>About</Text>
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

                {// TODO Remove
                    isVisible ?
                    <button onClick={()=>{isVisible ? console.log(`Yep, I'm on screen`) : console.log('nope')}}>Tell me</button>
                    :
                    <></>
                }


                <Image src={EmailImage} fit='fit' h='40px' mr='25px' />
            </Flex>

            <Box
                overflowY='scroll'
                maxH='100vh'
                css={{
                    "&::-webkit-scrollbar": {
                        width: "0px"
                    }
                }}
                /* TODO onWheel={ event => {
                    //console.log("Event pageY:",event.pageY);
                    console.log("Event Y:",event.y);
                    console.log("Event offsetY:",event.nativeEvent.wheelDelta);
                    console.log("Event offsetY:",event.deltaY);
                    //console.log("Event screenY:",event.screenY);

                    y += event.deltaY;//nativeEvent.wheelDelta;

                    if(y < 0) y = 0;
                    else if(y > maxPageHeight) y = maxPageHeight;

                    if (event.nativeEvent.deltaY < 0) {
                        console.log('scroll up', y);
                    } else {
                        console.log('scroll down', y);
                    }
                }}*/
            >
                {/* TODO The top of the scrollable section */}
                <div ref={ref}/>

                <Home/>

                <Box h='320px' bg='#ff0000'></Box>
                <Box h='320px' bg='#00ff00'></Box>
                <Box h='321px' bg='#0000ff'></Box>
            </Box>
        </>
    );
}

export default Page;
