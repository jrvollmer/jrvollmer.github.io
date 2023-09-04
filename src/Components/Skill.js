import * as React from "react";
import { Card, CardBody, Text } from '@chakra-ui/react';

function Skill(props) {
    return (
        <Card zIndex={0}>
            <CardBody bgColor='#f0f0f0' >
                <Text
                    lineHeight={1}
                    fontSize={props.fontSize}
                    color='#404040'
                >
                    {props.text}
                </Text>
            </CardBody>
        </Card>
    );
}

export default Skill;
