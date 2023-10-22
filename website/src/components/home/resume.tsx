"use client"

import Blob from "@/components/home/blob"

export default function Resume() {
    return (
        <div id="curriculum" className="min-h-screen p-12 md:p-20 text-zinc-900">
            <div className="md:flex">
                <div className="hidden md:block mr-20 min-w-[200px]">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <p className="max-w-xs text-lg">
                            Javascript HTML CSS3 SASS React Redux AngularJS Material-UI Typescript Tailwind
                        </p>
                    </div>
                    {/* <div>
                                <h2 className="text-2xl font-bold mb-4">Currently Learning</h2>
                                <p className="max-w-xs text-lg">NextJS Firebase React Native </p>
                            </div> */}
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Employment History</h2>
                        <div className="mb-6">
                            <div className="mb-2">
                                <p className="text-zinc-600 font-bold text-lg">Cheetrack</p>
                                <p className="italic">Lead FrontEnd Developer (Feb 2021 - Present)</p>
                                <p className="italic">Santiago, Chile (Remote) </p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    Developed and maintained the Cheetrack web app, a communication solution that
                                    integrates chat platforms like WhatsApp and Instagram, with sales and checkout data
                                    from Shopify. Built with ReactJS, Redux, and Material UI. It uses RESTful APIs and
                                    WebSockets to communicate with the backend.
                                </p>

                                <p className="mb-2">
                                    Increased user engagement and reduced customer support burden by changing the focus
                                    to user self-service. This was achieved by working closely with the product team to
                                    gather user feedback and keeping track of user behavior. The result was a redesign
                                    of the front end of several features, and the beginning of an ongoing process of
                                    improving the user experience by reviewing the real usage of features after they are
                                    released.
                                </p>

                                <p className="mb-2">
                                    Worked with the QA team to improve the testing process, implementing Sentry for
                                    error tracking and automated testing with Cypress.
                                </p>

                                <p className="mb-2">
                                    Worked closely with mobile developers on the mobile app currently deployed on the
                                    App Store and Google Play. The mobile app is built with React Native and Firebase.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <div className="mb-2">
                                <p className="text-zinc-600 font-bold text-lg">Conectter</p>
                                <p className="italic">FrontEnd Developer (Oct 2017 - Feb 2021)</p>
                                <p className="italic">Santiago, Chile</p>
                            </div>
                            <div>
                                <p className="mb-2">
                                    Development and web design for the Conectter web app, a project and task management
                                    solution. Built with AngularJS, Pug/Jade for HTML templating, and SASS for CSS
                                    preprocessing. Uses RESTful APIs to communicate with the backend.
                                </p>

                                <p className="mb-2">
                                    Worked closely with the backend team to develop new features and improve existing
                                    ones. Had a hand in the backend for some features using PHP and MySQL.
                                </p>

                                <p>
                                    Participated on UX/UI field researching, conducted user testing, and user
                                    interviews. Later on, applied the findings to a redesign of the web app.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Education</h2>
                        <div>
                            <div className="mb-6">
                                <p className="text-zinc-600 text-lg">
                                    <strong>Design</strong> (2011-2015)
                                </p>
                                <p>Pontificia Universidad Católica de Chile (Santiago, Chile)</p>
                            </div>

                            {/* <div>
                                        <p className="text-zinc-600 font-bold text-lg">Sociology (2008-2010)</p>
                                        <p>Universidad Alberto Hurtado (Santiago, Chile)</p>
                                    </div> */}
                        </div>
                    </div>
                    <div className="md:hidden mb-10">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <p className="max-w-xs text-lg">
                            Javascript HTML CSS3 SASS React Redux AngularJS Material-UI Typescript Tailwind
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">References</h2>
                        <div>
                            <div className="mb-6">
                                <p className="text-zinc-600 text-lg">
                                    <strong>Javier Torres</strong> (CEO at Conectter & Cheetrack)
                                    <em className="text-zinc-400"> - English speaking</em>
                                </p>
                                <a href="https://www.linkedin.com/in/javier-torres-cortes">
                                    linkedin.com/in/javier-torres-cortes
                                </a>
                                <a className="block" href="mailto:javier@cheetrack.com">
                                    javier@cheetrack.com
                                </a>
                            </div>

                            <div className="mb-6">
                                <p className="text-zinc-600 text-lg">
                                    <strong>Felipe Vergara</strong> (CTO at Conectter & Cheetrack)
                                    <em className="text-zinc-400"> - English speaking</em>
                                </p>
                                <a href="https://www.linkedin.com/in/felipe-vergara-4029104a">
                                    linkedin.com/in/felipe-vergara-4029104a
                                </a>
                                <a className="block" href="mailto:felipe@cheetrack.com">
                                    felipe@cheetrack.com
                                </a>
                            </div>

                            <div className="mb-6">
                                <p className="text-zinc-600 text-lg">
                                    <strong>Sergio Bustamante</strong> (Dev Ops and Lead Dev at Cheetrack)
                                    <em className="text-zinc-400"> - English speaking</em>
                                </p>
                                <a href="https://www.linkedin.com/in/bustamantemsergio">
                                    linkedin.com/in/bustamantemsergio
                                </a>
                                <a className="block" href="mailto:sergio@cheetrack.com">
                                    sergio@cheetrack.com
                                </a>
                            </div>

                            {/* <div>
                                        <p className="text-zinc-600 font-bold text-lg">Sociology (2008-2010)</p>
                                        <p>Universidad Alberto Hurtado (Santiago, Chile)</p>
                                    </div> */}
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
    )
}
