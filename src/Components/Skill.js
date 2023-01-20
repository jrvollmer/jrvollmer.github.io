import * as React from "react";
import { Link, Card, CardBody, VStack, HStack, Spacer, Text, Box } from '@chakra-ui/react';

function Skill(props) {
    return (
        <Card zIndex={0}>
            <CardBody bgColor='#f0f0f0' /* TODO Different color than the Background section background color. Decide if I want to keep this */ >
                <Text
                    lineHeight={1}
                    /* TODO */ fontSize={props.fontSize}
                    color='#404040'
                >
                    {props.text}
                </Text>
            </CardBody>
        </Card>
    );
}

export default Skill;
