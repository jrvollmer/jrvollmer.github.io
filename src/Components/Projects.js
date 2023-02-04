import * as React from "react";
import { Link, VStack, HStack, Spacer, Text, Box, Wrap, SlideFade, Button} from '@chakra-ui/react';



function Projects(props) {
    const fontSize={ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' };

    //const [fooBool, setFooBool] = React.useState(false);

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

            {/* TODO Move this to the location where I want to switch to being in the "Projects" section */}
            <div ref={props.prjRef}/>

            {/*<Button bgColor='#808080' w='50vw' h='10vh' onClick={() => setFooBool(!fooBool)}>

            </Button>
            <Box>
                <SlideFade in={fooBool}>
                    <Box marginTop='100px' w='90vw' h='10vh' bgColor='#000000'  />
                </SlideFade>
            </Box>*/}


        </VStack>

    );
}

export default React.forwardRef((props, ref) =>
    <Projects prjRef={ref} {...props}/>
);
