'use strict';

var app = new Vue({
  el: '#app',
  data: {
    projects: projects,
    filters: filters,
    loaded: false,
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
  created: function created() {
    var _this = this;

    this.assignColorsAndFilters();
    var intro = document.getElementById('intro');
    setTimeout(function () {
      _this.loaded = true;
      intro.classList.add("hidden");
    }, 5200);
  },

  computed: {
    renderedProjects: function renderedProjects() {
      var _filterSetting = this.filterSetting,
          type = _filterSetting.type,
          val = _filterSetting.val;

      return this.projects.filter(function (project) {
        return val ? type == 'tech' ? project[type].indexOf(val) !== -1 : project[type] === val : project;
      });
    },
    altColor: function altColor() {
      var activeColor = this.activeColor;

      var idx = Math.floor(Math.random() * primaryColors.length);
      var color = primaryColors[idx];
      return 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ', 1';
    }
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
      var _this2 = this;

      this.activeColor = this.randomColor();
      this.projects.map(function (project) {
        var idx = Math.floor(Math.random() * primaryColors.length);
        var attrs = primaryColors[idx];
        project.primaryColor = _this2.randomColor();
        project.tech.map(function (item) {
          if (filters['tech'].options.indexOf(item) === -1) filters['tech'].options.push(item);
        });
        if (project.type && filters['type'].options.indexOf(project.type) === -1) filters['type'].options.push(project.type);
      });
    },

    randomInt: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    setActiveProject: function setActiveProject(event, project, aboutMe) {
      var _this3 = this;

      var tile = event.target.closest(".tile");
      var projectToSet = aboutMe ? this.aboutMe : project;
      this.activeColor = project ? project.primaryColor : this.randomColor();
      if (projectToSet) {
        var contentArea = document.getElementById('active-project');
        contentArea.classList.add('transitioning');
        setTimeout(function () {
          _this3.activeProject = projectToSet || null;
        }, 600);
        setTimeout(function () {
          contentArea.classList.remove('transitioning');
        }, 1200);
      }
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
    toggleFilterOpts: function toggleFilterOpts(event) {
      this.showFilters = !this.showFilters;
      var el = event.target.closest('.pulse-button');
      this.triggerPulse(el);
    },
    closeActiveFilter: function closeActiveFilter(event) {
      if (!event || this.filterDialogOpen && !event.target.closest(".filter-view") || !this.filterDialogOpen && !event.target.closest(".pulse-button")) {
        this.filterDialogOpen = false;
        this.filterDialogType = null;
        this.showFilters = false;
      }
    },
    setFilter: function setFilter(type, val, name) {
      this.filterSetting = { val: val, name: name, type: type };
      this.closeActiveFilter();
    },
    resetFilters: function resetFilters() {
      this.filterSetting = { type: null, name: null, val: null };
    },
    triggerPulse: function triggerPulse(el) {
      el.classList.add('pulse');
      setTimeout(function () {
        el.classList.remove('pulse');
      }, 600);
    }
  }
});

// DOM Ready
var pulseButton = document.querySelectorAll(".pulse-button");
document.addEventListener('click', function (event) {
  var target = event.target.closest(".pulse-button");
  if (target) app.triggerPulse(target);
});