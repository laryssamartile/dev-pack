<template>
  <!-- tsParticles Repository: https://github.com/matteobruni/tsparticles -->
  <!-- tsParticles Website: https://particles.js.org -->
  <Particles
    id="tsparticles"
    :options="options"
    :particlesInit="particlesInit"
  />
</template>

<script lang="ts">
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles

export default {
  data() {
    return {
      // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
      // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
      options: {
        background: {
           image: "linear-gradient(to bottom, #222, #663399)",
          //image: "linear-gradient(to right, #333, #000)",
        },
        fullScreen: {
          enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
          zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
        },
        interactivity: {
          events: {
            onClick: {
              enable: true, // enables the click event, it's disabled by default
              mode: "push", // adds the particles on click
            },
            onHover: {
              enable: true, // enables the mouse hover event, it's disabled by default
              mode: "repulse", // repulse the particles on mouse hover
            },
          },
          modes: {
            push: {
              quantity: 2, // number of particles to add on click
            },
            repulse: {
              distance: 100, // distance of the particles from the cursor
            },
          },
        },
        particles: {
          links: {
            distance: 135, // maximum distance for linking the particles
            enable: true, // enabling this will make the particles linked together
          },
          move: {
            enable: true, // enabling this will make particles move in the canvas
            speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
          },
          number: {
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.7 }, // using a different opacity, to have some semitransparent effects
          },
          size: {
            value: { min: 1, max: 6 }, // let's randomize the particles size a bit
          },
        },
      },
    };
  },
  methods: {
    async particlesInit(engine: Engine) {
      await loadSlim(engine);
      // await loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    },
  },
};
</script>
