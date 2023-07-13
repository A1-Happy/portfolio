"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import QuizApp from "@/public/QuizApp.png";
import Image from "next/image";
import PrepEat from "@/public/PrepEat.png"
import GeolocationAttendenceApp from "@/public/GeolocationAttendenceApp.png"
import Link from "next/link";
import ALink from "../Components/ALink";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(undefined);

  const projects = [
    {
      id: 1,
      name: "njs-quiz app",
      description: "FullStack",
      image: QuizApp,
      url: "https://njs-quiz.vercel.app/",
    },
    {
      id: 2,
      name: "PrepEat",
      description: "Mobile App + Backend",
      image: PrepEat,
      url: "",
    },
    {
      id: 3,
      name: "Geolocation Attendance App",
      description: "App + FullStack",
      image: GeolocationAttendenceApp,
      url: "",
    },
  ];

  return (
    <div className="flex flex-col gap-10 mx-16 mt-16">
      <div className="flex justify-between items-center">
        <ALink link="/">← Go Back</ALink>
        <Link href="/"><div className="damion text-xl">Happy</div></Link>
      </div>

      <div className="flex gap-5 justify-between">
        <div className="flex flex-col flex-1 gap-4">
          {/* image card */}
            {selectedProject ? (
              <div className="w-full flex flex-col gap-6">
                <Card className="overflow-hidden">
                <Image className="mx-auto" draggable="false" src={selectedProject.image} alt="image" />
                </Card>
                {selectedProject.url ? (<a href={selectedProject.url} target="_blank">
                  <Card className="p-2 px-4">{selectedProject.url}</Card>
                </a>): null}
              </div>
            ) : (<Card>
              <div className="p-2 px-4">
                Click on a project to see the project details
              </div></Card>
            )}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Card>
            <div className="flex-1 flex justify-between gap-3 p-3">
              {/* Title */}
              <div className="font-bold text-xl">PROJECTS</div>

              {/* Number of projects */}
              <div>{projects.length}</div>
            </div>
          </Card>
          <Card className=" overflow-hidden cursor-pointer">
            {projects.map((project) => {
              return (
                <div
                  onClick={() => {
                    setSelectedProject(project);
                  }}
                  key={project.id}
                  className={"flex gap-3 justify-between p-2 px-4 hover:bg-blue-900 "+ (selectedProject?.id === project.id ? "bg-blue-800" : "")}
                >
                  <div className="flex-1">{project.name}</div>
                  <div className="flex-1">{project.description}</div>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
}
