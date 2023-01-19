import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Joel O&apos;Connor</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-center">
                <h1 className="text-5xl font-bold text-purple-600">
                    Joel O&apos;Connor
                </h1>
            </main>
        </>
    );
}
