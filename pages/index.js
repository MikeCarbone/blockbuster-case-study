import Head from 'next/head'

import {
  Box,
  Copy,
  Footer,
  Global,
  Header,
  Heading,
  Hero,
  Image,
  Link,
  VertSpace,
  Wrapper
} from 'blockbuster-design-system'

const TextLink = props => (
  <>
    <a target="_blank" rel="noopener noreferrer" href={props.href}>{props.children}</a>
    <style jsx>{`
      a {
        color: var(--gold);
        font-size: var(--fontCopy);
        text-decoration: underline;
      }  
    `}</style>
  </>
)

const BlueLine = () => (
  <>
  <div></div>
  <style jsx>{`
    div {
      height: 1px;
      background-color: var(--blue);
      width: 100%;
    }
  `}</style>
  </>
)

const Figure = props => (
  <>
    <VertSpace size={1} />
    <Box display="static" border="1px solid var(--blue)" borderRadius="var(--border-radius)" width="100%" maxWidth="700px">
      <Image height="400px" alt={props.caption} src={props.src} />
    </Box>
    <VertSpace />
    <p>{props.caption}</p>
    <VertSpace />
    <style jsx>{`
      p {
        color: gray;
        font-size: var(--fontCopy);
        font-style: italic;
        font-weight: lighter;
        line-height: 1.5;
        max-width: 800px;
      }  
    `}</style>
  </>
)

export default function Home() {
  return (
    <>
      <Global />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header>
        <Link color="var(--white)" href="https://blockbuster-one-pager.now.sh/">One-pager</Link>
        <Link color="var(--white)" href="https://blockbuster-media.now.sh/">Media</Link>
        <Link color="var(--white)" href="https://blockbuster-streaming.now.sh/">Streaming</Link>
        <Link color="var(--white)" href="https://github.com/carbonology?tab=repositories">Github</Link>
        <Link color="var(--white)" href="https://www.npmjs.com/package/blockbuster-design-system">NPM</Link>
        <Link color="var(--white)" href="https://blockbuster-ds-docs.now.sh/">Docs</Link>
      </Header>
      <main>
        <Hero
          title="Blockbuster Design System"
          imgSrc="./black.png"
          buttonText="Read Case study"
          buttonLink="#content"
          height="500px"
        />
        <BlueLine />
        <Box backgroundColor="var(--black)" id="content">
          <Wrapper backgroundColor="var(--black)">
            <VertSpace size={2} />
            <Heading>Goals</Heading>
            <Copy>
              Beginning this design system, we wanted to bring Blockbuster back from the dead and into the modern world with a fresh design system.
              The goals for this project included a reusable component system, <TextLink href="https://blockbuster-ds-docs.now.sh/">documentation</TextLink>, and three products showing off the capabilities of that design system.
              We also slapped a new logo on it to pull the whole thing into 2020.
            </Copy>
            <Figure src="./media.png" caption="The media product examplifies the strength of the new design system" />
            <VertSpace size={3} />
            <Heading>Results</Heading>
            <Copy>
              With such a limited timeframe, some goals were difficult to meet and pushed our limits as designers and developers.
              After the four weeks of development, we created all three products we set out to create with the documentation site live as well.
              The products sport a fresh, modern take on the Blockbuster brand.
              One product is <TextLink href="https://blockbuster-streaming.now.sh/">a streaming service</TextLink>, where a user is welcomed by a large-scale hero component, with a video background. The user can view movies in several horizontal carousels, and click in to see the film details.
              The second, <TextLink href="https://blockbuster-one-pager.now.sh/">a promotional one-page website</TextLink> advertising the streaming service.
              And the third, <TextLink href="https://blockbuster-media.now.sh/">a media website</TextLink> focused on content strategy and establishing Blockbuster as a new media player.
            </Copy>
            <Copy>
              In action, some components are stronger than others.
              The button and hero components certainly stick out as prominent inclusions to the overall design.
              In other parts of the design, it was difficult to avoid large spaces of monotony, like in the streaming service product.
              Other design elements would aid in breaking up open flat spaces.
            </Copy>
            <Copy>
              Overall, I think it was an interesting attempt at modernizing the Blockbuster brand.
              Unfortunately, more time would have to be spent revitalizing the design to enable the component system to quickly produce professional-quality products.
              Responsiveness and diversity of design are our biggest areas of concern.
            </Copy>
            <VertSpace size={3} />
            <Heading>Research</Heading>
            <Copy>
              Research mostly involved competitive analysis, taking a look at modern media brands and seeing how their designs influence their products.
              Companies like Netflix, Disney+, and Hulu heavily inspired the direction of Blockbuster’s design.
              Dark, cinematic motifs with bright contrasting elements was a common theme amongst the platforms, and one we wanted to bring over to our designs.
            </Copy>
            <Figure src="./dplus.png" caption="DisneyPlus.com is an example of modern streaming design, and served as inspiration" />
            <VertSpace size={3} />
            <Heading>Building the Pilot</Heading>
            <Copy>
              A lesson we learned is that design systems are software, and getting them into code as soon as possible has huge benefits.
              We decided our pilot product would be the one-pager advertising page, which contains enough core elements and a diverse enough layout that it would be a good 1.0 of the design system.
            </Copy>
            <Copy>
              We quickly began designing and developing simultaneously, with early layouts being sketched out in Excalidraw and early components being coded right away.
              The collaborative design process was a little awkward to begin, but proved worthwhile as we quickly turned around the pilot product from concept to reality.
              Right away, it was clear that our designs seemed a little basic, but improvements could be added on later down the road.
            </Copy>
            <Figure src="./design.png" caption="Results of the first collaborative design session, screenshot of Excalidraw" />
            <VertSpace size={3} />
            <Heading>Packaging into Design System 1.0</Heading>
            <Copy>
              Building a component-based website isn’t too difficult on its own, but making the same component system reusable on three different products, however, is quite difficult.
              We needed the components to live in one spot, acting as a single source of truth for everywhere else they exist.
              To do this, we set the components up in a JavaScript package and published it on NPM.
              This way, if the components were to be updated within that package, we could publish changes to NPM, then run one command on the other sites to reflect the changes.
            </Copy>
            <Copy>
              Getting to this point was very, very difficult.
              We needed a way to have our editable design system and its components in a single folder, while also having a test ‘playground’ in a subdirectory within.
              Attempting to do this by hand was very tricky.
              Multiple package.json files triggered several errors and confused the environment setup.
              After several hours of debugging and complications, we switched over to <TextLink href="https://www.npmjs.com/package/create-react-library">create-react-library</TextLink>, another NPM package that helps with our exact problem.
              It was just what we needed.
            </Copy>
            <Figure src="./code.png" caption="VSCode setup, working within the package and the playground environment, simultaneously" />
            <Copy>
              Styling presented another roadblock.
              We wanted installation of our package to be as simple as possible and wanted to avoid requiring a CSS file served from a CDN.
              This would add complication to installation and would require an additional step when publishing our package.
              So, we started using <TextLink href="https://www.npmjs.com/package/styled-components">styled-components</TextLink> to help us in coupling styles with the component, keeping them in a single location and within the same file.
              While the syntax is a little uncomfortable, the benefits outweighed any issues with development.
            </Copy>
            <VertSpace size={3} />
            <Heading>Continuing Development</Heading>
            <Copy>
              With the design system in place, creating the next two products was not difficult.
              Besides some custom components that had to be built for the designs, like the carousel, the design system carried the majority of the design.
              No new CSS was written to accommodate the streaming service, fully leveraging the flexibility of the component system.
              With each piece of the site connected to the published package, going back and touching up colors, sizes, etc. will not be problematic.
              The speed of creation is a testament to the power of having a custom design system.
            </Copy>
            <Figure src="./streaming.png" caption="The carousel was a one-off component for the streaming service's design, and was not included in the package" />
            <VertSpace size={3} />
            <Heading>Conclusion</Heading>
            <Copy>
              By the end of the project, the power of having a design system for your brand was realized.
              It made development easy and relaxed.
              Each decision was only made once in the source package, and didn’t have to be stressed about later while developing the products.
              Initial setup was quite difficult, and I think having a boilerplate for creating these complicated design systems would be very useful for the future.
              Overall, so many lessons have been learned, and Blockbuster knows who to call if they ever decide to re-enter the game.
            </Copy>
            <VertSpace size={2} />
          </Wrapper>
        </Box>
      </main>
      <Footer />
      <style jsx>{``}</style>
    </>
  )
}
