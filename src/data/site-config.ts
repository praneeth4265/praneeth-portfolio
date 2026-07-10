export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  avatarUrl: string;
  roles: string[];
  socials: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "<PLACEHOLDER_USER_NAME>",
  title: "<PLACEHOLDER_ROLE_TITLE>",
  shortBio: "<PLACEHOLDER_SHORT_BIO> Digital Marketer with a Computer Science Engineering UG and Digital Marketing PG, engineering high-converting, cognitively compelling brand experiences.",
  location: "<PLACEHOLDER_LOCATION>",
  email: "<PLACEHOLDER_EMAIL>",
  phone: "<PLACEHOLDER_PHONE>",
  avatarUrl: "<PLACEHOLDER_AVATAR_URL>",
  roles: [
    "Digital Marketer",
    "Growth Strategist",
    "CS Engineer",
    "Conversion Optimizer",
    "Technical Marketer"
  ],
  socials: [
    {
      name: "LinkedIn",
      url: "<PLACEHOLDER_LINKEDIN_URL>",
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
      url: "mailto:<PLACEHOLDER_EMAIL>",
      icon: "Mail"
    }
  ]
};
