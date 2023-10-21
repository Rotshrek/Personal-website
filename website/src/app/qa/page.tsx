"use client"

export default function QA() {
    return (
        <main className="bg-zinc-900 text-white h-screen justify-between p-20">
            <p className="text-2xl mb-8 font-bold">QA for recruiters</p>

            <div>
                <p className="mb-4 mt-6 font-bold">How did I learn to code?</p>
                <p>
                    I started learning to code in 2016, after my bachelor&apos;s degree in Design. I was working as a
                    graphic designer, but I wanted to learn how to code to be able to create my own websites and apps. I
                    was taught HTML and CSS in college, but I didn&apos;t know anything about JavaScript. I started
                    learning JavaScript on my own, and I was able to get a job as a FrontEnd Developer after 6 months of
                    self-learning. I&apos;ve been working as a FrontEnd Developer since 2017.
                </p>

                <p className="mb-4 mt-6 font-bold">How did I end up in Norway?</p>
                <p>
                    My and my wife moved from Chile to Norway in 2022. She&apos;s currently studying a master&apos;s
                    degree in Interaction Design at NTNU in Gjøvik. While I kept working remotely for my previous
                    employer.
                </p>

                <p className="mb-4 mt-6 font-bold">What&apos;s my immigration status?</p>
                <p>
                    I have a family immigration permit, which allows me to work full-time in Norway without any
                    restrictions{" "}
                    <a
                        className="underline"
                        href="https://www.udi.no/en/received-an-answer/family-immigration/have-been-granted-a-family-immigration-permit/#link-1234"
                    >
                        accoding to UDI
                    </a>
                    . My wife has an european citizenship, so I can also work in any other country in the European
                    Union. My current residence permit is valid until 2027. I also have a norwegian ID number and bank
                    account.
                </p>

                <p className="mb-4 mt-6 font-bold">Am I willing to move?</p>
                <p>
                    Yes! My wife studies can be had remotely, so we&apos;re open to move to any other city in Norway or
                    Europe.
                </p>
            </div>

            <div className="mt-20 text-center">
                <a href="/" className="hover:animate-hover-glitch">
                    Back to home
                </a>
            </div>
        </main>
    )
}
