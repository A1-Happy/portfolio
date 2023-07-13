// import { serverIsWorkingAction } from "./_actions";
import ALink from "./Components/ALink";

export default function Home() {
  // serverIsWorkingAction();
  return (
    <div className="mt-40 mx-40 jost">
      <div>HEY I AM <span className="me-1"></span> <span className="font-bold text-2xl">HAPPY</span></div>
      <div>Web and App Developer</div>

      <div className="mt-20 flex justify-between lg:gap-[400px] lg:justify-start items-start">
        <ALink link = "/projects">→ My Projects</ALink>
        <ALink link = "/about">→ About Me</ALink>
      </div>
    </div>
  );
}
