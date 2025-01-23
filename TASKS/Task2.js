const events = [
  {
    title: 'Welcome Week',
    description:
      'Kick off the year with fun activities and events for new students.',
  },
  {
    title: 'Club Fair',
    description: 'Explore different student clubs and organizations on campus.',
  },
  {
    title: 'Career Fair',
    description:
      'Network with potential employers and learn about career opportunities.',
  },
  {
    title: 'Homecoming Game',
    description:
      "Cheer on the school's football team at the annual homecoming game.",
  },
  {
    title: 'Fall Festival',
    description:
      'Enjoy seasonal festivities, food, and music at the fall festival.',
  },
  {
    title: 'Guest Speaker Series',
    description: 'Hear from influential figures in various fields.',
  },
  {
    title: 'Study Abroad Fair',
    description: 'Learn about study abroad programs and opportunities.',
  },
  {
    title: 'Volunteer Day',
    description:
      'Give back to the community by participating in a volunteer event.',
  },
  {
    title: 'Spring Concert',
    description:
      'Enjoy live music performances by student and professional artists.',
  },
];

const title = document.getElementsByTagName('h2');
const para = document.getElementsByTagName('p');

console.log(title);

for (let i = 0; i <= title.length; i++) {
  title[i + 1].innerHTML = events[i].title;
  para[i + 1].innerHTML = events[i].description;
}
