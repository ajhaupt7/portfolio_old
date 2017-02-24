const app = new Vue({
  el: '#app',
  data: {
    projects: projects,
    filters: filters,
    activeProject: aboutMe,
    aboutMe: aboutMe,
    activeColor: [124, 242, 142],
    hoverTitle: null,
    hoverStyles: {},
    showFilters: false,
    filterDialogOpen: false,
    filterDialogType: null,
    filterSetting: { type: null, name: null, val: null }
  },
  created() {
    this.assignColorsAndFilters();
  },
  computed: {
    renderedProjects() {
      const { type, val } = this.filterSetting;
      return this.projects.filter((project) => {
        return val ? (type == 'tech' ? project[type].indexOf(val) !== -1 : project[type] === val) : project;
      });
    },
    altColor() {
      const idx = Math.floor(Math.random() * primaryColors.length);
      const color = primaryColors[idx];
      return `rgba(${color[0]},${color[1]},${color[2]}, 1`;
    },
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
        if (project.type && filters['type'].options.indexOf(project.type) === -1) filters['type'].options.push(project.type);
      });
    },
    randomInt: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setActiveProject(event, project, aboutMe) {
      const tile = event.target.closest(".tile");
      const projectToSet = aboutMe ? this.aboutMe : project;
      this.activeColor = project ? project.primaryColor : this.randomColor();
      if (projectToSet) {
        const contentArea = document.getElementById('active-project');
        contentArea.classList.add('transitioning');
        setTimeout(() => {
          this.activeProject = projectToSet || null;
        }, 600);
        setTimeout(() => {
          contentArea.classList.remove('transitioning');
        }, 1200);
      }
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
    toggleFilterOpts(event) {
      this.showFilters = !this.showFilters;
      const el = event.target.closest('.pulse-button');
      this.triggerPulse(el);
    },
    closeActiveFilter(event) {
      if (!event || (this.filterDialogOpen && !event.target.closest(".filter-view")) || (!this.filterDialogOpen && this.showFilters)) {
        this.filterDialogOpen = false;
        this.filterDialogType = null;
        this.showFilters = false;
      }
    },
    setFilter(type, val, name) {
      this.filterSetting = { val: val, name: name, type: type };
      this.closeActiveFilter();
    },
    resetFilters() {
      this.filterSetting = { type: null, name: null, val: null };
    },
    triggerPulse(el) {
      el.classList.add('pulse');
      setTimeout(() => {
        el.classList.remove('pulse');
      }, 600);
    },
  }
});

// DOM Ready
const pulseButton = document.querySelectorAll(".pulse-button");
document.addEventListener('click', (event) => {
  const target = event.target.closest(".pulse-button");
  if (target) app.triggerPulse(target);
})
