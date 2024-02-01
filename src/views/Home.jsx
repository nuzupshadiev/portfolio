export default function Home() {
    return (
        <div className={"flex flex-col h-full mb-24 justify-center max-w-[1000px] w-full"}>
            <span className={"accent text-[14px] font-monospace mb-4"}>Hi, my name is</span>
            <h1 className={"text-6xl lg:text-7xl font-[600] slate mb-2"}>Nuzup Shadiev</h1>
            <h2 className={"text-4xl md:text-5xl lg:text-7xl font-[600] opacity-60 slate tracking-tight"}>I am a software engineer.</h2>
            <p className={"py-8 slate text-md leading-7 opacity-60 max-w-[600px]"}>
                I'm a computer science student at KAIST, South Korea, majoring in computer science and minoring in business and technology management. As a full-stack software engineer, I'm dedicated to building outstanding digital experiences through hands-on projects and continuous skill development.
            </p>
            <a href={"/contact"} className={"accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"}>
                Get in touch with me
            </a>
        </div>
    )
}
