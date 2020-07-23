import React, {useState, useEffect} from "react";
import {storiesOf} from "@storybook/react-native";
import {ThemeProvider} from "@yosmy/style";
import {Picture as BasePicture} from "@yosmy/ui";
import theme from "../theme";
import Presentation from "../src/Presentation";

const Picture = ({
    source, ...props
}) => {
    return <BasePicture
        source={source || require("./person.png")}
        {...props}
    />;
};

const PresentationContainer = () => {
    const [phone, setPhone] = useState(null);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setPhone({
                country: "US",
                prefix: "1",
                number: "7867861234"
            });
        }, 3000)

        setTimeout(() => {
            setAvatar({
                nickname: "Nickname",
                picture: false
            });
        }, 6000)
    }, []);

    return <Presentation
        ui={{
            picture: Picture
        }}
        margin={1}
        country={phone && phone.country}
        prefix={phone && phone.prefix}
        number={phone && phone.number}
        nickname={avatar && avatar.nickname}
        picture={avatar && avatar.picture}
    />;
}

storiesOf("Presentation", module)
    .add("default", () => (
        <ThemeProvider theme={theme}>
            <PresentationContainer />
        </ThemeProvider>
    ))
;
