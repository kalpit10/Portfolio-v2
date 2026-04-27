import React, { useEffect, useState } from "react";
import "../Stylesheet/Awards.css";
import { FaAws, FaTrophy, FaMedal, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import JAMImage from "../images/JAM.png";
import CloudPHLSummer from "../images/PHL_Cloud_Summer2025.png";
import CloudPHLFall from "../images/PHL_Cloud_Fall2025.png";
import CyberPHLFall from "../images/PHL_Cybersecurity_Fall2024.png";
import CyberPHLWinter from "../images/PHL_Cybersecurity_Winter2025.png";
import AwsSaaBadge from "../images/aws-certified-solutions-architect-associate (1).png";

const awsSaaCredlyUrl =
  "https://www.credly.com/badges/e72f6291-cf8f-4bc6-930a-263fdacb98dc/public_url";

const awards = [
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect - Associate",
    meta: "Amazon Web Services Training and Certification",
    timeframe: "2026",
    icon: <FaAws />,
    covers: [
      {
        src: AwsSaaBadge,
        alt: "AWS Certified Solutions Architect - Associate badge",
        label: "Verified on Credly",
        href: awsSaaCredlyUrl,
        variant: "badge",
      },
    ],
    description:
      "Earned the AWS Solutions Architect - Associate credential, validating practical knowledge of secure, resilient, high-performing, and cost-optimized cloud architecture on AWS.",
    highlights: [
      "Validated architecture skills across compute, networking, storage, security, reliability, and cost optimization.",
      "Strengthens the cloud foundation behind production-style AWS projects, Terraform deployments, and DevOps automation work.",
    ],
    tags: ["AWS", "Solutions Architect", "Cloud Architecture", "Certification"],
    link: {
      href: awsSaaCredlyUrl,
      label: "View verified Credly badge",
    },
  },
  {
    id: "aws-jam-2024",
    title: "1st Place | AWS Summit JAM",
    meta: "AWS Summit | Team Jam Challenge",
    timeframe: "2025",
    icon: <FaTrophy />,
    covers: [
      {
        src: JAMImage,
        alt: "AWS Summit JAM 2025 winning certificate",
        label: "AWS Summit JAM 2025",
      },
    ],
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
    covers: [
      {
        src: CloudPHLSummer,
        alt: "President's Honour List - Cloud Architecture Summer 2025",
        label: "Summer 2025",
      },
      {
        src: CloudPHLFall,
        alt: "President's Honour List - Cloud Architecture Fall 2025",
        label: "Fall 2025",
      },
    ],
    description:
      "Recognized on the President's Honour List after graduating both semesters with a 4.0 / 4.0 GPA from Seneca's Cloud Architecture & Administration program, which focuses on production-grade cloud design.",
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
    covers: [
      {
        src: CyberPHLFall,
        alt: "President's Honour List - Cybersecurity Fall 2024",
        label: "Fall 2024",
      },
      {
        src: CyberPHLWinter,
        alt: "President's Honour List - Cybersecurity Winter 2025",
        label: "Winter 2025",
      },
    ],
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
  const [activeCover, setActiveCover] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveCover(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openCover = (cover) => setActiveCover(cover);
  const closeCover = () => setActiveCover(null);

  return (
    <section className="p-3 header app awards-section" id="awards">
      <div className="container py-5 px-3">
        <div className="awards-heading text-center">
          <p className="eyebrow">Certifications, Awards & Milestones</p>
          <h2 className="fw-bold dark-project-h1">CERTIFICATIONS & AWARDS</h2>
          <p className="section-lede">
            Verified credentials and recognition from industry events and
            academic showcases where cloud engineering, security, and teamwork
            delivered measurable impact.
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
              {award.covers && award.covers.length > 0 && (
                <>
                  {award.covers.length === 1 ? (
                    award.covers[0].href ? (
                    <a
                      className={`award-media-single ${
                        award.covers[0].variant === "badge"
                          ? "award-media-badge"
                          : ""
                      }`}
                      href={award.covers[0].href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={award.covers[0].label}
                    >
                      <img
                        src={award.covers[0].src}
                        alt={award.covers[0].alt}
                        loading="lazy"
                      />
                      <span className="award-media-label">
                        {award.covers[0].label}
                      </span>
                    </a>
                    ) : (
                      <button
                        className="award-media-single"
                        type="button"
                        onClick={() => openCover(award.covers[0])}
                      >
                        <img
                          src={award.covers[0].src}
                          alt={award.covers[0].alt}
                          loading="lazy"
                        />
                        <span className="award-media-label">
                          {award.covers[0].label}
                        </span>
                      </button>
                    )
                  ) : (
                    <div className="award-media-grid">
                      {award.covers.map((cover) => (
                        <button
                          key={cover.src}
                          type="button"
                          className="award-media-tile"
                          onClick={() => openCover(cover)}
                        >
                          <img src={cover.src} alt={cover.alt} loading="lazy" />
                          <span className="award-media-label">
                            {cover.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </>
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

      {activeCover && (
        <div className="award-lightbox" onClick={closeCover}>
          <div
            className="award-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeCover.src} alt={activeCover.alt} />
            {activeCover.label && (
              <p className="award-lightbox-label">{activeCover.label}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
