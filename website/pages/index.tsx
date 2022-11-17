import Head from "next/head"
import Image from "next/image"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Andrés Sanhueza</title>
                <meta name="description" content="FrontEnd Developer" />
            </Head>

            <main className="">
                <div className="bg-zinc-900 text-white flex h-screen justify-between items-end">
                    <div className="my-auto ml-20">
                        <h1 className="font-bold text-7xl mb-3 animate-passive-glitch hover:animate-hover-glitch">
                            Andrés Sanhueza
                        </h1>
                        <div className="max-w-xl">
                            <p className="text-lg">
                                {
                                    "I'm a FrontEnd Developer with a Designer background. I majored in design, taught myself how to code in Javascript, and I’ve being working as a FrontEnd dev for the past 5 years. I like to build beautiful and functional digital products."
                                }
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex w-1/2">
                        <div className="m-auto">
                            <div className="h-1/4">
                                <Image
                                    className="h-60 w-auto max-w-none opacity-80 grayscale"
                                    src="img/foto.jpg"
                                    alt="Portrait"
                                />
                            </div>
                            <div className="text-xl border-r-2 px-4 mt-8 text-right">
                                <a
                                    href="#curriculum"
                                    className="block w-full mb-4 hover:animate-hover-glitch cursor-pointer"
                                >
                                    Curriculum
                                </a>
                                <a href="#contact" className="block w-full hover:animate-hover-glitch cursor-pointer">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="curriculum" className="min-h-screen p-20 text-zinc-900">
                    <div className="flex">
                        <div className="mr-20">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                                <p className="max-w-xs text-lg">
                                    Javascript HTML CSS3 SASS ReactJS Redux AngularJS Material UI Typescript{" "}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
                                <p className="max-w-xs text-lg">NextJS Firebase Tailwind React Native </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Employment History</h2>
                                <div className="mb-6">
                                    <div className="mb-2">
                                        <p className="text-zinc-600 font-semibold text-lg">Cheetrack</p>
                                        <p className="italic">FrontEnd Developer (Feb 2021 - Present)</p>
                                        <p className="italic">Santiago, Chile</p>
                                    </div>
                                    <div>
                                        <p>
                                            Development and web design for the Cheetrack web app, a communication
                                            solution that integrates chat platforms like WhatsApp with sales and
                                            checkout data from Shopify.
                                        </p>
                                        <p>ReactJs, Redux, Material UI, CSS in JS, Webhooks, API Rest.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-10">
                                    <div className="mb-2">
                                        <p className="text-zinc-600 font-semibold text-lg">Conectter</p>
                                        <p className="italic">FrontEnd Developer (Oct 2017 - Feb 2021)</p>
                                        <p className="italic">Santiago, Chile</p>
                                    </div>
                                    <div>
                                        <p>
                                            Development and web design for the Conectter web app, a project and task
                                            management solution. I also participated on UX/UI field researching.
                                        </p>
                                        <p>AngularJS, Pug/Jade, SASS, API Rest.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Education</h2>
                                <div>
                                    <div className="mb-6">
                                        <p className="text-zinc-600 font-semibold text-lg">Design (2011-2015)</p>
                                        <p>Pontificia Universidad Católica de Chile (Santiago, Chile)</p>
                                    </div>

                                    <div>
                                        <p className="text-zinc-600 font-semibold text-lg">Sociology (2008-2010)</p>
                                        <p>Universidad Alberto Hurtado (Santiago, Chile)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <a
                            className="px-6 py-2  w-fit block m-auto border-2 border-black hover:animate-hover-glitch"
                            href="curriculum.pdf"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
                <div id="contact" className="bg-zinc-900 text-white p-20">
                    <div>
                        <p className="font-bold">Address</p>
                        <p className="mb-4">Gjøvik, Norway</p>

                        <p className="font-bold">Phone</p>
                        <a href="tel:+4756548962" className="block mb-4 cursor-pointer">
                            46 54 89 62
                        </a>

                        <p className="font-bold">Email</p>
                        <a href="mailto:trazo263@gmail.com" className="block mb-4">
                            trazo263@gmail.com
                        </a>

                        <p className="font-bold">LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/aisanhueza/?locale=en_US"
                            className="block mb-4 cursor-pointer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/aisanhueza
                        </a>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    )
}
