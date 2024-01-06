import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Anish Patel. I live in Seattle, Washington, where I build stuff that I find cool.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I’m Anish Patel. I live in Seattle, Washington, where I build stuff that I find cool.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I was 7 years old when I got my first computer, a Commodore C64.
              It quite literally changed my life. From the tape loading to the
              weird, awesome games, it was my most memorable ever Christmas gift.
              It was on this computer that I first got a taste of programming by
              playing about with a bit of BASIC.
            </p>
            <p>
              I didn't really do much in the way of programming from this point
              till I got my first PC with a 56k modem years later. It was at this
              point that I first started making websites - inspired by the fledgling
              internet. I carefully hand crafted plain HTML websites using notepad
              and viewing the websites using Internet Explorer. Oh the good old days.
            </p>
            <p>
              Fast forward a bunch of years and I'd stopped writing code entirely
              while the world kept advancing and improving around me. I came back 
              to coding in my first job in 2008 learning C#, VBA and SQL. In short
              order, I'd built desktop apps, web apps, spreadsheet automations and
              console apps.
            </p>
            <p>
              I worked in the space of Insurance and Banking for many years, learning
              many different technologies to the point where I now see myself as a
              language agnostic programmer. I have my favourites, but I work in 
              any language and technology that the situation calls for. The bulk of
              my career has been running a technology consulting business where we 
              would develop custom solutions for our clients to leverage analytical
              capabilities provided by my company.
            </p>
            <p>
              Now, I work as a platform engineer, creating a multi cloud internal 
              developer platform at Moodys Analytics. Doing this has taught me a
              great deal about how to scale developer productivity and achieve 
              standardisation across a large development organisation.
            </p>
            <p>
              In my spare time, I like to write code to sharpen my skills and 
              work on my never ending homelab build out. I've accumulated enough
              tech in my house to run a small/medium business at home with
              enterprise class networking, CICD pipelines and the obligatory 
              home automation and hosting services.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/codeanish" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/codeanish" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/codeanish/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:anish@codeanish.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              anish@codeanish.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
