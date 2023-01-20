import * as React from "react";
import { Link, VStack, HStack, Spacer, Text, Box, Wrap } from '@chakra-ui/react';
import Skill from './Skill';

function Projects(props) {
    const fontSize={ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' };

    return (
        <VStack
            id={props.id}
            mt='-10vh'
            pt='10vh'
            align='center'
            spacing={0}
            h='100vh' // TODO Might want to change to max-content if content is larger than 100vh
        >
            <Box
                h='0.75vh'
                borderRadius='full'
                w='95vw'
                bgColor='#000000'
            />
            <Text as='b' fontSize='48'>Projects</Text>
            <Box
                h='0.375vh'
                borderRadius='full'
                w='30vw'
                bgColor='#000000'
            />
        </VStack>
    );
}

export default Projects;
