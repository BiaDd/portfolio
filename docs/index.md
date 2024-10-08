---
# https://vitepress.dev/reference/default-theme-home-page
layout: home    

hero:
  name: Dan Do
  text: Software Developer.
  tagline: Fueling Innovation with Passion and Creativity.
  image:
    src: /bai-modified.png
    alt: Cartoon image of Dan
  actions:
    - theme: brand
      text: Contact Me
      link: "#contact"
features:
  - title: Projects 📚
    details: Interesting Ideas that I've worked on.
    link: "#projects"
  - title: About 👺
    details: Information about me!
    link: "#about"
  - title: Experience 🔥
    details: My professional experience.
    link: "#experience"
---


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme';

import { ref } from 'vue'

const tabList = ["Alarm.com", "University of Virginia", "HLAB", "Alarm.com"];
const coreMembers = [  {
    avatar: '/real-photo.png',
    links: [
      { icon: 'github', link: 'https://github.com/BiaDd' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dan-do-dxd3' }
    ],
    name: "Dan Do",
    title: "Software Developer"
  }];

const count = ref(0)
</script>
   

<div class="animated" name="about" id="about">
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>About Me</template>
      <template #lead>I like making beats and listening to jazz in my free time. Omlettes and egg fried rice are my best dishes but I also enjoy baking. I like to think of myself as a pro gamer but I'm kind of bad at videogames.</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="medium" :members="coreMembers" />
  </VPTeamPage>
</div>

<!-- Custom home layout -->
<div class="section" name="experience" id="experience">
  <h1 class="section-title">Experience</h1>
  <div class="app-tabs">
    <app-tabs :tabList="tabList">
      <template v-slot:tabPanel-1> 
        <h2>Full-Stack Software Engineer @ Alarm.com</h2>
        <p>- March 2023 - Present</p>
        <ul class="job-content">
          <li>Collaborated on 6 full-stack Ember.js WebViews for Alarm’s native applications</li>
          <li>Remodeled customer device settings website architecture to achieve a 15% reduction in load time</li>
          <li>Created shared utilities for C# Unit tests and front-end Mirage acceptance tests</li>
        </ul>
      </template>
      <template v-slot:tabPanel-2>
        <h2>Software Development Essentials Teaching Assistant</h2>
        <p>- August 2022 - December 2022</p>
        <ul class="job-content">
          <li>Conducted office hours to assist students with Java programming and GitHub questions</li>
          <li>Graded written exercises, coding assignments, and assessments</li>
        </ul>
      </template>
      <template v-slot:tabPanel-3>
        <h2>HLAB Global Mentor</h2>
        <p>- August 2022 - February 2022</p>
        <ul class="job-content">
          <li>Created 12 game seminars for students using JavaScript and p5.js</li>
          <li>Coordinated with Japanese mentors to organize summer and winter sessions for 200+ high school students</li>
          <li>Educated students on fundamental programming topics and collaboration techniques</li>
        </ul>
      </template>
      <template v-slot:tabPanel-4>
        <h2>Software Engineering Intern @ Alarm.com</h2>
        <p>- June 2022 - August 2022</p>
        <ul class="job-content">
          <li>Introduced reusable Ember components to enhance scalability and facilitate DRY coding principle</li>
          <li>Built Ember applications with Typescript and C#, improving maintainability and reducing code by over 50%</li>
        </ul>
      </template>
    </app-tabs>
  </div>
</div>

<!-- Custom home layout -->
<div class="section" name="projects" id="projects">
  <h1 class="section-title">Featured Projects</h1>
  <div class="custom-layout punko">
    <a class="project-link" href="projects/punko"><h2>Punko 💩</h2></a>
    <div class="tech-stack">
      <span>Python</span>
      <span>Flask</span>
      <span>Huggingface</span>
    </div>
    <p>AI discord chatbot with customized models built off of Microsoft DialoGPT and Stable-Diffusion</p>
    <div class='button-section'>
      <a href="https://github.com/BiaDd/Punko" target="_blank" class="btn">Github</a>
      <a href="https://huggingface.co/BiaDd/DialoGPT-medium-Punko" target="_blank" class="btn-disabled"><p>Demo</p></a>
    </div>
  </div>

  <div class="custom-layout nihongo">
    <a class="project-link" href="projects/nihongo-quiz"><h2>Nihongo-quiz 📖</h2></a>
    <div class="tech-stack">
      <span>React</span>
      <span>Bootstrap</span>
    </div>
    <p>Japanese studying app for remembering vocabulary and grammar structure.</p>
    <div class='button-section'>
      <a href="https://github.com/BiaDd/react-quiz" target="_blank" class="btn">Github</a>
      <a href="https://nihongo-quiz.vercel.app/" target="_blank" class="btn-disabled"><p>Demo</p></a>
    </div>
  </div>
</div>


<div class="section" name="contact" id="contact">
  <h1 class="section-title">Contact</h1>
  <div class="custom-layout contact">
    <p>Send me a message about anything</p>
    <div class='contact-button'>
      <a href="mailto: dannxd3@gmail.com" target="_blank" class="btn">Say Hello</a>
    </div>
  </div>
</div>
