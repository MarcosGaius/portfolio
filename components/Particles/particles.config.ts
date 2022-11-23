import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 50,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.5, max: 3 },
    },
  },
  detectRetina: true,
  style: {
    position: "absolute",
  },
};
