export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Gyde Help Center',
      description: 'Learn how to build product recommendation quizzes for your Shopify store with Gyde.',
    },
    theme: {
      customizable: false,
      color: 'Blue',
      radius: 0.5,
    },
    header: {
      title: 'Gyde Help Center',
      showTitle: true,
      darkModeToggle: false,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: false,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright Gyde © 2026',
      links: [],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
