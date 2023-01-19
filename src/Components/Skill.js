import * as React from "react";
import { Link, Card, CardBody, VStack, HStack, Spacer, Text, Box } from '@chakra-ui/react';

function Skill(props) {
    return (
        <Card>
            <CardBody>
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
