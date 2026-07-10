export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  shortBio: string;
  longBio: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
  roles: string[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Praneeth Chintala",
  title: "Growth Engineer & AI/ML Developer",
  shortBio: "Digital Marketer (PGP '26, Digital Nest) with a Computer Science Engineering (AI & ML) degree from CBIT, engineering high-converting, cognitively compelling brand experiences.",
  longBio: "I bridge the gap between advanced computer science engineering and full-funnel digital marketing. Pursuing my B.E. in Computer Science (AI/ML) from CBIT alongside a Postgraduate Program in Digital Marketing from Digital Nest School of Business, I architect predictive data pipelines, high-velocity ad campaigns, programmatic SEO matrices, and conversion funnels designed per neuromarketing principles.",
  location: "Hyderabad, Telangana, India",
  email: "iiampraneeth@gmail.com",
  phone: "+91 8367399099",
  avatarUrl: "<PLACEHOLDER_AVATAR_URL>",
  roles: [
    "Digital Marketing Strategist",
    "AI/ML Engineer",
    "Growth & CRO Specialist",
    "Full Stack Developer",
    "Technical Marketer"
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/praneeth-chintala-70a6053b5",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "<PLACEHOLDER_GITHUB_URL>",
      icon: "Github"
    },
    {
      name: "Twitter/X",
      url: "<PLACEHOLDER_TWITTER_URL>",
      icon: "Twitter"
    },
    {
      name: "Email",
      url: "mailto:iiampraneeth@gmail.com",
      icon: "Mail"
    }
  ]
};
