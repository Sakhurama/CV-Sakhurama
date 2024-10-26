"use client";

import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      title: "Creative Designer",
      company: "Skolmi",
      period: "Aug 2018 - May 2024",
      duration: "(5 years)"
    },
    {
      title: "Frontend Dev Jr",
      company: "Skolmi",
      period: "May 2024 - Present",
      duration: "(6 months)"
    },
    {
      title: "Frontend Dev Jr",
      company: "Medusa Lab",
      period: "Jun 2024 - Sep 2024",
      duration: "(3 months)"
    }
  ];

  const technologies = [
    { name: "Adobe Illustrator", image: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" },
    { name: "Photoshop", image: "https://upload.vectorlogo.zone/logos/adobe_illustrator/images/57bdc1fd-fa3d-4a30-98b9-baaac55e3e15.svg" },
    { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    { name: "GitHub", image: "https://upload.vectorlogo.zone/logos/github/images/47bfd2d4-712f-4dee-9315-f99c611b7598.svg" },
    { name: "Git", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    { name: "React", image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Next.js", image: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "TypeScript", image: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { name: "JavaScript", image: "https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg" },
    { name: "HTML", image: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
    { name: "CSS", image: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
    { name: "Tailwind CSS", image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  ];
  

  const projects = [
    {
      title: "Admin Deliverys",
      description: "Shipping Manager, CRUD, API Google Maps. (Use any email and password)",
      technologies: ["Next Js", "TypeScript", "React", "API", "Tailwind"],
      link: "https://admindeliverys.netlify.app/",
    },
    {
      title: "PokeGame",
      description: "Pokemon game to practice the bases of Javascript.",
      technologies: ["Javascript", "HTML", "CSS", "Vanilla"],
      link: "https://mokepon-app.netlify.app/",
    },
    {
      title: "MiClima",
      description: "App Metereologica, API consumption in React.",
      technologies: ["React", "Next Js", "TypeScript", "API"],
      link: "https://mi-climapp.netlify.app/",
    },
    {
      title: "Calcular Gastos",
      description: "Solving a personal problem. Calculate personal expenses and reforce Javascript bases.",
      technologies: ["Javascript", "HTML", "CSS", "Vanilla"],
      link: "https://calculagastos.netlify.app/",
    },
    {
      title: "Sheep Counter",
      description: "Can't sleep? This app is for you.",
      technologies: ["Javascript", "HTML", "CSS", "Vanilla"],
      link: "https://counteroveja.netlify.app/",
    },
    {
      title: "FAQ Card",
      description: "Drop and down in Javascript. Challenge of Frontend Mentor.",
      technologies: ["Javascript", "HTML", "CSS", "Vanilla"],
      link: "https://faqddown.netlify.app",
    },
  ];

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Avatar className="w-36 h-36 mx-auto mb-8">
            <AvatarImage src="/img/profile/daniel1.png" />
            <AvatarFallback>Daniel Romero</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Daniel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend Junior Developer and Designer
          </p>
          <div className="flex justify-center gap-4">
            <Link href="https://wa.me/573206215191" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Image src="/img/icons/whatsapp.svg" alt="whatsapp icon" width={16} height={16} className="mr-2" />
                Contact Me
              </Button>
            </Link>

            <Link href="https://github.com/Sakhurama" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                  <Github className="mr-2 h-4 w-4" /> View Projects
              </Button>
            </Link>
          </div>
        </div>
        <a href="#about">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce mb-11">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </div>
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Designer with a strong foundation in UI and UX, and a 
                  Junior Frontend Developer. I’m constantly learning and 
                  applying new skills every day. I have experience building 
                  web projects with React and Next.js, and possess solid 
                  knowledge in HTML and CSS.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                {experiences.map((experience, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center border-b border-red pb-4"
                  >
                    <div>
                      <p>{experience.title}</p>
                      <p className="text-muted-foreground">{experience.company}</p>
                    </div>
                    <div className="text-center">
                      <p>{experience.period}</p>
                      <p className="text-muted-foreground">{experience.duration}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <Card key={tech.name} className="text-center">
                <CardHeader className="flex items-center justify-center">
                  <Image src={tech.image} alt={`${tech.name} icon`} width={40} height={40} />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="flex-grow">
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon">
              <a
                href="https://github.com/Sakhurama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a
                href="https://www.linkedin.com/in/daniel-romero-758585184/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a 
                href="https://wa.me/573206215191"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/img/icons/whatsapp.svg" alt="whatsapp icon" width={20} height={20} />
              </a>
            </Button>
          </div>
          <Separator className="mb-8" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. A programar se aprende programando.
          </p>
        </div>
      </footer>
    </main>
  );
}