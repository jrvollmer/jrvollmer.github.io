import * as React from "react";
import { Link, VStack, HStack, Flex, Spacer, Text, Image, Box } from '@chakra-ui/react';
import GitHubImage from '../Assets/github.png';
import BackgroundImage from '../Assets/background.svg';
import EngineeringDashboardImage from '../Assets/Projects/engineering_dashboard.jpg';
import DriverDashboardImage from '../Assets/Projects/driver_dashboard.png';
import BatteryTesterImage from '../Assets/Projects/battery_tester_app.png';
import RecipeFinderImage from '../Assets/Projects/recipe_finder.png';
import WebsiteImage from '../Assets/Projects/website.png';
import useWindowDimensions from "../Hooks/useWindowDimensions";


function Projects(props) {
    const fontSize={ base: '14px', sm: '14px', md: '14px', lg: '16px', xl: '18px' };

    // Get the width of the window
    const { width } = useWindowDimensions();

    // Boolean to determine whether the projects should be shown in portrait orientation
    const projectIsPortrait = width <= 768;

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
            <Text as='b' fontSize='48'>Projects</Text>
            <Box
                h='0.375vh'
                borderRadius='full'
                w='30vw'
                bgColor='#000000'
            />
            <VStack ref={props.prjRef} pt='15px' pb='55px' spacing='15px'>
                <Project
                    image={EngineeringDashboardImage}
                    portrait={projectIsPortrait}
                    fontSize={fontSize}
                    name='Solar Car 1 Engineering Dashboard'
                    description='The Solar Car 1 Engineering Dashboard is a React App with a Node.js backend that is
                        designed to run on the laptops of engineers testing Solar Car 1. It receives all telemetry data
                        from the solar car via a radio connection and displays it in real time. It is able to display up
                        to ten minutes of data and is available as a Docker image on the GitHub Container registry. The
                        project also includes batch and bash scripts to simplify the process of pulling and running the
                        image. It will soon include functionality to record testing data and convert this data into
                        Excel csv files.'
                    ghNames={['chase-car-dashboard']}
                    ghLinks={['https://github.com/badgerloop-software/chase-car-dashboard']}
                />
                <Project
                    image={DriverDashboardImage}
                    portrait={projectIsPortrait}
                    fontSize={fontSize}
                    name='Solar Car 1 Driver Dashboard'
                    description='The Solar Car 1 Driver Dashboard is a Qt Quick app written in C++ running on a
                        Raspberry Pi 4 in the solar car???s steering wheel. It displays critical telemetry data to the
                        driver and transmits this data to the engineering dashboard over a radio connection. This
                        dashboard will soon have the capability to send datasets to a cloud VM with an SQLite database
                        on top of it in order to transmit data to the engineering dashboard when connected to a cellular
                        network. In addition, the driver dashboard will be able to automatically switch between
                        communication methods depending on what connections are available, as well as resend data that
                        was generated while the Raspberry Pi did not have any available connections.'
                    ghNames={['sc1-driver-io']}
                    ghLinks={['https://github.com/badgerloop-software/sc1-driver-io']}
                />
                <Project
                    image={BatteryTesterImage}
                    portrait={projectIsPortrait}
                    fontSize={fontSize}
                    name='Battery Cell Testing Application and Analysis'
                    description={
                        <>
                            The Battery Cell Testing Application is a Qt Widgets app written in C++ that interfaces
                            with 14 battery testing boards via USB connections. It is used to control and monitor tests
                            and to record testing data. The app allows users to monitor the data coming from the battery
                            testing boards, as well as handle any errors that occur on each board.
                            <br/>
                            The Battery Cell Testing Analysis project is composed of various scripts for converting,
                            compiling, and processing test data for 800 cells from a third-party battery tester.
                        </>
                    }
                    ghNames={['battery-testing-app', 'battery-testing-analysis']}
                    ghLinks={['https://github.com/badgerloop-software/battery-testing-app', 'https://github.com/badgerloop-software/battery-testing-analysis']}
                />
                <Project
                    image={RecipeFinderImage}
                    portrait={projectIsPortrait}
                    fontSize={fontSize}
                    name='Recipe Finder App'
                    description={
                        <>
                            The Recipe Finder App is an Android app intended to allow users to search for recipes
                            by keywords, course, and lists of ingredients to include and exclude. In addition, users can
                            upload their own recipes. The app interfaces with an Oracle Autonomous Data Warehouse that
                            stores the recipes, as well as an Oracle Cloud Compute Instance that stores images of the
                            recipes.
                            <br/>
                            The application is still in development and currently has functionality for inserting
                            recipes into the database, as well as partial functionality for uploading images to the
                            cloud VM.
                        </>
                    }
                    ghNames={['recipe-finder-app', 'recipe-finder-server']}
                    ghLinks={['https://github.com/jrvollmer/recipe-finder-app','https://github.com/jrvollmer/recipe-finder-server']}
                />
                <Project
                    image={WebsiteImage}
                    portrait={projectIsPortrait}
                    fontSize={fontSize}
                    name='This Website'
                    description='This website serves as my online portfolio. It is a mobile-friendly React App that is
                        hosted through GitHub, and it was designed and implemented by yours truly.'
                    ghNames={['jrvollmer.github.io']}
                    ghLinks={['https://github.com/jrvollmer/jrvollmer.github.io']}
                />
            </VStack>
        </VStack>
    );
}

function Project(props) {
    return (
        <Flex
            direction={props.portrait ? 'column' : 'row'}
            w='95vw'
            gap='20px'
        >
            <Image src={props.image} fit='contain' w={props.portrait ? '100%' : '30%'}/>
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
