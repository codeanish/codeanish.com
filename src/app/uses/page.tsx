import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I've been a Mac user since 2005 and this has been the best Mac I've
            ever used in that timeframe. It felt like a huge outlay when I bought
            it, but the utility of this laptop is unlike any other I've ever used.
            It has a great screen, works pretty damn fast and is my go to device
            for day-to-day coding.
          </Tool>
          <Tool title="Custom PC, 5950x CPU, 64GB RAM and a 3090 GPU">
            Building your own PC is a rite of passage I believe everyone should
            go through. I love mine, it's built in a Fractal Terra case so it 
            looks beautiful on my desk. It doesn't have the best thermals, but it
            does the trick. I've got it set up to dual boot into Windows and Arch Linux.
          </Tool>
          <Tool title="Apple Studio Display">
            A 27-inch, 5k monitor with great colours at a crazy price. I used to run
            2x4k monitors, but for the sake of simplicity, I decided to minimise my desk
            footprint and move to a single display. I love the look, but honestly, 60hz?
            It's 2024, Apple, sort it out. 
          </Tool>
          <Tool title="Rama Works U80-A Seq 2">
            I waited for 2 years to receive this keyboard and absolutely adore it.
            That being said, don't buy anything from Rama Works now in 2024, they 
            seem to have turned into a scam company after years of enthusiast support.
          </Tool>
          <Tool title="Logitech G Pro X Superlight">
            I used to use an MX Master like everyone else, but as I got more into 
            PC gaming, I wanted a mouse that was a lot lighter and smoother to move
            around. This mouse fit the bill nicely.
          </Tool>
          <Tool title="Herman Miller Embody Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            There are many camps of text editor/ide, but my daily driver is currently 
            VSCode. It has every extension under the sun to make it behave exactly how
            you want it to and give you every feature you need. It opens fast, works 
            with every programming language I've tried, probably my most complete, one 
            stop shop dev tool that I use.
          </Tool>
          <Tool title="Kitty">
            I spend most of my time between a terminal and a text editor, I love Kitty
            due to its extensibility and speed. I'm sure there are other great options,
            but I see no current reason to change.
          </Tool>
          <Tool title="Neovim">
            I install Neovim on all my VMs and is my default editor on all machines I 
            remote into for work. It has features which plain VI doesn't have, and while
            the built in nano packages are great, having a few extra features is always
            helpful when jumping into an ssh session.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Bear">
            A great notes app, not the most complete out there, but it is beautiful.
          </Tool>
          <Tool title="Bitwarden">
            You don't use the same password on every website do you? Get a password
            manager. I use Bitwarden, it's open source and has all the features I need. 
            You can use whichever one you want. 
          </Tool>
          <Tool title="Pomo CLI">
            I'm a big fan of the pomodoro technique for helping me to focus on what I'm
            doing and to stay on task. I have tried many different solutions from using a
            pomo timer in the browser to using a timer on my phone. I find that all the 
            options take me out of focus mode, so I built my own CLI tool to use as a 
            pomodoro timer. You can get instructions for how to install it <a href='https://github.com/codeanish/pomo-cli'>here</a>.
          </Tool>
          <Tool title="Arc Browser">
            I don't know why I hate Google Chrome, but I do. I'm always on the lookout for
            a browser that isn't Chrome, but I've never managed to settle on one until
            Arc Browser. It's based on Chromium, so you can have all your Chrome essentials, 
            but the way it's put together really helps with multi tasking. I'm still getting to
            know this browser really, but as it stands, I don't see any reason why I would switch
            back to Google Chrome.
          </Tool>
          <Tool title="Raindrop.io">
            I read a lot on the internet. I've always struggled with bookmarks in Chrome and
            Read Later in Safari. I came across Raindrop.io as a bookmark manager. It's still
            very much in Beta for me, but I like it so far.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
