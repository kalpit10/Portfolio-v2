import React, { useEffect, useState } from "react";
import "../Stylesheet/Awards.css";
import {
  FaAws,
  FaExternalLinkAlt,
  FaLinkedinIn,
  FaMedal,
  FaNewspaper,
  FaTrophy,
} from "react-icons/fa";
import { motion } from "framer-motion";
import JAMImage from "../images/JAM.png";
import AWSJamSecondPosition from "../images/AWS_JAM_2nd_Position.png";
import CloudPHLSummer from "../images/PHL_Cloud_Summer2025.png";
import CloudPHLFall from "../images/PHL_Cloud_Fall2025.png";
import CyberPHLFall from "../images/PHL_Cybersecurity_Fall2024.png";
import CyberPHLWinter from "../images/PHL_Cybersecurity_Winter2025.png";
import AwsSaaBadge from "../images/aws-certified-solutions-architect-associate (1).png";
import TerraformWeeklyIssue280 from "../images/Terraform_Weekly_Newsletter_Issue_280.png";

const awsSaaCredlyUrl =
  "https://www.credly.com/badges/e72f6291-cf8f-4bc6-930a-263fdacb98dc/public_url";
const terraformWeeklyIssue280Url =
  "https://www.weekly.tf/p/issue-280-crossplane-vs-terraform-spaghetti-to-gitops-finops-guardrails-with-opa-the-open-agent";
const terraformWeeklyLinkedinPostUrl =
  "https://www.linkedin.com/posts/antonbabenko_terraform-weekly-newsletter-issue-280-share-7485030079928967168-xiX7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQM8GwBGpWqq6pEKclRv9Mh5Rqmcxx7Qio";

const awards = [
  {
    id: "terraform-weekly-issue-280",
    title: "Featured in Terraform Weekly Newsletter",
    meta: "Terraform Weekly Newsletter | Issue #280",
    timeframe: "2026",
    icon: <FaNewspaper />,
    covers: [
      {
        src: TerraformWeeklyIssue280,
        alt: "Terraform Weekly Newsletter feature for Issue 280",
        label: "Terraform Weekly Newsletter Issue #280",
        href: terraformWeeklyIssue280Url,
      },
    ],
    description:
      "The EKS GitOps rebuild article was featured in Terraform Weekly Newsletter Issue #280, highlighting the move from Terraform-managed Kubernetes workloads to a cleaner GitOps model with Terraform, ArgoCD, External Secrets Operator, and IRSA.",
    highlights: [
      "Recognized by Terraform Weekly Newsletter for practical infrastructure-as-code and GitOps engineering content.",
      "Featured article documents the production-grade rebuild of an Amazon EKS platform with clearer ownership boundaries and zero static credentials.",
    ],
    tags: ["Terraform Weekly Newsletter", "GitOps", "Amazon EKS", "ArgoCD"],
    links: [
      {
        href: terraformWeeklyIssue280Url,
        label: "Newsletter Issue #280",
        icon: <FaExternalLinkAlt />,
      },
      {
        href: terraformWeeklyLinkedinPostUrl,
        label: "LinkedIn Feature Post",
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: "aws-jam",
    title: "AWS JAM Cloud Challenge Awards",
    meta: "AWS Summit JAM 2025 + AWS User Group JAM April 2026",
    timeframe: "2025 - 2026",
    icon: <FaTrophy />,
    layout: "stacked-showcase",
    covers: [
      {
        src: JAMImage,
        alt: "First position at AWS Summit JAM 2025",
        label: "1st Position | AWS Summit JAM 2025",
      },
      {
        src: AWSJamSecondPosition,
        alt: "Second position at AWS User Group JAM April 2026",
        label: "2nd Position | AWS User Group JAM April 2026",
      },
    ],
    description:
      "Recognized across two AWS JAM competitions for solving cloud challenges in a timed, hands-on environment using AWS services including Amazon Bedrock, Lambda, CodePipeline, and other production-focused cloud capabilities.",
    highlights: [
      "Completed scenario-based missions that required fast troubleshooting, secure service integration, and practical cloud architecture decisions.",
      "Applied serverless, GenAI, automation, and CI/CD patterns under competition pressure while collaborating effectively in a team setting.",
    ],
    tags: ["AWS JAM", "Cloud Challenges", "Serverless", "GenAI"],
    link: null,
  },
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
    link: null,
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
          <h2 className="fw-bold dark-project-h1">ACHIEVEMENTS & CERTIFICATIONS</h2>
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
              className={`award-panel ${
                award.layout ? `award-panel-${award.layout}` : ""
              }`}
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
                    <div
                      className={`award-media-grid ${
                        award.layout === "stacked-showcase"
                          ? "award-media-stack"
                          : ""
                      }`}
                    >
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

                {award.links && (
                  <div className="award-links">
                    {award.links.map((link) => (
                      <a
                        key={link.href}
                        className="award-source-link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
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
