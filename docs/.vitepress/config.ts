import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dan Do",
  description: "Dan Do's Portfolio",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Projects', link: '/projects/punko.md' },
      { text: 'Contact Me', link: 'mailto: dannxd3@gmail.com', target: "_blank" }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Punko', link: '/projects/punko.md' },
          { text: 'Nihongo Quiz', link: '/projects/nihongo-quiz.md' },
          { text: 'Peer Rater (SCHOOL)', link: '/projects/peer-rater.md' },
          { text: 'PetPals (SCHOOL)', link: '/projects/petpals.md' }
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'Hobbies', link: '/projects/hobbies.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiaDd' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dan-do-dxd3' }
    ],

    footer: {
      message: 'Built with Vitepress and Vue',
      copyright: ''
    }

  }
})
