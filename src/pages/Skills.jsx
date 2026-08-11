import {
  Languages,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import { technicalSkills, softSkills } from "@/data/skills";
import PageTransition from "@/components/PageTransition";

const getStatusVariant = (status) => {
  switch (status) {
    case "Comfortable":
      return "default";

    case "Familiar":
      return "secondary";

    default:
      return "outline";
  }
};

export default function Skills() {
  return (
    <PageTransition>
      <div >

        {/* Technical Skills */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <p className="mt-2 text-muted-foreground">
              My current frontend development toolkit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((category) => {
              const Icon = category.icon;

              return (
                <Card
                  key={category.title}
                  className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="font-medium">{skill.name}</span>

                          <Badge
                            variant={getStatusVariant(skill.status)}
                            className="text-xs"
                          >
                            {skill.status}
                          </Badge>
                        </div>

                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Soft Skills</h2>

            <p className="mt-2 text-muted-foreground">
              Skills that help me work effectively and grow as a developer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {softSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <Card
                  key={skill.title}
                  className="transition-colors hover:border-primary/40"
                >
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{skill.title}</h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Languages */}
        <section className="mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Languages</h2>
          </div>

          <Card>
            <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Languages className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-semibold">English</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Comfortable reading technical documentation and
                    communicating in English.
                  </p>
                </div>
              </div>

              <Badge variant="secondary" className="w-fit">
                IELTS: 7.0
              </Badge>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageTransition>

  );
}