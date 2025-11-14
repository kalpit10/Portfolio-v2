import React from "react";
import "../Stylesheet/Awards.css";
import { FaTrophy, FaMedal, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import JAMImage from "../images/JAM.png";
import CloudPHL from "../images/PHL_Cloud.png";
import CyberPHL from "../images/PHL_Cybersecurity.png";

const awards = [
  {
    id: "aws-jam-2024",
    title: "1st Place | AWS Summit JAM",
    meta: "AWS Summit | Team Jam Challenge",
    timeframe: "2025",
    icon: <FaTrophy />,
    cover: JAMImage,
    description:
      "Topped the AWS Summit JAM leaderboard by stabilizing two serverless GenAI missions: repairing the Transcribe->Translate->Bedrock voice pipeline and rebuilding the Larry librarian chatbot so it understood intent and reached live library APIs.",
    highlights: [
      "Fixed Lambda wiring and prompts so multilingual voice transcripts, translations, and summaries flowed end-to-end without hallucinations.",
      "Rewired the Larry chatbot orchestration so Bedrock parsed intent correctly and Lambda executed live search + reservation APIs.",
      "Improved reliability of the GenAI workflows, enabling the team to complete JAM challenges like these and secure the win.",
      "Collaborated with Saima Anam Syed, Prasanth K Penuboina, and Sana Muhammad Ashraf; guided by Ashwin Bhargava and Aditya Mysore.",
    ],
    tags: ["AWS JAM", "CloudOps", "Team Award", "Innovation"],
    link: {
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7369781102091235330/",
      label: "LinkedIn recap",
    },
  },
  {
    id: "phl-cloud",
    title: "President's Honour List | Cloud Architecture & Administration",
    meta: "Seneca Polytechnic | Presented by President David Agnew",
    timeframe: "Class of 2025",
    icon: <FaMedal />,
    cover: CloudPHL,
    description:
      "Recognized on the President's Honour List after graduating Semester - 1 with a 4.0 / 4.0 GPA from Seneca's Cloud Architecture & Administration program, which focuses on production-grade cloud design.",
    highlights: [
      "Designed secure microservice blueprints and hybrid landing zones that aligned with industry governance requirements.",
      "Delivered resilient architectures emphasizing automation, observability, and regulatory compliance (program learning outcomes 1-7).",
      "Collaborated on cloud migration projects, leveraging IaC and CI/CD pipelines to streamline deployments and enhance scalability.",
    ],
    tags: ["Cloud Architecture", "Seneca Polytechnic", "Academic Honour"],
    link: null,
  },
  {
    id: "phl-cyber",
    title: "President's Honour List | Cybersecurity & Threat Management",
    meta: "Seneca Polytechnic | Presented by President David Agnew",
    timeframe: "Class of 2024-25",
    icon: <FaMedal />,
    cover: CyberPHL,
    description:
      "Awarded the President's Honour List (4.0 / 4.0 GPA) for the Cybersecurity & Threat Management program after delivering secure-by-design solutions across VAPT, IR, and governance tracks.",
    highlights: [
      "Architected and documented defensive controls that map to Seneca's outcomes on security design, audits, and stakeholder communication.",
      "Recognized by President David Agnew for translating program outcomes 1-10 into tangible enterprise security playbooks.",
    ],
    tags: ["Cybersecurity", "Threat Management", "Academic Honour"],
    link: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Awards = () => {
  return (
    <section className="p-3 header app awards-section" id="awards">
      <div className="container py-5 px-3">
        <div className="awards-heading text-center">
          <p className="eyebrow">Awards & Milestones</p>
          <h2 className="fw-bold dark-project-h1">Awards & Achievements</h2>
          <p className="section-lede">
            Recognition from industry events and academic showcases where cloud
            engineering, security, and teamwork delivered measurable impact.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => (
            <motion.article
              key={award.id}
              className="award-panel"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {award.cover && (
                <div className="award-media">
                  <img
                    src={award.cover}
                    alt={`${award.title} certificate`}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="award-body">
                <div className="award-head">
                  <div className="award-icon">{award.icon}</div>
                  <div>
                    <div className="award-meta">{award.meta}</div>
                    <span className="award-timeframe">{award.timeframe}</span>
                  </div>
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-description">{award.description}</p>

                <ul className="award-highlights">
                  {award.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="award-tags">
                  {award.tags.map((tag) => (
                    <span key={tag} className="award-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                {award.link && (
                  <a
                    className="award-link icon-link"
                    href={award.link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={award.link.label}
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
