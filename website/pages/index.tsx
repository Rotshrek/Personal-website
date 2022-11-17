import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Andrés Sanhueza</title>
                <meta name="description" content="FrontEnd Developer" />
            </Head>

            <main className="bg-zinc-900 text-white flex h-screen">
                <div className="my-auto ml-20">
                    <h1 className="font-bold text-5xl mb-3 animate-passive-glitch hover:animate-hover-glitch">
                        Andrés Sanhueza
                    </h1>
                    <p className="text-lg">FrontEnd Developer</p>
                </div>
            </main>

            <footer></footer>
        </div>
    )
}
