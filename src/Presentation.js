// @refresh reset

import React, {memo} from "react";
import PropTypes from "prop-types";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Container, CirclePlaceholder, LinePlaceholder, Text} from "@yosmy/ui";
import {Phone, PhonePlaceholder} from "@yosmy/phone";

const Presentation = memo(({
    ui, margin, padding, border,
    country, prefix, number, nickname, picture, onClick, ...props
}) => {
    return <Container
        {...props} // key
        flow="row"
        align={{
            main: "flex-start",
            cross: "center"
        }}
        margin={margin}
        padding={padding}
        border={border}
        onClick={country !== null && prefix !== null && number !== null && nickname !== null && onClick
            ? () => {
                onClick(
                    country,
                    prefix,
                    number,
                    nickname,
                    picture,
                );
            }
            : undefined
        }
    >
        {picture === null
            ? <CirclePlaceholder size={35} />
            : <ui.picture
                size="sm"
                rounded
                source={picture}
            />
        }

        <Container
            flow="column"
            align={{
                main: "center",
                cross: "flex-start"
            }}
            margin={{
                left: 1
            }}
        >
            {nickname === null
                ? <LinePlaceholder
                    width={100}
                    height={14}
                    margin={{
                        bottom: 0.5
                    }}
                />
                : (nickname !== false
                    ? <Text>{nickname}</Text>
                    : <Text>Sin nombre</Text>
                )
            }

            {(country === null || prefix === null || number === null)
                ? <PhonePlaceholder />
                : <Phone
                    country={country}
                    prefix={prefix}
                    number={number}
                />
            }
        </Container>
    </Container>;

}, (prev, next) => {
    return (
        prev.country === next.country
        && prev.prefix === next.prefix
        && prev.number === next.number
        && prev.nickname === next.nickname
        && prev.picture === next.picture
    );
});

Presentation.propTypes = {
    ui: PropTypes.shape({
        picture: PropTypes.func.isRequired
    }).isRequired,
    country: PropTypes.string,
    prefix: PropTypes.string,
    number: PropTypes.string,
    nickname: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false])
    ]),
    picture: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf([false])
    ]),
    ...ContainerSpec.Props,
};

export default Presentation;