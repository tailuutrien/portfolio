import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  Users,
  Download,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import InfoItem from "@/components/InfoItem";

const Resume = () => {
  return (
    <PageTransition>
      <div>

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 border-b pb-8 md:flex-row md:items-end md:justify-between">
          <div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl ">
              Trien Tai Luu
            </h1>

            <p className="text-xl text-muted-foreground">
              Frontend Developer Intern
            </p>
            
          </div>

          <Button>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} 
              className="flex" 
              target="_blank" 
              rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="space-y-12">

          {/* ================= PERSONAL INFORMATION ================= */}
          <section>
            <SectionTitle title="Personal Information" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <InfoItem
                icon={<Calendar />}
                label="Date of Birth"
                value="08 / 06 / 2006"
              />

              <InfoItem
                icon={<User />}
                label="Gender"
                value="Male"
              />

              <InfoItem
                icon={<MapPin />}
                label="Location"
                value="Ho Chi Minh City, Vietnam"
                href={"https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam"}
              />

              <InfoItem
                icon={<Mail />}
                label="Email"
                value="tai.luutrien@gmail.com"
                href="mailto:tai.luutrien@gmail.com"
              />

              <InfoItem
                icon={<Phone />}
                label="Phone"
                value="+84 942 808 454"
                href="tel:+84942808454"
              />

            </div>
          </section>

          {/* ================= CAREER OBJECTIVE ================= */}
          <section>
            <SectionTitle title="Career Objective" />

            <p className="max-w-4xl leading-7 text-muted-foreground">
              I am a Computer Science student interested in frontend
              development and building clean, responsive, and user-friendly
              web applications. I am looking for a Frontend Developer
              Internship where I can strengthen my React and JavaScript skills,
              contribute to real-world products, and gain practical experience
              working in a professional development team.
            </p>
          </section>

          {/* ================= EDUCATION ================= */}
          <section>
            <SectionTitle title="Education" />

            <TimelineItem
              icon={<GraduationCap />}
              title="Ho Chi Minh City University of Technology"
              subtitle="Bachelor of Computer Science"
              date="2024 — Present"
            >
              <div className="space-y-1 text-muted-foreground">
                <p>GPA: 3.9 / 4.0</p>
                <p>
                  Relevant coursework: Data Structures & Algorithms,
                  Object-Oriented Programming, Database Systems, Web
                  Development.
                </p>
              </div>
            </TimelineItem>
          </section>

          {/* ================= ACTIVITIES ================= */}
          <section>
            <SectionTitle title="Activities & Volunteering" />

            <TimelineItem
              icon={<Users />}
              title="OISP Camp 2025 Organizing Committee"
              subtitle="Art & Stage Team Supervisor"
              date="2025"
            >
              <p className="text-muted-foreground">
                Supervised the Art & Stage team, coordinating event preparation,
                stage setup, and team activities to ensure smooth and successful
                event execution.
              </p>
            </TimelineItem>

            <TimelineItem
              icon={<Users />}
              title="OISP Camp 2024 Organiser Committee"
              subtitle="Art & Stage Team Leader"
              date="2024"
            >
              <p className="text-muted-foreground">
                Contributed to the Art & Stage team in organizing OISP Camp 2024,
                supporting event preparation and helping ensure the event's successful
                execution.
              </p>
            </TimelineItem>
          </section>

        </div>
      </div>
    </PageTransition>
    
  );
};


/* =========================================================
   Reusable Components
   ========================================================= */

const SectionTitle = ({ title }) => {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight">
      {title}
    </h2>
  );
};


const TimelineItem = ({
  icon,
  title,
  subtitle,
  date,
  children,
}) => {
  return (
    <div className="flex gap-5">
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {React.cloneElement(icon, {
          className: "h-5 w-5",
        })}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <h3 className="text-lg font-semibold">
              {title}
            </h3>

            <p className="text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <span className="text-sm text-muted-foreground">
            {date}
          </span>
        </div>

        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Resume;