import Image from "next/image";
import vsimage from "@/app/lib/images/vsimage.jpg";

export default function Home() {
  return (
    // <div className="bg-gradient-to-r from-blue-400 via-red-400  min-h-screen">
    <div className="bg-blue-900 min-h-screen">

      <main className="flex flex-col gap-8 items-center sm:items-center py-10 px-4">
        {/* Logo */}
        <Image
          className="dark:invert mt-5 bg-gradient-to-r from-gray-500 to-blue-900 p-2"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Introduction Text */}
        <ul className="text-sm md:text-lg bg-gradient-to-r from-gray-500 to-blue-500 text-center font-[family-name:var(--font-geist-mono)] text-white">
          <li className="  w-full md:w-1/2 text-end underline mt-2 mb-5">
            <span className="font-semibold pr-2">Class # 9 -- Assignment </span>
            <p className="text-sm pr-2">Ather Ali Siddiqui (Roll No : 193575)</p>
          </li>
          <li className="font-medium">
          a responsive layout with two cards in the first row and three cards in the second row using Flexbox, Tailwind CSS classes are used to make it responsive.
          </li>
        </ul>

        {/* 2 Card Section */}
        <div className="w-full flex flex-wrap justify-around items-center p-4">
          {/* First card - AI Developer */}
          <div className="bg-gradient-to-r from-gray-500 to-blue-500 min-h-96 w-full sm:w-full md:w-1/3 my-1 p-6 rounded-lg shadow-xl">
            <h1 className="text-center text-white font-bold text-xl mb-2">AI Developer</h1>
            <ul className="list-disc pl-4 text-gray-900 ">
              <li>AI Developers design, implement, and train machine learning models to solve complex problems like image recognition, language processing, and decision-making systems.</li>
              <li>They specialize in building autonomous systems, predictive models, and other AI-driven technologies that learn and evolve over time.</li>
              <li>AI Developers can create algorithms for automating tasks like SEO, multi-language code generation, and even graphic design.</li>
            </ul>
          </div>

          <div className=" w-full md:w-1/5 my-1 shadow-xl">
          <img
            src={vsimage.src}
            // style={{ width: "100%", }}
            alt="V/S Image"
            className="h-44 w-full md:h-full md:rounded-full "
          />
          </div>

          {/* Second card - MERN Stack Developer */}
          <div className="bg-gradient-to-r from-gray-500 to-blue-500 min-h-96  w-full sm:w-full md:w-1/3  my-1 p-6 rounded-lg shadow-xl">
            <h1 className="text-center text-white font-bold text-xl mb-2">MERN Stack Developer</h1>
            <ul className="list-disc pl-4 text-gray-900 ">
              <li>MERN Stack Developers build dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>They focus on both the front-end (React) and back-end (Node.js, Express), creating full-stack applications.</li>
              <li>They can integrate AI into web apps, they generally do not create complex AI models or algorithms themselves.</li>
            </ul>
          </div>

        </div>

        {/* 3 Card Section */}

        <p className="w-full lg:w-1/2 text-center mx-auto text-blue-200 underline font-bold">
          Here are the top 3 technologies that software developers should keep an eye on,
          as they are expected to have a significant impact on the job market.
          If developers don’t stay updated with these trends, they risk falling behind in
          their careers:</p>

        <div className="w-full flex flex-wrap justify-around p-4">
          {/* First card - AI and ML */}
          <div className="bg-gradient-to-r from-gray-500 to-blue-500 w-full sm:w-full md:w-1/2 lg:w-1/4 my-1 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <h1 className="text-center text-white font-bold text-xl mb-2">Artificial Intelligence (AI) and Machine Learning (ML)</h1>
            <p className="text-center text-gray-900  mb-2">AI and ML are revolutionizing industries by automating tasks, analyzing large datasets, and improving decision-making. Developers who don’t understand how to implement or leverage AI/ML in applications may find themselves at a disadvantage.</p>
            <h2 className="font-semibold text-gray-900 ">Key Areas to Learn:</h2>
            <ul className="list-disc pl-4 text-gray-900 ">
              <li>Frameworks: TensorFlow, PyTorch, Scikit-learn</li>
              <li>Tools: Data manipulation with Python (Pandas, NumPy)</li>
              <li>Applications: NLP, computer vision, recommendation systems</li>
            </ul>
          </div>

          {/* Second card - Cloud Computing */}
          <div className="bg-gradient-to-r from-gray-500 to-blue-500 w-full sm:w-full md:w-1/2 lg:w-1/4 my-1 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <h1 className="text-center text-white font-bold text-xl mb-2">Cloud Computing</h1>
            <p className="text-center text-gray-900  mb-2">Cloud computing is rapidly replacing traditional on-premises solutions, and platforms like AWS, Google Cloud, and Microsoft Azure dominate the infrastructure space. Developers need to be proficient in cloud technologies to stay relevant.</p>
            <h2 className="font-semibold text-gray-900 ">Key Areas to Learn:</h2>
            <ul className="list-disc pl-4 text-gray-900 ">
              <li>Cloud Services: Serverless architectures, cloud storage, virtual machines</li>
              <li>DevOps Tools: Docker, Kubernetes, Terraform, CI/CD pipelines</li>
              <li>Security: Understanding cloud security best practices</li>
            </ul>
          </div>

          {/* Third card - Blockchain and DLT */}
          <div className="bg-gradient-to-r from-gray-500 to-blue-500 w-full lg:w-1/4 my-1 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
            <h1 className="text-center text-white font-bold text-xl mb-2">Blockchain and Distributed Ledger Technology (DLT)</h1>
            <p className="text-center text-gray-900  mb-2">Blockchain technology is not just about cryptocurrency; it’s expanding into areas like supply chain management, finance, digital identity, and more. Developers who are familiar with blockchain can tap into the growing demand for decentralized applications (dApps).</p>
            <h2 className="font-semibold text-gray-900 ">Key Areas to Learn:</h2>
            <ul className="list-disc pl-4 text-gray-900 ">
              <li>Smart Contracts: Learn Solidity for Ethereum and other platforms</li>
              <li>Blockchain Development: Work with Ethereum, Polkadot, and Solana</li>
              <li>Cryptography: Knowledge of encryption and security principles</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center bg-gradient-to-r from-gray-500 to-blue-500 p-4 mt-10">

        <a
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="bg-white "

          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className=" bg-white  "

          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="bg-white rounded-full"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
