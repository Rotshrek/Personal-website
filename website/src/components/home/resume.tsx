"use client"

export default function Resume() {
    return (
        <div id="curriculum" className="min-h-screen p-12 md:p-20 text-zinc-900">
            <div className="m-auto max-w-3xl">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Employment History</h2>
                    <div className="mb-6">
                        <div className="mb-2">
                            <p className="text-zinc-600 font-bold text-lg">Olavstoppen</p>
                            <p className="italic">FrontEnd Developer (Feb 2024 - Present)</p>
                            <p className="italic">Stavanger, Norway </p>
                        </div>
                        <div>
                            <p className="mb-2">
                                Working as a FrontEnd Developer at Olavstoppen, a consultancy that specializes in
                                FrontEnd Development and Design. As part of it I've worked on the SAPo project for
                                Equinor.
                            <p className="mb-2"> SAPo - Situational Awareness portal (Feb 2024 - Feb 2025)</p>
                            <p className="mb-2">
                                The Situational Awareness portal (SAPo) is a digital tool for enhancing situational awareness 
                                in emergency and crisis management. Developed after the Melkøya fire, it is now part of 
                                Equinor's emergency system. SAPo provides real-time, data-driven information through a 
                                tactical board and advanced map functionality, ensuring fast and precise access to critical data.
                            </p>
                            <p className="mb-2">
                                Worked mostly on a pilot run for offshore installations, where the main goal was to
                                expand the map solution to include the visualization of the offshore installations and
                                their surroundings. The 3D solution was built with Three.js and React, and it was
                                integrated with the existing SAPo solution.
                            </p>
                            <p className="mb-2">
                                The project used a Monorepo architecture with Turbo, was built in React and Redux, and used
                                Equinor's UI system for components. The backend integration was done with GraphQL and
                                Apollo Client. The project also used Jest and Cypress for unit and e2e testing.
                            </p>
                        </div>
                    </div>
                </div>
                 <div>
                    <div className="mb-10">
                        <div className="mb-2">
                            <p className="text-zinc-600 font-bold text-lg">Cheetrack</p>
                            <p className="italic">Lead FrontEnd Developer (Feb 2021 - Oct 2023)</p>
                            <p className="italic">Santiago, Chile (Remote) </p>
                        </div>
                        <div>
                            <p className="mb-2">
                                Developed and maintained the Cheetrack web app, a communication solution that integrates
                                chat platforms like WhatsApp and Instagram, with sales and checkout data from Shopify.
                                Built with ReactJS, Redux, and Material UI. It uses RESTful APIs and WebSockets to
                                communicate with the backend.
                            </p>

                            <p className="mb-2">
                                In 2022, the project focused on improving user engagement and reducing customer support 
                                workload by shifting towards a user self-service approach. This involved close 
                                collaboration with the product team to gather user feedback and analyze usage patterns. 
                                As a result, several features were redesigned, initiating an ongoing process of 
                                iterative UX improvements based on real-world usage.
                            </p>

                            <p className="mb-2">
                                The project also involved enhancing quality assurance by implementing Sentry for error 
                                tracking and Cypress for automated testing. Furthermore, contributions were made to 
                                the mobile app, built with React Native and Firebase, ensuring feature 
                                consistency across platforms.
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
                                Worked closely with the backend team to develop new features and improve existing ones.
                                Had a hand in the backend for some features using PHP and MySQL.
                            </p>

                            <p>
                                Participated on UX/UI field researching, conducted user testing, and user interviews.
                                Later on, applied the findings to a redesign of the web app.
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
                <div className="mb-10">
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
                                <em className="text-zinc-500 text-sm"> - English speaking</em>
                            </p>
                            <a
                                className="hover:text-green-600 duration-300"
                                href="https://www.linkedin.com/in/javier-torres-cortes"
                            >
                                linkedin.com/in/javier-torres-cortes
                            </a>
                            <a className="block hover:text-green-600 duration-300" href="mailto:javier@cheetrack.com">
                                javier@cheetrack.com
                            </a>
                        </div>

                        <div className="mb-6">
                            <p className="text-zinc-600 text-lg">
                                <strong>Felipe Vergara</strong> (CTO at Conectter & Cheetrack)
                                <em className="text-zinc-500 text-sm"> - English speaking</em>
                            </p>
                            <a
                                className="hover:text-green-600 duration-300"
                                href="https://www.linkedin.com/in/felipe-vergara-4029104a"
                            >
                                linkedin.com/in/felipe-vergara-4029104a
                            </a>
                            <a className="block hover:text-green-600 duration-300" href="mailto:felipe@cheetrack.com">
                                felipe@cheetrack.com
                            </a>
                        </div>

                        <div className="mb-6">
                            <p className="text-zinc-600 text-lg">
                                <strong>Sergio Bustamante</strong> (Dev Ops and Lead Dev at Cheetrack)
                                <em className="text-zinc-500 text-sm"> - English speaking</em>
                            </p>
                            <a
                                className="hover:text-green-600 duration-300"
                                href="https://www.linkedin.com/in/bustamantemsergio"
                            >
                                linkedin.com/in/bustamantemsergio
                            </a>
                            <a className="block hover:text-green-600 duration-300" href="mailto:sergio@cheetrack.com">
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
            <div className="mt-20">
                <a
                    className="px-6 py-2 w-fit block m-auto border-2 border-black duration-500 hover:text-white hover:bg-zinc-700"
                    href="curriculum.pdf"
                >
                    Download PDF
                </a>
            </div>
        </div>
    )
}
