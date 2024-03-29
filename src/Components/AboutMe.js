import * as React from "react";
import { Link, VStack, HStack, Spacer, Text, Box, Wrap } from '@chakra-ui/react';
import Skill from './Skill';
import useWindowDimensions from "../Hooks/useWindowDimensions";



function AboutMe(props) {
    const fontSize={ base: '14px', sm: '14px', md: '14px', lg: '16px', xl: '18px' };

    // Get the width of the window
    const { width } = useWindowDimensions();

    return (
        <VStack
            id={props.id}
            mt='-75px'
            pt='75px'
            align='center'
            spacing={0}
            minH='100vh'
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
            <div ref={props.abtRef}>
                {
                    (width <= 768) ?
                        <VStack w='90vw' h='max-content' pt='7.5vh' align='center'>
                            <Background fontSize={fontSize}/>
                            <MySkills fontSize={fontSize}/>
                        </VStack>
                        :
                        <HStack w='90vw' h='max-content' pt='7.5vh' align='top'>
                            <Background mb='20px' w='44vw' fontSize={fontSize}/>
                            <Spacer/>
                            <MySkills w='44vw' fontSize={fontSize}/>
                        </HStack>
                }
            </div>
        </VStack>
    );
}

function Background(props) {
    return (
        <VStack
            w={props.w}
            bgColor='#f4f4f4'
            borderRadius='15px'
            align='center'
            pt='5px'
            pb='20px'
            mb={props.mb}
        >
            <Text as='b' fontSize='36' color='#202020'>
                Background
            </Text>
            <Text
                pl='25px'
                pr='25px'
                fontSize={props.fontSize}
                color='#404040'
            >
                I'm a junior studying Computer Engineering and Computer Sciences at the University of Wisconsin-Madison.
                As the Software Senior Engineer in <Link href='https://badgersolarracing.org/' isExternal><u><b>Badger Solar
                Racing</b></u></Link> (a.k.a. TEFKAB - The Engineers Formerly Known As <b>Badgerloop</b>), I am
                responsible for providing technical support and advice to the software and firmware team leads, as well
                as managing our team's GitHub organization. For the past two years, I was the software team lead and was
                responsible for leading the development of all applications used in the car and by the engineers
                creating the car. Check out the <Link href='#projects'><b>Projects</b></Link> section for more info
                about these and my other projects.
                <br/>
                <br/>
                I am looking for software engineering opportunities where I can play an active role and grow. I am
                particularly interested in application development, but I am also open to exploring new areas. If you
                have opportunities like this, please feel free to <Link href='mailto:jrvollmer@wisc.edu' isExternal>send
                me an email</Link> or <Link href='https://www.linkedin.com/in/james-vollmer' isExternal>connect with me
                on Linkedin</Link> using the links in the bottom-right corner of the page.
            </Text>
        </VStack>
    );
}

function MySkills(props) {
    return (
        <VStack
            w={props.w}
            pt='5px'
            pb='20px'
        >
            <Text as='b' fontSize='36' color='#202020'>
                My Skills
            </Text>
            <Wrap display='flex' justify='center' py={1} >
                <Skill fontSize={props.fontSize} text='C++' />
                <Skill fontSize={props.fontSize} text='C' />
                <Skill fontSize={props.fontSize} text='JavaScript' />
                <Skill fontSize={props.fontSize} text='Java' />
                <Skill fontSize={props.fontSize} text='Bash' />
                <Skill fontSize={props.fontSize} text='Python' />
                <Skill fontSize={props.fontSize} text='SQL' />

                <Skill fontSize={props.fontSize} text='Qt' />
                <Skill fontSize={props.fontSize} text='React' />
                <Skill fontSize={props.fontSize} text='Node.js' />
                <Skill fontSize={props.fontSize} text='Figma' />
                <Skill fontSize={props.fontSize} text='Git' />

                <Skill fontSize={props.fontSize} text='Project Management' />
                <Skill fontSize={props.fontSize} text='Leadership' />
                <Skill fontSize={props.fontSize} text='Teamwork' />
                <Skill fontSize={props.fontSize} text='Diligence' />
            </Wrap>
        </VStack>
    );
}

export default React.forwardRef((props, ref) =>
    <AboutMe abtRef={ref} {...props}/>
);
