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
          <Tool title="BENQ PD2700U Monitor x2">
            A 27-inch, 4k monitor with great colours at a good price. I have two
            of them on my desk. Programmer pro tip, use two monitors, don't listen
            to the one monitor zelots, it's a productivity booster. I wish I could
            splurge on 2x Studio Displays, but I can't justify spending so much money
            on a monitor that tops out at 60hz. It's 2024 now, Apple, sort it out. 
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
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
