import * as React from "react";
import { Link, Flex, Box, Image, Text, HStack, Spacer } from '@chakra-ui/react';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { useRef, useState } from "react";
import useOnScreen from '../Hooks/useOnScreen';
import FaceImage from '../Assets/face.png';
import EmailImage from '../Assets/email.png';
import LinkedinImage from '../Assets/linkedin.png';
import GithubImage from '../Assets/github.png';


function Page() {
    // There will be a reference element to determine when the user is at the top of the screen
    const topRef = useRef();
    // True if at the top of the screen; false otherwise
    const atTop = useOnScreen(topRef);

    const aboutRef = useRef();
    const onAbout =  useOnScreen(aboutRef);

    const projectsRef = useRef();
    const onProjects = useOnScreen(projectsRef);

    //const [section, setSection] = useState('home');

    console.log("about:", onAbout, "projects:", onProjects);

    return (
        <>
            <HStack
                zIndex={1}
                position='absolute'
                h='75px'
                w='100vw'
                backdropFilter='auto'
                backdropBlur={atTop ? '0px' : '10px'} // TODO Tune the blur
            >
                <Box ml='25px' /* TODO */ minW='55px' boxSize='55px' borderRadius='full' bg='#e0e0e0'>
                    <Image
                        borderRadius='full'
                        fit='scale-down'
                        src={FaceImage}
                        alt='James Vollmer'
                    />
                </Box>
                <Text as='b' pl='10px' fontSize={{ base: '26px', sm: '28px', md: '28px', lg: '30px', xl: '30px' }}>James Vollmer</Text>
                <Spacer/>
                <Link
                    pr='50px' /* TODO */
                    color='#000000'
                    fontSize='24'
                    href='#home'
                    style={{ textDecoration: 'none' }}
                    //onClick={() => setSection('home')}
                >
                    <Text
                        as='b'
                        opacity={!(onAbout || onProjects) ? 1 : 0.5}
                    >
                        Home
                    </Text>
                </Link>
                <Link
                    pr='50px' /* TODO */
                    color='#000000'
                    fontSize='24'
                    href='#about'
                    style={{ textDecoration: 'none' }}
                    //onClick={() => setSection('about')}
                >
                    <Text
                        as='b'
                        opacity={(onAbout && !onProjects) ? 1 : 0.5}
                    >
                        About
                    </Text>
                </Link>
                <Link
                    pr='50px' /* TODO */
                    color='#000000'
                    fontSize='24'
                    href='#projects'
                    style={{ textDecoration: 'none' }}
                    //onClick={() => setSection('projects')}
                >
                    <Text
                        as='b'
                        opacity={onProjects ? 1 : 0.5}
                    >
                        Projects
                    </Text>
                </Link>
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
                {/* The top of the scrollable section */}
                <div ref={topRef}/>

                <Home id='home'/>

                <AboutMe id='about' ref={aboutRef}/>

                <Projects id='projects' ref={projectsRef}/>
            </Box>
        </>
    );
}

export default Page;
