import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Requiem Creatif</title>
        <meta name="description" content="Full stack development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className=" text-center p-6 mt-20">
          <div className="text-7xl font-bold uppercase lg:text-9xl ">
            {/* <h1>Frontend Development</h1> */}
            <h1>Requiem Creatif</h1>
          </div>

          <br />
          <div className=" lg:px-20 lg:max-w-6xl mx-auto">
            <p>
              Based in Malta, Alain is passionate about coding and design, and has a particular
              interest in game development. Currently, Alain is working on his first indie game,
              which showcases his creativity and technical skills. In addition to his web
              development and game development pursuits, Alain has a strong eye for aesthetics and
              is skilled in creating visually appealing and user-friendly web applications.
            </p>
          </div>

          <br />
          <button className=" w-full border bg-black text-white rounded-lg px-6 py-3 lg:w-1/6">
            {" "}
            About Me
          </button>
        </div>
      </main>
    </>
  );
}
