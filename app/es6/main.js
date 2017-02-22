const app = new Vue({
  el: '#app',
  data: {
    projects: projects,
    renderedProjects: projects,
    filters: filters,
    activeProject: null,
    activeColor: [124, 242, 142],
    hoverTitle: null,
    hoverStyles: {},
    showFilters: false,
    filterDialogOpen: false,
    filterDialogType: null,
    filterSetting: null
  },
  methods: {
    getBackgroundStyles(project) {
      return { backgroundImage: `url(images/logos/${project.logo})` };
    },
    toggleHover(event, project, hovering) {
      const color = this.stringifyColor(project.primaryColor);
      if (hovering) {
        project.hoverStyles = { backgroundColor: color };
        this.hoverStyles = { backgroundColor: color };
        this.hoverTitle = project.name;
      } else {
        project.hoverStyles = { backgroundColor: 'white' };
        this.hoverTitle = null;
      }
    },
    randomColor() {
      const idx = Math.floor(Math.random() * primaryColors.length);
      return primaryColors[idx];
    },
    stringifyColor(attrs, alpha) {
      return `rgba(${attrs[0]},${attrs[1]},${attrs[2]}, ${alpha || 1})`;
    },
    assignColorsAndFilters() {
      this.activeColor = this.randomColor();
      this.projects.map((project) => {
        const idx = Math.floor(Math.random() * primaryColors.length);
        const attrs = primaryColors[idx];
        project.primaryColor = this.randomColor();
        project.tech.map((item) => {
          if (filters['tech'].options.indexOf(item) === -1) filters['tech'].options.push(item);
        });
        if (filters['type'].options.indexOf(project.type) === -1) filters['type'].options.push(project.type);
      });
    },
    setActiveProject(event, project) {
      const tile = event.target.closest(".tile");
      this.activeProject = project || null;
      this.activeColor = project ? project.primaryColor : this.randomColor();
      if (tile) {
        tile.classList.add('pulse');
        setTimeout(() => {
          tile.classList.remove('pulse');
        }, 1200);
      }
    },
    makeSubtitle(arr) {
      return arr.join(" + ");
    },
    setActiveFilter(key) {
      this.filterDialogOpen = true;
      this.filterDialogType = key;
    },
    closeActiveFilter(event) {
      if (!event || (this.filterDialogOpen && !event.target.closest(".filter-view"))) {
        this.filterDialogOpen = false;
        this.filterDialogType = null;
        this.showFilters = false;
      }
    },
    filterProjects(type, val, name) {
      this.renderedProjects = this.projects.map((project) => {
        if (type == 'tech') {
          if (project[type].indexOf(val) !== -1) return project
        } else {
          if (project[type] === val) return project
        }
      }).filter(Boolean);
      this.filterSetting = { val: val, name: name };
      this.closeActiveFilter();
    }
  }
});

// DOM Ready
app.assignColorsAndFilters();
const pulseButton = document.querySelectorAll(".pulse-button");
document.addEventListener('click', (event) => {
  const target = event.target.closest(".pulse-button");
  if (target) {
    target.classList.add('pulse');
    setTimeout(() => {
      target.classList.remove('pulse');
    }, 600);
  }
})
