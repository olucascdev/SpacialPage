tsParticles.load("particles-js", {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: 30,
        density: { enable: true, value_area: 800 }
      },
      shape: { type: ["circle", "square", "triangle"] },
      size: {
        value: 24,
        random: true
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: { default: "out" },
        speed: 2
      },
      opacity: {
        value: 0.9,
        random: true
      },
      color: {
        value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
      }
    },
    emitters: {
      position: { x: 50, y: 0 },
      rate: { quantity: 5, delay: 0.2 },
      life: { duration: 2.5, count: 1 }
    }
  });
  