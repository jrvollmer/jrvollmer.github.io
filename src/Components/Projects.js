import * as React from "react";
import { Link, VStack, HStack, Flex, Spacer, Text, Image, Box, Container, Wrap, SlideFade, Button} from '@chakra-ui/react';
import GitHubImage from '../Assets/github.png';
import BackgroundImage from '../Assets/background.svg';


function Projects(props) {
    const fontSize={ base: '14px', sm: '14px', md: '14px', lg: '16px', xl: '18px' };

    //const [fooBool, setFooBool] = React.useState(false);

    return (
        <VStack
            id={props.id}
            mt='-75px'
            pt='75px'
            align='center'
            spacing={0}
            minH='100vh' // TODO Might want to change to max-content if content is larger than 100vh
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

            <VStack pt='15px' spacing='15px'>
                <Project
                    image={BackgroundImage}
                    imageH='100%'
                    fontSize={fontSize}
                    name='Solar Car 1 Engineering Dashboard'
                    description='The Solar Car 1 Engineering Dashboard is a React App with a Node.js backend designed to
                             run locally on the laptops of the engineers building Solar Car 1.'
                    ghNames={['chase-car-dashboard']}
                    ghLinks={['https://github.com/badgerloop-software/chase-car-dashboard']}
                    // TODO Add Figma links (map the same as GitHub links)
                />
                <Project
                    image={BackgroundImage}
                    imageH='100%'
                    fontSize={fontSize}
                    name='Solar Car 1 Driver Dashboard'
                    description='Description of the driver dashboard'
                    ghNames={['sc1-driver-io']}
                    ghLinks={['https://github.com/badgerloop-software/sc1-driver-io']}
                    // TODO Add Figma links (map the same as GitHub links)
                />
                <Project
                    image={BackgroundImage}
                    imageH='100%'
                    fontSize={fontSize}
                    name='Battery Cell Testing Application and Analysis'
                    description='Description of the battery testing app.'
                    ghNames={['battery-testing-app', 'battery-testing-analysis']}
                    ghLinks={['https://github.com/badgerloop-software/battery-testing-app', 'https://github.com/badgerloop-software/battery-testing-analysis']}
                />
                <Project
                    image={BackgroundImage}
                    imageH='100%'
                    fontSize={fontSize}
                    name='Recipe Finder App'
                    description='Description of the recipe finder app, the server, and the cloud database used.'
                    ghNames={['recipe-finder-app', 'recipe-finder-server']}
                    ghLinks={['https://github.com/jrvollmer/recipe-finder-app','https://github.com/jrvollmer/recipe-finder-server']}
                    // TODO Add Figma links (map the same as GitHub links)
                />
                <Project
                    image={BackgroundImage}
                    imageH='100%'
                    fontSize={fontSize}
                    name='This Website'
                    description='Description of this website'
                    ghNames={['jrvollmer.github.io']}
                    ghLinks={['https://github.com/jrvollmer/jrvollmer.github.io']}
                    // TODO Add Figma links (map the same as GitHub links)
                />
            </VStack>


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

function Project(props) {
    return (
        <Flex
            w='95vw'
            h='25vh'
            gap='20px'
        >
            <Image src={props.image} fit='contain' maxH={props.imageH}/>
            {/* TODO Remove
            <ProjectVisual
                image={props.image}
                imageH={props.imageH}
                fontSize={props.fontSize}
            />
            */}
            <ProjectDescription
                fontSize={props.fontSize}
                name={props.name}
                description={props.description}
                ghNames={props.ghNames}
                ghLinks={props.ghLinks}
            />
        </Flex>
    );
}

/* TODO Remove
function ProjectVisual(props) {
    return (
        <VStack
            align='center'
            spacing='5px'
        >
            <Image src={props.image} fit='contain' m={0} sx={{ maxHeight: `calc(${props.imageH} - 40px)`}} />

        </VStack>
    );
}*/

function ProjectDescription(props) {
    return (
        <VStack
            flex={1}
            bgColor='#f8f8f8'
            borderRadius='10px'
            pt='5px'
            pb='20px'
            px='20px'
        >
            <Text as='b' fontSize='24px' color='#202020'>
                {props.name}
            </Text>
            <Text
                w='100%'
                textAlign='left'
                fontSize={props.fontSize}
                color='#404040'
            >
                {props.description}
            </Text>
            <Spacer/>
            <Flex w='100%' gap='20px'>
                {
                    props.ghNames.map((val, idx) => {
                        return (
                            <Link href={props.ghLinks[idx]} isExternal>
                                <HStack spacing='5px' h='35px'>
                                    <Image src={GitHubImage} boxSize='35px'/>
                                    <Text
                                        fontSize={props.fontSize}
                                        textAlign='center'
                                        color='#24292f'
                                        bgColor='#eff1f3'
                                        borderRadius='7.5px'
                                        px='10px'
                                    >
                                        {val}
                                    </Text>
                                </HStack>
                            </Link>
                        );
                    })
                }
            </Flex>
        </VStack>
    );
}

export default React.forwardRef((props, ref) =>
    <Projects prjRef={ref} {...props}/>
);