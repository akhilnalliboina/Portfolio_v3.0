module.exports = {
  author: "@akhilnalliboina",
  siteTitle: "Akhil Nalliboina | Portfolio",
  siteShortTitle: "Akhil",
  siteDescription: "A modern website with a clean yet expressive design.",
  siteUrl: "http://localhost:9000/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png",
  seoTitleSuffix: "Akhil Nalliboina",
  useCookieBar: true,
  googleAnalyticsTrackingId: "UA-165787709-1",
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fakhilnlb.hashnode.dev%2Frss.xml",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/akhilnalliboina/",
    },
    {
      name: "Blog",
      url: "https://dev.to/akhilnalliboina",
    },
    {
      name: "Github",
      url: "https://github.com/akhilnalliboina",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/akhilnlb",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Articles",
        url: "/#articles",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "Resume.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
