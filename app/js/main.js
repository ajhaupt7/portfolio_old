'use strict';

var app = new Vue({
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
    getBackgroundStyles: function getBackgroundStyles(project) {
      return { backgroundImage: 'url(images/logos/' + project.logo + ')' };
    },
    toggleHover: function toggleHover(event, project, hovering) {
      var color = this.stringifyColor(project.primaryColor);
      if (hovering) {
        project.hoverStyles = { backgroundColor: color };
        this.hoverStyles = { backgroundColor: color };
        this.hoverTitle = project.name;
      } else {
        project.hoverStyles = { backgroundColor: 'white' };
        this.hoverTitle = null;
      }
    },
    randomColor: function randomColor() {
      var idx = Math.floor(Math.random() * primaryColors.length);
      return primaryColors[idx];
    },
    stringifyColor: function stringifyColor(attrs, alpha) {
      return 'rgba(' + attrs[0] + ',' + attrs[1] + ',' + attrs[2] + ', ' + (alpha || 1) + ')';
    },
    assignColorsAndFilters: function assignColorsAndFilters() {
      var _this = this;

      this.activeColor = this.randomColor();
      this.projects.map(function (project) {
        var idx = Math.floor(Math.random() * primaryColors.length);
        var attrs = primaryColors[idx];
        project.primaryColor = _this.randomColor();
        project.tech.map(function (item) {
          if (filters['tech'].options.indexOf(item) === -1) filters['tech'].options.push(item);
        });
        if (filters['type'].options.indexOf(project.type) === -1) filters['type'].options.push(project.type);
      });
    },
    setActiveProject: function setActiveProject(event, project) {
      var tile = event.target.closest(".tile");
      this.activeProject = project || null;
      this.activeColor = project ? project.primaryColor : this.randomColor();
      if (tile) {
        tile.classList.add('pulse');
        setTimeout(function () {
          tile.classList.remove('pulse');
        }, 1200);
      }
    },
    makeSubtitle: function makeSubtitle(arr) {
      return arr.join(" + ");
    },
    setActiveFilter: function setActiveFilter(key) {
      this.filterDialogOpen = true;
      this.filterDialogType = key;
    },
    closeActiveFilter: function closeActiveFilter(event) {
      if (!event || this.filterDialogOpen && !event.target.closest(".filter-view")) {
        this.filterDialogOpen = false;
        this.filterDialogType = null;
        this.showFilters = false;
      }
    },
    filterProjects: function filterProjects(type, val, name) {
      this.renderedProjects = this.projects.map(function (project) {
        if (type == 'tech') {
          if (project[type].indexOf(val) !== -1) return project;
        } else {
          if (project[type] === val) return project;
        }
      }).filter(Boolean);
      this.filterSetting = { val: val, name: name };
      this.closeActiveFilter();
    }
  }
});

// DOM Ready
app.assignColorsAndFilters();
var pulseButton = document.querySelectorAll(".pulse-button");
document.addEventListener('click', function (event) {
  var target = event.target.closest(".pulse-button");
  if (target) {
    target.classList.add('pulse');
    setTimeout(function () {
      target.classList.remove('pulse');
    }, 600);
  }
});