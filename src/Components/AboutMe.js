import * as React from "react";
import { Link, VStack, HStack, Spacer, Text, Box, Wrap, Flex } from '@chakra-ui/react';
import Skill from './Skill';

function Home() {
    const fontSize={ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' };

    return (
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
            <Text as='b' fontSize='48'>About Me</Text>
            <Box
                h='0.375vh'
                borderRadius='full'
                w='30vw'
                bgColor='#000000'
            />
            <HStack w='90vw' h='max-content' pt='7.5vh' align='top'>
                <VStack
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    align='center'
                    pt='5px'
                    pb='20px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        Background
                    </Text>
                    <Text
                        pl='25px'
                        pr='25px'
                        /* TODO */ fontSize={fontSize}
                        color='#404040'
                    >
                        I'm a junior studying Computer Engineering and Computer Sciences at the University of Wisconsin-Madison.
                        As the software lead in <Link href='https://badgerloop.org/' isExternal><u>Badgerloop</u></Link>,
                        I am responsible for leading the development of all applications used in the car and by the engineers
                        creating the car. Check out my <b>Projects</b> section for more info about these and my other projects.
                        <br/>
                        <br/>
                        Currently, I'm on co-op at Extreme Engineering Solutions as an Associate Embedded Software Engineer.
                        I am looking for job opportunities in application development where I can contribute and grow.
                        If you have opportunities like this, please feel free to send me an email or connect with me on
                        Linkedin using the links in the bottom-right of the page.
                    </Text>
                </VStack>
                <Spacer/>
                <VStack
                    w='44vw'
                    bgColor='#f4f4f4'
                    borderRadius='15px'
                    pt='5px'
                    pb='20px'
                >
                    <Text as='b' fontSize='36' color='#202020'>
                        My Skills
                    </Text>
                    <Wrap display='flex' justify='center' py={1} >
                        <Skill fontSize={fontSize} text='C++' />
                        <Skill fontSize={fontSize} text='C' />
                        <Skill fontSize={fontSize} text='JavaScript' />
                        <Skill fontSize={fontSize} text='Java' />
                        <Skill fontSize={fontSize} text='Bash' />
                        <Skill fontSize={fontSize} text='Python' />
                        <Skill fontSize={fontSize} text='SQL' />

                        <Skill fontSize={fontSize} text='Qt' />
                        <Skill fontSize={fontSize} text='React' />
                        <Skill fontSize={fontSize} text='Node.js' />
                        <Skill fontSize={fontSize} text='Figma' />
                        <Skill fontSize={fontSize} text='Git' />

                        <Skill fontSize={fontSize} text='Project Management' />
                        <Skill fontSize={fontSize} text='Leadership' />
                        <Skill fontSize={fontSize} text='Teamwork' />
                        <Skill fontSize={fontSize} text='Diligence' />
                    </Wrap>
                </VStack>
            </HStack>
        </VStack>
    );
}

export default Home;