import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { projects, technologies } from "@/data/projects";
import PageTransition from "@/components/PageTransition";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredProjects = projects
  .filter((project) => 
    project.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((project) =>
    selectedTags.length === 0 || selectedTags.every((tag) => project.technologies.includes(tag))
  );
  
  return (
    <PageTransition>
      <div>
        <div className="items-center justify-between gap-6 md:flex-row md:gap-0 mb-4">
          <Input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={"mb-2 border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"}
          />
          <Combobox
            items={technologies}
            multiple
            value={selectedTags}
            onValueChange={setSelectedTags}
            className="w-full max-w-md"
          >
            <ComboboxChips>
              <ComboboxValue>
                {selectedTags.map((tag) => (
                  <ComboboxChip key={tag}>
                    {tag}
                  </ComboboxChip>
                ))}
              </ComboboxValue>

              <ComboboxChipsInput placeholder="Filter by tags..." />
            </ComboboxChips>

            <ComboboxContent>
              <ComboboxEmpty>No tag found.</ComboboxEmpty>

              <ComboboxList>
                {(tag) => (
                  <ComboboxItem key={tag} value={tag}>
                    {tag}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        

        {/* Projects */}
        <section className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-2xl">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology} variant="secondary">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Links */}
              <CardFooter className="flex gap-3">
                <Button variant="outline" >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>

                {project.demo && (
                  <Button >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )
                || (
                  <Tooltip>
                    <TooltipTrigger render={
                      <Button disabled>
                        Disabled 
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    } />
                    <TooltipContent>
                      Haven&apos;t deployed yet. Please check back later.
                    </TooltipContent>
                  </Tooltip>
                )}
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </PageTransition>
  );
}