import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, Typeface
} from "./src";

import createTheme from "./src/themes/default";
import preloader from "./src/utils/preloader";

require("normalize.css");
require("./src/themes/default/index.css");
const theme = createTheme({
  primary: "#d0d0ff"
});

const images = {
  overview: require("./assets/overview.png"),
  me: require("./assets/iceicesquare.jpg"),
  digime: require("./assets/leg.jpg"),
  gh: require("./assets/gh.svg"),
  twitter: require("./assets/twitter.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={333}>
        <Slide>
          <Heading>nodeJS on robots</Heading>
          <Image src={images.overview} margin="50px 0 0 0"/>
          <Heading size={3}>@nodemeetup 09-03-2017</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Andreas <Image src={images.me} /></Heading>
          <Markdown>
            {`
* backend architect @ Bosch
* node enthusiast
* 🚴\t⛷\t🐠

@an0xff

github.com/anoff
            `}
          </Markdown>
          {/*<Table>
            <TableBody>
              <TableRow>
                <TableItem><Image src={images.twitter} width="45px" /></TableItem>
                <TableItem>@an0xff</TableItem>
              </TableRow>
              <TableRow>
                <TableItem><Image src={images.gh}  width="45px" /></TableItem>
                <TableItem style="text-align:left">github.com/anoff</TableItem>
              </TableRow>
            </TableBody>
          </Table>*/}
        </Slide>
        {
          MarkdownSlides`
# johnny-five
* firmata
* realtimeliness
* ports
* sensor limits (pulsed signals)
---
# raspi-io
* blablup
          `
        }
      </Deck>
    );
  }
 }
