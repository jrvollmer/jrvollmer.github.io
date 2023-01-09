import * as React from "react";
import { Grid, GridItem, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import FaceImage from '../Assets/face.png';

function Page() {
    return (
        <Grid templateRows='0.75fr 9.25fr' h='100vh' w='100vw'>
            <GridItem row={0} bg='blue.500'>
                <HStack h='100%'>
                    <Box ml='10px' boxSize='7vh' borderRadius='full' bg='#e0e0e0'>
                        <Image
                            borderRadius='full'
                            fit='scale-down'
                            src={FaceImage}
                            alt='James Vollmer'
                        />
                    </Box>
                    <Text as='b' fontSize='2.5vh'>James Vollmer</Text>
                    <Spacer/>
                    <Text as='b' color='#ff0000' fontSize='25px'>INSERT SOMETHING HERE</Text>
                </HStack>
            </GridItem>
            <GridItem row={1} bg='red.500'></GridItem>
        </Grid>
    );
}

export default Page;
