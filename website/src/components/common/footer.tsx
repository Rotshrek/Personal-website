"use client"

export default function Footer() {
    return (
        <footer>
            <div id="contact" className="bg-zinc-900 text-white p-12 md:p-20">
                <div>
                    <p className="font-bold">Address</p>
                    <p className="mb-4">Gjøvik, Norway</p>

                    <p className="font-bold">Phone</p>
                    <a href="tel:+4746548962" className="cursor-pointer hover:text-green-600 duration-300">
                        46 54 89 62
                    </a>

                    <p className="mt-4 font-bold">Email</p>
                    <a href="mailto:trazo263@gmail.com" className="hover:text-green-600 duration-300">
                        trazo263@gmail.com
                    </a>

                    <p className="mt-4 font-bold">LinkedIn</p>
                    <a
                        href="https://www.linkedin.com/in/aisanhueza/?locale=en_US"
                        className="ursor-pointer hover:text-green-600 duration-300"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/aisanhueza
                    </a>
                </div>
            </div>
        </footer>
    )
}
