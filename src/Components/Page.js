import * as React from "react";
import { Link, Flex, Box, Image, Text, HStack, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { useRef } from "react";
import useOnScreen from '../Hooks/useOnScreen';
import useWindowDimensions from "../Hooks/useWindowDimensions";
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import MenuImage from '../Assets/menu.svg';
// TODO import GithubImage from '../Assets/github.png';


function Page() {
    // There will be a reference element to determine when the user is at the top of the screen
    const topRef = useRef();
    // True if at the top of the screen; false otherwise
    const atTop = useOnScreen(topRef);

    // Reference/Boolean for determining when the user is currently on the About section
    const aboutRef = useRef();
    const onAbout = useOnScreen(aboutRef);

    // Reference/Boolean for determining when the user is currently on the Projects section
    const projectsRef = useRef();
    const onProjects = useOnScreen(projectsRef);

    // Get the width of the window
    const { width } = useWindowDimensions();

    return (
        <>
            <HStack
                zIndex={1}
                position='fixed'
                h='75px'
                w='100vw'
                backdropFilter='auto'
                backdropBlur={atTop ? '0px' : '10px'} // TODO Tune the blur
                spacing={0}
            >
                <Box ml='25px' minW='55px' boxSize='55px' borderRadius='full' bg='#e0e0e0'>
                    <Image
                        borderRadius='full'
                        fit='scale-down'
                        src={FaceImage}
                        alt='James Vollmer'
                    />
                </Box>
                <Text as='b' pl='10px' fontSize={{ base: '25px', sm: '26px', md: '30px', lg: '30px', xl: '30px' }}>James Vollmer</Text>
                <Spacer/>
                {
                    (width <= 768) ?
                        <HStack pr={{ base: '25px', sm: '50px' }}>
                            <Text
                                color='#000000'
                                fontSize={{ base: '22px', sm: '24px' }}
                                as='b'
                            >
                                {
                                    onProjects ?
                                        "Projects"
                                        :
                                        onAbout ?
                                            "About"
                                            :
                                            "Home"
                                }
                            </Text>
                            <Menu>
                                <MenuButton h='25px' w='31.25px'>
                                    <Image src={MenuImage} />
                                </MenuButton>
                                <MenuList minW='0' w='150px'>
                                    <MenuItem as='a' href='#home'>Home</MenuItem>
                                    <MenuItem as='a' href='#about'>About</MenuItem>
                                    <MenuItem as='a' href='#projects'>Projects</MenuItem>
                                </MenuList>
                            </Menu>
                        </HStack>
                        :
                        <HStack spacing='50px' pr='50px'>
                            <SectionLink section='Home' currSection={!(onAbout || onProjects)}/>
                            <SectionLink section='About' currSection={onAbout && !onProjects}/>
                            <SectionLink section='Projects' currSection={onProjects}/>
                        </HStack>
                }
            </HStack>
            {/* TODO This looks good, but it shows up behind the cards
                     https://chakra-ui.com/docs/components/transitions
            <ScaleFade in={!atTop}>
                <Box
                    position='absolute'
                    top='10vh'
                    h='5px'
                    borderRadius='full'
                    w='90vw'
                    mx='5vw'
                    bgColor='#000000'
                />
            </ScaleFade>
            */}

            <Flex
                zIndex={1}
                position='fixed'
                bottom='50px'
                h='60px'
                right={{base: '25px', sm: '50px'}}
                w='140px'
                bg='#00000040'
                borderRadius='20px'
                alignItems='center'
                backdropFilter='auto'
                backdropBlur='15px' // TODO Tune or drop the blur
            >
                {/*
                TODO Add functionality or remove
                <Image src={GithubImage} fit='fit' h='40px' ml='25px' />
                <Spacer/>*/}

                <Link href='https://www.linkedin.com/in/james-vollmer' isExternal>
                    <Image src={LinkedinImage} fit='fit' h='37.5px' ml='20px' />
                </Link>
                <Spacer/>
                <Link href='mailto:jrvollmer@wisc.edu' isExternal>
                    <Image src={EmailImage} fit='fit' h='37.5px' mr='20px' />
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
                {/* The top of the scrollable section */}
                <div ref={topRef}/>

                <Home id='home'/>

                <AboutMe id='about' ref={aboutRef}/>

                <Projects id='projects' ref={projectsRef}/>

                {/* TODO Might not hurt to add a formal Contact Me section at the bottom */}
            </Box>
        </>
    );
}

function SectionLink(props) {
    return (
        <Link
            color='#000000'
            fontSize='24'
            href={`#${props.section.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
        >
            <Text
                as='b'
                opacity={props.currSection ? 1 : 0.5}
            >
                {props.section}
            </Text>
        </Link>
    );
}

export default Page;
