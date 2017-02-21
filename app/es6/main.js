const app = new Vue({
  el: '#app',
  data: {
    projects: projects,
    activeProject: null,
    hoverTitle: null,
    hoverStyles: {}
  },
  methods: {
    getBackgroundStyles(project) {
      return { backgroundImage: `url(images/logos/${project.logo})` };
    },
    toggleHover(event, project, hovering) {
      if (hovering) {
        project.hoverStyles = { backgroundColor: project.primaryColor, boxShadow: project.boxShadow };
        this.hoverStyles = { backgroundColor: project.primaryColor, boxShadow: project.boxShadow };
        this.hoverTitle = project.name;
      } else {
        project.hoverStyles = { backgroundColor: 'white' };
        this.hoverTitle = null;
      }
    },
    assignPrimaryColors() {
      this.projects.map((project) => {
        const idx = Math.floor(Math.random() * primaryColors.length);
        const attrs = primaryColors[idx];
        project.primaryColor = `rgba(${attrs[0]},${attrs[1]},${attrs[2]}, 1)`;
        project.boxShadow = `rgba(${attrs[0]},${attrs[1]},${attrs[2]}, 0.7)`;
      });
    },
    setActiveProject(event, project) {
      const tile = event.target.closest(".tile");
      this.activeProject = project || null;
      tile.classList.add('pulse');
      setTimeout(() => {
        tile.classList.remove('pulse');
      }, 1200);
    },
    makeSubtitle(arr) {
      return arr.join(" + ");
    }
  }
});

// DOM Ready
app.assignPrimaryColors();
