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
  title: "The Marketer Who Codes. The Engineer Who Sells.",
  shortBio: "Most marketers guess. Most engineers don't care about revenue. I'm the rare intersection — a CS engineer who reads conversion psychology like code, and a growth marketer who ships his own tools.",
  longBio: "There's a specific kind of problem that breaks most teams: the gap between what the data says and what the campaign actually does. I was born into that gap. Finishing a B.E. in Computer Science (AI/ML) at CBIT while simultaneously completing a Postgraduate in Digital Marketing at Digital Nest — I don't just understand both worlds, I build in both simultaneously. Predictive pipelines that feed your ad targeting. Neuromarketing principles baked into the UX your customers never consciously notice. Conversion funnels that work because they're engineered, not guessed.",
  location: "Hyderabad, Telangana, India",
  email: "iiampraneeth@gmail.com",
  phone: "+91 8367399099",
  avatarUrl: "/avatar.jpg",
  roles: [
    "Precision & Intent",
    "Code & Conversion",
    "Data & Human Psychology",
    "AI & Campaign Science",
    "Systems & Stories"
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/praneeth-chintala-70a6053b5",
      icon: "Linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/iiampraneeth",
      icon: "Github"
    },
    {
      name: "Twitter/X",
      url: "https://x.com/iiampraneeth",
      icon: "Twitter"
    },
    {
      name: "Email",
      url: "mailto:iiampraneeth@gmail.com",
      icon: "Mail"
    }
  ]
};
