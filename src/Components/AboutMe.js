import * as React from "react";
import { Link, VStack, HStack, Spacer, Text, Box, Wrap } from '@chakra-ui/react';
import Skill from './Skill';

function AboutMe(props) {
    const fontSize={ base: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' };

    return (
        <VStack
            id={props.id}
            mt='-10vh'
            pt='10vh'
            align='center'
            spacing={0}
            h='100vh'
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
            {/* TODO Make this a VStack instead of HStack if the screen gets too narrow. Then, remove the lowest fontSize decrement */}
            {/* TODO Use Show/Hide with breakpoints for this: https://chakra-ui.com/docs/components/show-hide */}
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
                        fontSize={fontSize}
                        color='#404040'
                    >
                        I'm a junior studying Computer Engineering and Computer Sciences at the University of Wisconsin-Madison.
                        As the software lead in <Link href='https://badgerloop.org/' isExternal><u>Badgerloop</u></Link>,
                        I am responsible for leading the development of all applications used in the car and by the engineers
                        creating the car. Check out the <b>Projects</b> section for more info about these and my other projects.
                        <br/>
                        <br/>
                        I am looking for job opportunities in application development where I can play an active role and grow.
                        If you have opportunities like this, please feel free to send me an email or connect with me on
                        Linkedin using the links in the bottom-right of the page.
                    </Text>
                </VStack>
                <Spacer/>
                <VStack
                    w='44vw'
                    //bgColor='#f4f4f4'

                    //borderRadius='15px'
                    //borderColor='#f4f4f4'
                    //borderWidth={10}
                    pt='5px'
                    pb='20px'
                >
                    <Text as='b' /*bgColor='#f4f4f4' minW='max-content' w='20%' borderRadius='15px' textAlign='center'*/ /* TODO roundedTop='5px'*/ fontSize='36' color='#202020'>
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

export default AboutMe;
