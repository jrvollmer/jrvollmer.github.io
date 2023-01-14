import * as React from "react";
import { Grid, GridItem, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import FaceImage from '../Assets/face.png';
import BgImage from '../Assets/Background.svg';

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
                <Text as='b' fontFamily='body' /* TODO */ fontSize='48'>James Vollmer</Text>
                <Spacer/>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'><Text as='u'>Home</Text></Text>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>About</Text>
                <Text as='b' pr='100px' /* TODO */ color='#000000' opacity={0.5} fontSize='28'>Projects</Text>
            </HStack>
            <Box
                overflowY='scroll'
                maxH='100vh'
                css={{
                "&::-webkit-scrollbar": {
                    width: "0px"
                }
            }}>
                <Image
                    src={BgImage}
                />
                <Box h={100} bg='#00ff00'></Box>
            </Box>
            {/*<Grid templateRows='1fr 9fr' h='100vh' w='100vw'>
                <GridItem row={0} bg='#ffff0000'></GridItem>
                <GridItem row={1} bg='red.500'></GridItem>
            </Grid>*/}
        </>

    );
}

export default Page;
