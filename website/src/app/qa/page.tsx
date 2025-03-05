"use client"

export default function QA() {
    return (
        <main className="bg-zinc-900 text-white md:h-screen justify-between p-12 md:p-20">
            <p className="text-2xl mb-8 font-bold">QA for recruiters</p>

            <div>
                <p className="mb-4 mt-6 font-bold">How did I learn to code?</p>
                <p>
                    I started learning how to code in 2016, after my bachelor&apos;s degree in Design. I was working as a
                    graphic designer, but I wanted to learn some code to be able to create my own websites and apps. I
                    was taught HTML and CSS in college, but I didn&apos;t know anything about Javascript. I started
                    learning JavaScript on my own, and I was able to get a job as a FrontEnd Developer after 6 months of
                    self-learning. I&apos;ve been working as a FrontEnd Developer since 2017.
                </p>

                <p className="mb-4 mt-6 font-bold">How did I end up in Norway?</p>
                <p>
                    My and my wife moved from Chile to Norway in August 2022. She studied a master&apos;s
                    degree in Interaction Design at NTNU in Gjøvik where we lived for a year and a half. We moved to
                    Stavanger in January 2024 because I found work as a developer here, and not long after that, she
                    found a job as a UX Designer. We&apos;re happy living in Stavanger, and we&apos;re planning to stay
                    here for the foreseeable future.
                </p>

                <p className="mb-4 mt-6 font-bold">What&apos;s my immigration status?</p>
                <p>
                    I have a family immigration permit, which allows me to work full-time in Norway without any
                    restrictions{" "}
                    <a
                        className="underline"
                        href="https://www.udi.no/en/received-an-answer/family-immigration/have-been-granted-a-family-immigration-permit/#link-1234"
                    >
                        according to UDI
                    </a>
                    . My wife has an european citizenship, so I can also work in any other country in Schengen.
                    My current residence permit is valid until 2027. I also have a norwegian ID number and bank
                    account. And I have been working a full time job in Norway since February 2024.
                </p>

                <p className="mb-4 mt-6 font-bold">Am I willing to move?</p>
                <p>
                    We moved to Stavanger because of work and my wife has also found a job here. We&apos;re happy living
                    in Stavanger, and we would like to stay, but we&apos;re open to moving if the right opportunity comes along.
                </p>
            </div>

            <div className="mt-20 text-center">
                <a href="/" className="hover:text-green-700">
                    Back to home
                </a>
            </div>
        </main>
    )
}
