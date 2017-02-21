'use strict';

var app = new Vue({
  el: '#app',
  data: {
    projects: projects,
    activeProject: null,
    hoverTitle: null,
    hoverStyles: {}
  },
  methods: {
    getBackgroundStyles: function getBackgroundStyles(project) {
      return { backgroundImage: 'url(images/logos/' + project.logo + ')' };
    },
    toggleHover: function toggleHover(event, project, hovering) {
      if (hovering) {
        project.hoverStyles = { backgroundColor: project.primaryColor, boxShadow: project.boxShadow };
        this.hoverStyles = { backgroundColor: project.primaryColor, boxShadow: project.boxShadow };
        this.hoverTitle = project.name;
      } else {
        project.hoverStyles = { backgroundColor: 'white' };
        this.hoverTitle = null;
      }
    },
    assignPrimaryColors: function assignPrimaryColors() {
      this.projects.map(function (project) {
        var idx = Math.floor(Math.random() * primaryColors.length);
        var attrs = primaryColors[idx];
        project.primaryColor = 'rgba(' + attrs[0] + ',' + attrs[1] + ',' + attrs[2] + ', 1)';
        project.boxShadow = 'rgba(' + attrs[0] + ',' + attrs[1] + ',' + attrs[2] + ', 0.7)';
      });
    },
    setActiveProject: function setActiveProject(event, project) {
      var tile = event.target.closest(".tile");
      this.activeProject = project || null;
      tile.classList.add('pulse');
      setTimeout(function () {
        tile.classList.remove('pulse');
      }, 1200);
    },
    makeSubtitle: function makeSubtitle(arr) {
      return arr.join(" + ");
    }
  }
});

// DOM Ready
app.assignPrimaryColors();