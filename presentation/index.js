import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Markdown,
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
  primary: "#efefef",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#a110ff"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  overview: require("../assets/overview.png"),
  me: require("../assets/iceicesquare.jpg"),
  digime: require("../assets/leg.jpg"),
  gh: require("../assets/gh.svg"),
  twitter: require("../assets/twitter.png"),
  firmata1: require("../assets/firmata.png"),
  firmata2: require("../assets/firmata-control.png"),
  firmata3: require("../assets/firmata-all.png"),
  remote: require("../assets/remotecode.png")
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
        <Slide>
          <Heading>johnny-five</Heading>
          <Markdown>{`
* javascript robotics framework
* abstracts low level hardware
* [huge hardware platform support](http://johnny-five.io/platform-support/)
* uses firmata under the hood
            `}</Markdown>
        </Slide>
        <Slide>
          <Heading>j5 & firmata</Heading>
          <Image src={images.firmata1} />
        </Slide>
        <Slide>
          <Heading>j5 & firmata</Heading>
          <Image src={images.firmata3} />
        </Slide>
        <Slide>
          <Heading>Demo time ⚒</Heading>
          <Heading size="4">#1 Servo / Sonar on Arduino</Heading>
        </Slide>
        <Slide>
          <Heading fit>firmata (protocol) limitations</Heading>
          <Markdown>{`
* limited support for arduino libs
* no realtime signal analysis 🕵️
            `}</Markdown>
        </Slide>
        <Slide>
          <Heading fit>johnny-five vs firmata.js</Heading>
            <Markdown>{`
* j5 uses firmata.js for communication
* incl. REPL (Read–Eval–Print Loop) ⌨️
* auto-discovery of attached boards 👀
* js classes w/ setup routines 📦
            `}</Markdown>
        </Slide>
        <Slide>
          <Heading>Demo time ⚒</Heading>
          <Heading size="4" fit>#2 LEDs on raspberry pi</Heading>
        </Slide>
        <Slide>
          <Heading fit>limitations of raspi-io</Heading>
            <Markdown>{`
* limited [raspi hardware IO](http://johnny-five.io/platform-support/#raspberry-pi-3-model-b)
* no realtime possible
            `}</Markdown>
        </Slide>
        <Slide>
          <Heading>Demo time ⚒</Heading>
          <Image src={images.remote} />
        </Slide>
        <Slide>
          <Heading size={2}>Attribution</Heading>
          <List>
            <ListItem>find the source for this talk on <Link href="https://github.com/anoff/pres-nodebots-2017-03-09"> github</Link></ListItem>
            <ListItem>images used are listed in the <Link href="https://github.com/anoff/pres-nodebots-2017-03-09/blob/master/readme.md">readme</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
 }
