// Example data (unchanged)
const films = [
  {
    title: "Killers of the Flower Moon",
    director: "Martin Scorsese",
    times: ["15:35"],
    certificate: "15",
    description: "Quis elit esse pariatur ea laboris id adipisicing. Proident est amet et commodo mollit consequat irure sint reprehenderit labore. Lorem voluptate eiusmod nostrud."
  },
  {
    title: "Typist Artist Pirate King",
    director: "Carol Morley",
    times: ["15:00", "20:00"],
    certificate: "12A",
    description: "Ut ea esse anim eiusmod velit sunt ullamco cupidatat. Id qui minim eu officia laborum qui duis quis id eu dolore.Laborum fugiat enim elit consectetur offic"
  },
  {
    title: "Commodo duis tempor qu",
    director: "Unknown",
    times: ["15:35"],
    certificate: "PG",
    description: "Ullamco est esse ad excepteur voluptate ad do nulla aliquip reprehenderit dolor nim. Irure esse officia aliquip ve cididunt excepteur voluptate sunt in in"
  }
];

// Reusable component function using the <template>
// NOTE: Added `description` to the destructuring here!
function createFilmCard({ title, director, times, certificate, description }) {
  const template = document.getElementById("film-card");
  const fragment = template.content.cloneNode(true);

  // Remove the director element from the fragment
const directorEl = fragment.querySelector("[data-director]");
if (directorEl) directorEl.remove();

    // Set image src and alt (new)
  const imgEl = fragment.querySelector("[data-poster]");
  imgEl.src = "https://via.placeholder.com/280x150?text=No+Image";
  imgEl.alt = `${title} poster`;

  fragment.querySelector("h3").textContent = title;

  // fragment.querySelector("[data-director]").textContent = `Director: ${director}`;

  // Updated time display here:
  const timesText = times.map(time => `${time} Minutes`).join(", ");
  fragment.querySelector("time").textContent = `Today: ${timesText}`;

  const certEl = fragment.querySelector("[data-certificate]");
  certEl.textContent = `Certificate: ${certificate}`;

  fragment.querySelector("[data-description]").textContent = `Description: ${description}`;

  return fragment;
}


// Get the grid container
const grid = document.getElementById("films-grid");

// Use map to create array of DocumentFragments
const cardFragments = films.map(createFilmCard);

// Append all cards to the grid at once
grid.append(...cardFragments);

/* -----------------------
   WHAT WAS WRONG BEFORE?
   -----------------------
   - You did NOT include `description` in createFilmCard params, so it was undefined.
   - This caused fragment.querySelector("[data-description]").textContent to be "description: undefined".
   - Also times displayed without commas could be confusing.
   - Your usage of map(createFilmCard) was correct.
*/
