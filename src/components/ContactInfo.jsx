import {
    Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import InfoItem from "@/components/InfoItem";

const ContactInfo = () => {
  return (
    <div>
    <h2 className="text-2xl font-semibold">Get in touch</h2>

    <p className="mt-3 max-w-md leading-7 text-muted-foreground">
        I&apos;m currently open to internship opportunities and
        would be happy to discuss projects, collaborations, or other
        opportunities.
    </p>

    <div className="mt-8 space-y-4 grid gap-2">
        <InfoItem
        icon={<Mail />}
        label="Email"
        value="tai.luutrien@gmail.com"
        href="mailto:tai.luutrien@gmail.com"
        />

        <InfoItem
        icon={<FaGithub />}
        label="Github"
        value="github.com/tailuutrien"
        href="https://github.com/tailuutrien"
        />

        <InfoItem
        icon={<FaLinkedin />}
        label="LinkedIn"
        value="linkedin.com/in/trientailuu"
        href="https://www.linkedin.com/in/trientailuu"
        />
    </div>
    </div>
  )
}

export default ContactInfo