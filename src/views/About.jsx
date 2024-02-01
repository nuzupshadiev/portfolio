export default function About() {
    return (
        <>
            <div className={"flex flex-col text-md text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>01.</span><span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About me</span>
                </div>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Hello, I'm an undergraduate student at KAIST, majoring in computer science and minoring in business and technology management. I'm currently a software engineer at Calici, a bioinformatics company focused on revolutionizing drug development through AI technology. At Calici, we've developed Pharmaco-Net, a web-based cloud platform that utilizes AI to analyze big data and predict complex protein structures, ultimately contributing to efficient drug development. I'm passionate about being part of a team dedicated to creating a safer society and providing better treatment options for patients.
                </p>
                {/* <p className={"dark-slate w-full mb-4 leading-7"}>
                    Initiating with Python fast-forward to today, I have added C, Java, JavaScript, React, SQL and many other tools to my skill set and now learning new frameworks and technologies . My main focus these days is exploring my interests like data science and machine learning, while continuously improving as a full stack developer.
                </p> */}
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Here are a few technologies I’ve been working with recently:
                </p>
                <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                    <li>Javascript / Typescript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>
            </div>
        </>
    )
}
