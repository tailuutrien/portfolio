import React from "react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Small introduction */}
          <p className="text-lg font-medium text-primary">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Trien Tai Luu
          </h1>

          {/* Position */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
            Frontend Developer Intern
          </h2>

          {/* Short description */}
          <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm a Computer Science student passionate about building clean,
            responsive, and user-friendly web experiences with React and
            modern frontend technologies.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-2">
            <Button size="lg">
              <Link to="/projects">
                View Projects
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">
                View CV
              </a>
            </Button>
          </div>
        </div>

        {/* Right - Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="avatar.jpg"
                alt="Trien-Tai Luu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
    
  );
};

export default Homepage;