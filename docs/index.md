---
# https://vitepress.dev/reference/default-theme-home-page
layout: home    

hero:
  name: Dan Do
  text: my mom says I'm cool.
  tagline: i do stuff
  image:
    src: ./bai-modified.png
    alt: VitePress
features:
  - title: Projects 📚
    details: stuff i work on when i'm borded
    link: "#projects"
  - title: About 👺
    details: some things about me
    link: "#about"
  - title: Experience 🔥
    details: what I've done so far
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
    avatar: './bai-modified.PNG',
    links: [
      { icon: 'github', link: 'https://github.com/BiaDd' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dan-do-dxd3' }
    ]
  }];

const count = ref(0)
</script>
   

<div class="animated" name="about" id="about">
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>About Me</template>
      <template #lead>Just some kid that knows a little bit of coding. I like making beats and listening to jazz in my free time. Omlettes and egg fried rice are my best dishes but I also enjoy baking. I like to think of myself as a pro gamer but I'm kind of bad at videogames.</template>
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
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
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
    <a href="projects/punko"><h2>Punko 💩</h2></a>
    <p>AI discord chatbot with customized models built off of Microsoft DialoGPT and Stable-Diffusion</p>
    <div class='button-section'>
      <a href="https://github.com/BiaDd/Punko" target="_blank" class="btn">Github</a>
      <a href="https://huggingface.co/BiaDd/DialoGPT-medium-Punko" target="_blank" class="btn-disabled"><p>Demo</p></a>
    </div>
  </div>

  <div class="custom-layout nihongo">
    <a href="projects/nihongo-quiz"><h2>Nihongo-quiz 📖</h2></a>
    <p>Japanese studying app built with React.JS.</p>
    <div class='button-section'>
      <a href="https://github.com/BiaDd/react-quiz" target="_blank" class="btn">Github</a>
      <a href="https://nihongo-quiz.vercel.app/" target="_blank" class="btn-disabled"><p>Demo</p></a>
    </div>
  </div>
</div>