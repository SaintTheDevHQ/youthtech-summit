
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation menu' : 'Open navigation menu',
  );

  menuToggle.textContent = isOpen ? '✕' : '☰';
});


const speakers = [
  {
    name: 'Sahalu Aminu Koko',
    role: 'Software Engineer',
    bio: 'Builds digital products and encourages young people to learn web development.',
    image: 'images/Abba.jpeg',
  },
  {
    name: 'Abdulqudri Abdullahi',
    role: 'AI Researcher',
    bio: 'Explores how artificial intelligence can solve real-world problems.',
    image: 'images/Abba.jpeg',
  },
  {
    name: 'Abdullahi Abba',
    role: 'Tech Entrepreneur',
    bio: 'Helps young innovators turn their ideas into useful digital solutions.',
    image: 'images/Abba.jpeg',
  },
  {
    name: 'Idris Mamman G',
    role: 'Cybersecurity Specialist',
    bio: 'Teaches digital safety and ways to protect online information.',
    image: 'images/Abba.jpeg',
  },
];

const speakerList = document.querySelector('#speaker-list');

if (speakerList) {
  speakerList.innerHTML = speakers.map((speaker) => `
    <article class="speaker-card">
      <img src="${speaker.image}" alt="${speaker.name}">
      <div class="speaker-info">
        <h3>${speaker.name}</h3>
        <p class="speaker-role">${speaker.role}</p>
        <p>${speaker.bio}</p>
      </div>
    </article>
  `).join('');
}