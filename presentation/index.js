import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#d0d0ff",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  overview: require("../assets/overview.png"),
  me: require("../assets/iceicesquare.jpg"),
  digime: require("../assets/leg.jpg"),
  gh: require("../assets/gh.svg"),
  twitter: require("../assets/twitter.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
 <Deck transition={["spin", "slide"]} transitionDuration={800} theme={theme}>
        <Slide transition={"fade"} transitionDuration={400}>
          <Heading size={1} fit lineHeight={1}>nodeJS on robots</Heading>
          <Image src={images.overview} margin="50px 0 0 0"/>
          <Heading size={3} fit>@nodemeetup 09-03-2017</Heading>
        </Slide>
        <Slide>
          <Heading size={1}>Andreas</Heading>
          <Image src={images.me} display="inline" height="100px"/>
          <List>
            <ListItem>backend architect @ Bosch</ListItem>
            <ListItem>node enthusiast</ListItem>
            <ListItem>🚴    ⛷    🐠</ListItem>
          </List>
          <Image src={images.digime} display="inline" height="100px"/>
          <Text margin="0 auto"><Image src={images.twitter} height="40px" margin="0 20px auto"/>@an0xFF</Text>
          <Text margin="0 auto"><Image src={images.gh} height="40px" margin="0 20px auto"/>github.com/anoff</Text>
        </Slide>
        {
          MarkdownSlides`
# johnny-five
* firmata
* realtimeliness
* ports
* sensor limits (pulsed signals)
---
# differences firmata j5
* no repl
* supporting library (communication) of j5
* auto-discovery of boards
* device configuration has to be done manually
---
# raspi-io
* limited io http://johnny-five.io/platform-support/#raspberry-pi-3-model-b
* needs expander

          `
        }
      </Deck>
    );
  }
 }
