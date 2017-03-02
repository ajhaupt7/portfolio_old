'use strict';

var projects = [{
  name: 'ShowMe',
  logo: 'showme_logo.png',
  type: 'Personal Project',
  tech: ['React', 'Redux', 'MongoDB', 'Node', 'Logo Design'],
  description: '<p>Helps you find local concerts to go to! I\'ve had this concept for quite awhile and it has evolved significantly over time You enter a date and your city and it shows you who\'s playing -- you can listen to the artists in the app, get tickets, and save shows you\'re interested in to your profile.<p><p>It was originally built in Rails, and rebuilt as a 100% client-side app in React. Recently I rebuilt it again, making it way more polished by using Redux, Node for a true back-end, utilizing ES6 promises more effectively, and using MongoDB for users profiles and saving shows.<p>',
  primaryColor: '',
  url: 'https://showmelivemusic.com'
}, {
  name: 'Wakka Wizard',
  logo: 'wakka_logo.jpg',
  type: 'Personal Project',
  tech: ['React', 'Redux', 'Node', 'Logo Design'],
  description: '<p>As a former DJ,  I used the <a href="http://www.harmonic-mixing.com/howto.aspx">Camelot Wheel</a> for harmonic mixing all the time. This project pairs the logic behind the wheel with the EchoNest API (now owned by Spotify) to recommend songs that will mix well with each other. Users input a song or key/tempo of their choosing and select the "vibe" they want the results to sound like.</p>',
  primaryColor: '',
  url: 'https://www.wakkawizard.com'
}, {
  name: 'FOMO',
  logo: 'fomo_logo.png',
  type: 'Freelance Client',
  tech: ['React', 'Alt', 'Rails', 'Postgres'],
  description: '<p>I was sole developer and designer on this project, working with the marketing/product team at <a href="http://www.fomo.media/">FOMO Media</a>. The idea is to help groups of friends make decisions about what to do. Built the first iteration in Rails, then added a React front-end to enhance the user experience.</p>',
  primaryColor: '',
  url: 'https://fomo.help'
}, {
  name: 'Belmont Stakes',
  logo: 'belmont_logo.png',
  type: 'Culture Foundry',
  tech: ['MODx', 'PHP', 'JS', 'MYSQL'],
  description: '<p>My contributions include building/designing the logo animations, putting together the structure of the home page and many of the interior pages, and writing scripts to scrape and import historical races from the legacy site into the current MYSQL database.</p>',
  primaryColor: '',
  url: 'https://www.belmontstakes.com/'
}, {
  name: 'Gold Key PR',
  logo: 'goldkey_logo.png',
  type: 'Freelance Client',
  tech: ['Wordpress', 'PHP', 'JS', 'Logo Design'],
  description: 'I did a complete site redesign and build in addition to a new logo for Gold Key, a PR firm in Dallas, TX. It was intended to be very simple and straightforward and incorporate a single-page scroll style experience.',
  primaryColor: '',
  url: 'http://goldkeypr.com'
}, {
  name: 'New York Racing Association',
  logo: 'nyra_logo.png',
  type: 'Culture Foundry',
  tech: ['MODx', 'PHP', 'JS', 'MYSQL'],
  description: '<p>My contributions include putting together the structure of many of the interior pages, developing much of the PHP that drives the dynamic calendars and pulls data on owners, jockeys, and trainers from an external database, some design work on various pages, and writing scripts to scrape and import stakes races and their histories from the legacy site into the current MYSQL database.</p>',
  primaryColor: '',
  url: 'https://www.nyra.com'
}, {
  name: 'MiaDonna',
  logo: 'miadonna_logo.svg',
  type: 'Culture Foundry',
  tech: ['Shopify', 'JS'],
  description: '<p>This was a fun project that involved a lot of extending of the limits of Shopify\'s natural boundaries. I did a lot of  front end work, the loading screen animation, and the liquid template work driving the filters and blog.</p>',
  primaryColor: '',
  url: 'https://www.nyra.com'
}, {
  name: 'Organic India Herbal U',
  logo: 'oi_logo.png',
  type: 'Culture Foundry',
  tech: ['Vue', 'MODx'],
  description: '<p>I built a Vue app to accommodate a design from Organic India on their Education landing page. It incporates many dynamic elements that act as hotspots throughout the page and scale/position themselves appropriately based on screen width.</p>',
  primaryColor: '',
  url: 'https://us.organicindia.com/education'
}, {
  name: 'Novapoint',
  logo: 'trimble_logo.png',
  type: 'Culture Foundry',
  tech: ['Drupal 8', 'JS'],
  description: '<p>One of the first larger projects in Drupal that I worked on, I built most of this site and helped with integrating translations for Norwegian, Danish, and Swedish.</p>',
  primaryColor: '',
  url: 'http://www.novapoint.com/'
}, {
  name: 'The Street Child Project',
  logo: 'scp_logo.png',
  type: 'Freelance Client',
  tech: ['Rails', 'JS'],
  description: '<p>The Street Child Project is a nonprofit in Eastern Uganda and the United States committed to helping children living on the streets of Uganda. They needed a complete website redesign that would take the huge amount of disorganized information on the previous site and present it in a streamlined, user friendly manner.</p>',
  primaryColor: '',
  url: 'http://www.novapoint.com/'
}, {
  name: 'JamLab',
  logo: 'jamlab_logo.png',
  type: 'Personal Project',
  tech: ['Rails', 'JS', 'Postgres', 'Logo Design'],
  description: '<p>This was one of the first larger projects I did during my time at Epicodus, a programming bootcamp in Portland. The concept is to connect local musicians who want to play music together. Users can host jam sessions with a custom array of instruments, and other users can search for jam sessions and sign up to play specific instruments.</p>',
  primaryColor: '',
  url: 'http://jamlab.herokuapp.com/'
}, {
  name: 'Suck it Trebek',
  logo: 'suckittrebek_logo.png',
  type: 'Personal Project',
  tech: ['Ember', 'Firebase', 'Logo Design'],
  description: '<p>Suck it Trebek is a trivia web app that pulls from J-Archive, a database that houses real Jeopardy questions from the first 31 seasons, totaling over 250,000 questions. Users can play games of varying lengths -- if a user signs up he or she can track their stats over time (correct/incorrect/skipped, answer speed, etc.). Built during my time at Epicodus.</p>',
  primaryColor: '',
  url: 'http://suckittrebek.firebaseapp.com/'
}, {
  name: 'The Rest',
  logo: 'ellipses.png',
  tech: [],
  description: 'Including but not limited to work on <a href="https://www.kentuckyderby.com">The Kentucky Derby</a>, <a href="http://construction.trimble.com/">Trimble Construction</a>, <a href="http://www.jacksonbrowne.com/">Jackson Browne</a>, and <a href="http://www.jacksonbrowne.com/">Clean Power Research Developer Portal</a>...',
  primaryColor: ''
}];

var filters = {
  type: {
    name: 'Project Type',
    options: []
  },
  tech: {
    name: 'Tech Stack',
    options: []
  }
};

var aboutMe = {
  name: 'Andrew Haupt',
  type: 'Culture Foundry',
  tech: ['Developer', 'Designer'],
  description: '<p>Hi, I\'m Andrew - I live in Bend, Oregon and work for <a href=\'https://www.culturefoundry.com/\' target=\'_blank\'>Culture Foundry</a>, a web agency where I\'ve helped craft sites for companies like <a href=\'https://www.belmontstakes.com/\' target=\'_blank\'>the Belmont Stakes</a>, <a href=\'https://us.organicindia.com/\' target=\'_blank\'>Organic India</a>, and <a href=\'https://www.miadonna.com/\' target=\'_blank\'>MiaDonna</a>.</p><p>I\'m self-taught and constantly push myself to keep learning. In my spare time I hike, camp, read, cook, play the mandolin and build cool stuff like <a href=\'http://showmelivemusic.com/\' target=\'_blank\'>ShowMe</a> and <a href=\'http://www.wakkawizard.com/\' target=\'_blank\'>Wakka Wizard</a>.</p><p><a href=\'MAILTO:ajhaupt7@gmail.com\' target=\'_blank\'>Hit me up</a> for freelance work or a chat and a beer...</p>',
  primaryColor: ''
};

var primaryColors = [[0, 255, 221], [222, 75, 75], [218, 38, 104], [107, 187, 255], [237, 98, 130], [249, 103, 137], [241, 142, 178], [253, 85, 92], [59, 204, 133], [255, 116, 35], [83, 243, 176], [254, 140, 127], [31, 172, 255], [0, 208, 255], [88, 155, 255], [83, 243, 176], [84, 218, 164], [255, 139, 139], [22, 124, 128], [191, 181, 215], [240, 207, 97], [241, 102, 86], [229, 112, 102]];