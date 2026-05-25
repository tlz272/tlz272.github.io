/* ============================================================
   CONTENT — this is the only file you need to edit to update
   your site. Add or remove items from the lists below.
   Save the file, push to GitHub, and Cloudflare will redeploy.
   ============================================================ */


// --- MUSIC TRACKS (SoundCloud) ---
// To add a track: open the track on SoundCloud, copy the page URL
// (the part after soundcloud.com), and paste it as a new line below.
// Example URL format: https://soundcloud.com/tobiasleigh/track-name
// Tracks render in the order listed (top of list = top of music page).
const SOUNDCLOUD_TRACKS = [
  "https://soundcloud.com/tobiasleigh/valves",
  "https://soundcloud.com/tobiasleigh/vosa",
  "https://soundcloud.com/tobiasleigh/vosa-ii",
  "https://soundcloud.com/tobiasleigh/vosa-iii-v1",
  "https://soundcloud.com/tobiasleigh/texture-i",
  "https://soundcloud.com/tobiasleigh/kirrila",
  "https://soundcloud.com/tobiasleigh/moongaze-railways",
  "https://soundcloud.com/tobiasleigh/didessafantasy",
  "https://soundcloud.com/tobiasleigh/aporia",
  "https://soundcloud.com/tobiasleigh/chronos-1",
  "https://soundcloud.com/tobiasleigh/breath-by-breath",
  "https://soundcloud.com/tobiasleigh/immolation",
  "https://soundcloud.com/tobiasleigh/vintur",
  "https://soundcloud.com/tobiasleigh/shadows-dance",
  "https://soundcloud.com/tobiasleigh/valleys-of-despoina",
  "https://soundcloud.com/tobiasleigh/wandering-by-foot",
  "https://soundcloud.com/tobiasleigh/a-bird-and-his-shadow",
  "https://soundcloud.com/tobiasleigh/rosa-moschata",
  "https://soundcloud.com/tobiasleigh/a5-nebula-mandala",
  "https://soundcloud.com/tobiasleigh/a6-sketches-for-a-melting-piano",
  
  // Paste more track URLs here, one per line, each in quotes ending with a comma.
];


// --- MUSIC PLAYLISTS (SoundCloud) ---
// Optional — to feature a playlist, open it on SoundCloud, copy the URL
// (looks like https://soundcloud.com/tobiasleigh/sets/playlist-name),
// and paste it below. Playlists render at the TOP of the Music page,
// above individual tracks. Leave the array empty if you don't want any.
const SOUNDCLOUD_PLAYLISTS = [
  // "https://soundcloud.com/tobiasleigh/sets/your-playlist-name",
];


// --- MUSIC GROUP METADATA ---
// Optional description + quote per playlist. Keys are the `group` field
// in TRACKS below (and for solo tracks, the track title itself).
// Leave description/quote blank to hide them; fill them in to display
// a small evocative line under the playlist title.
const GROUP_META = {
  "Vosa":            { description: "", quote: "" },
  "Vintur":          { description: "", quote: "" },
  "Didessa Fantasy": { description: "", quote: "" },
  "Valves":          { description: "", quote: "" },
  "Nebula Mandala":  { description: "", quote: "" },
  "Shadows Dance":   { description: "", quote: "" },
};


// --- MUSIC TRACKS (self-hosted, curated) ---
// Each track plays through the custom player on the Music page.
// Fields:
//   title    – shown next to the play button
//   src      – path to the MP3 inside /audio/
//   artwork  – (optional) path to a cover image
//   group    – (optional) tracks with the same group name share one artwork
//              and appear together under a small "trilogy"-style header.
//
// To add a track: drop the MP3 into /audio/, add a row below, and (optionally)
// drop a cover image into /audio/art/ and reference it.
// Each track has its OWN artwork (shown as thumbnail in the playlist + swaps into
// the main cover when that track is clicked). The first track of each group
// supplies the playlist's default cover. Drop new artwork into /audio/art/ and
// reference it below.
const TRACKS = [
  // Group 1 — Vosa
  { title: "Vosa",                        src: "audio/track-01.mp3",                    artwork: "audio/art/vosa.jpg",                       group: "Vosa" },
  { title: "Vosa II",                     src: "audio/track-02.mp3",                    artwork: "audio/art/vosa.jpg",                       group: "Vosa" },
  { title: "Vosa III",                    src: "audio/track-03.mp3",                    artwork: "audio/art/vosa.jpg",                       group: "Vosa" },

  // Group 2 — Vintur
  { title: "Vintur",                      src: "audio/vintur.mp3",                      artwork: "audio/art/vintur.jpg",                     group: "Vintur" },
  { title: "Breath by Breath",            src: "audio/breath-by-breath.mp3",            artwork: "audio/art/breath-by-breath.jpg",           group: "Vintur" },

  // Group 3 — Didessa Fantasy
  { title: "Didessa Fantasy",             src: "audio/didessa-fantasy.mp3",             artwork: "audio/art/didessa-fantasy.jpg",            group: "Didessa Fantasy" },
  { title: "A Moment's Solace",           src: "audio/a-moments-solace.mp3",            artwork: "audio/art/a-moments-solace.jpg",           group: "Didessa Fantasy" },
  { title: "Valleys of Despina",          src: "audio/valleys-of-despina.mp3",          artwork: "audio/art/valleys-of-despina.jpg",         group: "Didessa Fantasy" },

  // Standalone — Valves
  { title: "Valves",                      src: "audio/valves.mp3",                      artwork: "audio/art/valves.jpg" },

  // Group 4 — Nebula Mandala
  { title: "Nebula Mandala",              src: "audio/a5-nebula-mandala.mp3",           artwork: "audio/art/a5-nebula-mandala.jpg",          group: "Nebula Mandala" },
  { title: "Texture 92",                  src: "audio/texture-92.mp3",                  artwork: "audio/art/texture-92.jpg",                 group: "Nebula Mandala" },
  { title: "Sketches for Sunken Hammers", src: "audio/sketches-for-sunken-hammers.mp3", artwork: "audio/art/sketches-for-sunken-hammers.jpg", group: "Nebula Mandala" },

  // Group 5 — Shadows Dance
  { title: "Shadows Dance",               src: "audio/shadows-dance.mp3",               artwork: "audio/art/shadows-dance.jpg",              group: "Shadows Dance" },
  { title: "Immolation",                  src: "audio/immolation.mp3",                  artwork: "audio/art/immolation.jpg",                 group: "Shadows Dance" },
  { title: "Moongaze Railways",           src: "audio/moongaze-railways.mp3",           artwork: "audio/art/shadows-dance.jpg",              group: "Shadows Dance" },
];


const CONTENT = {

  // --- VIDEOS ---
  // To add a video: copy one line and fill in the YouTube ID and title.
  // The ID is the part after "watch?v=" in the YouTube URL.
  videos: [
    { id: "YeIB0uNhH3k", title: "We Live Inside a Metaphor", label: "Video Essay" },
    { id: "EBBJVx-fyjU", title: "The Attention Economy",     label: "Video Essay" },
    { id: "X8QS6HN1XlU", title: "The Invention of Time",     label: "Video Essay" },
    { id: "Vpt5G8Vl_JQ", title: "The Encoding",              label: "Video Essay" },
  ],


  // --- PHOTOGRAPHY CURATIONS ---
  // Each curation is a collection of photos that share a single thread —
  // a place, a technique, a mood. The Photography landing page shows
  // a grid of curation covers; clicking one opens its full view
  // (images on the left, writing on the right).
  //
  // To add a curation: copy a block, fill in fields, drop the images
  // into /photos/curations/<folder-name>/ (filenames must match the urls below).
  curations: [
    {
      name: "Aquae Motus",
      date: "June 2019",
      description: "Slow shutter studies.",
      quote: "“You cannot step into the same river twice, for other waters are continually flowing on to you.” — Heraclitus",
      cover: "photos/curations/aquae-motus/01.jpg",
      images: [
        "photos/curations/aquae-motus/01.jpg",
        "photos/curations/aquae-motus/02.jpg",
        "photos/curations/aquae-motus/03.jpg",
        "photos/curations/aquae-motus/04.jpg",
      ],
    },

    {
      name: "A Bird and His Shadow",
      date: "",
      description: "",
      quote: "",
      cover: "photos/curations/a-bird-and-his-shadow/01.jpg",
      images: [
        "photos/curations/a-bird-and-his-shadow/01.jpg",
      ],
    },

    {
      name: "Castle",
      date: "December 2018",
      description: "",
      quote: "",
      cover: "photos/curations/castle/03.jpg",
      images: [
        "photos/curations/castle/01.jpg",
        "photos/curations/castle/02.jpg",
        "photos/curations/castle/03.jpg",
        "photos/curations/castle/04.jpg",
        "photos/curations/castle/05.jpg",
        "photos/curations/castle/06.jpg",
        "photos/curations/castle/07.jpg",
        "photos/curations/castle/08.jpg",
      ],
    },

    {
      name: "Cathedrals",
      date: "January 2019",
      description: "",
      quote: "",
      cover: "photos/curations/cathedrals/25.jpg",
      images: [
        "photos/curations/cathedrals/01.jpg",
        "photos/curations/cathedrals/02.jpg",
        "photos/curations/cathedrals/03.jpg",
        "photos/curations/cathedrals/04.jpg",
        "photos/curations/cathedrals/05.jpg",
        "photos/curations/cathedrals/06.jpg",
        "photos/curations/cathedrals/07.jpg",
        "photos/curations/cathedrals/08.jpg",
        "photos/curations/cathedrals/09.jpg",
        "photos/curations/cathedrals/10.jpg",
        "photos/curations/cathedrals/11.jpg",
        "photos/curations/cathedrals/12.jpg",
        "photos/curations/cathedrals/13.jpg",
        "photos/curations/cathedrals/14.jpg",
        "photos/curations/cathedrals/15.jpg",
        "photos/curations/cathedrals/16.jpg",
        "photos/curations/cathedrals/17.jpg",
        "photos/curations/cathedrals/18.jpg",
        "photos/curations/cathedrals/19.jpg",
        "photos/curations/cathedrals/20.jpg",
        "photos/curations/cathedrals/21.jpg",
        "photos/curations/cathedrals/22.jpg",
        "photos/curations/cathedrals/23.jpg",
        "photos/curations/cathedrals/24.jpg",
        "photos/curations/cathedrals/25.jpg",
        "photos/curations/cathedrals/26.jpg",
        "photos/curations/cathedrals/27.jpg",
        "photos/curations/cathedrals/28.jpg",
      ],
    },

    {
      name: "Epoché",
      date: "January 2020",
      description: "",
      quote: "",
      cover: "photos/curations/epoche/09.jpg",
      images: [
        "photos/curations/epoche/01.jpg",
        "photos/curations/epoche/02.jpg",
        "photos/curations/epoche/03.jpg",
        "photos/curations/epoche/04.jpg",
        "photos/curations/epoche/05.jpg",
        "photos/curations/epoche/06.jpg",
        "photos/curations/epoche/07.jpg",
        "photos/curations/epoche/08.jpg",
        "photos/curations/epoche/09.jpg",
        "photos/curations/epoche/10.jpg",
        "photos/curations/epoche/11.jpg",
        "photos/curations/epoche/12.jpg",
        "photos/curations/epoche/13.jpg",
      ],
    },

    {
      name: "Listen to Nature",
      date: "",
      description: "",
      quote: "",
      cover: "photos/curations/listen-to-nature/07.jpg",
      images: [
        "photos/curations/listen-to-nature/01.jpg",
        "photos/curations/listen-to-nature/02.jpg",
        "photos/curations/listen-to-nature/03.jpg",
        "photos/curations/listen-to-nature/04.jpg",
        "photos/curations/listen-to-nature/05.jpg",
        "photos/curations/listen-to-nature/06.jpg",
        "photos/curations/listen-to-nature/07.jpg",
        "photos/curations/listen-to-nature/08.jpg",
        "photos/curations/listen-to-nature/09.jpg",
        "photos/curations/listen-to-nature/10.jpg",
        "photos/curations/listen-to-nature/11.jpg",
        "photos/curations/listen-to-nature/12.jpg",
        "photos/curations/listen-to-nature/13.jpg",
        "photos/curations/listen-to-nature/14.jpg",
        "photos/curations/listen-to-nature/15.jpg",
      ],
    },

    {
      name: "Moonlight",
      date: "November 2018",
      description: "",
      quote: "",
      cover: "photos/curations/moonlight/06.jpg",
      images: [
        "photos/curations/moonlight/01.jpg",
        "photos/curations/moonlight/02.jpg",
        "photos/curations/moonlight/03.jpg",
        "photos/curations/moonlight/04.jpg",
        "photos/curations/moonlight/05.jpg",
        "photos/curations/moonlight/06.jpg",
        "photos/curations/moonlight/07.jpg",
      ],
    },

    {
      name: "Mount Tambourine",
      date: "June 2019",
      description: "",
      quote: "",
      cover: "photos/curations/mount-tambourine/06.jpg",
      images: [
        "photos/curations/mount-tambourine/01.jpg",
        "photos/curations/mount-tambourine/02.jpg",
        "photos/curations/mount-tambourine/03.jpg",
        "photos/curations/mount-tambourine/04.jpg",
        "photos/curations/mount-tambourine/05.jpg",
        "photos/curations/mount-tambourine/06.jpg",
        "photos/curations/mount-tambourine/07.jpg",
        "photos/curations/mount-tambourine/08.jpg",
        "photos/curations/mount-tambourine/09.jpg",
        "photos/curations/mount-tambourine/10.jpg",
        "photos/curations/mount-tambourine/11.jpg",
        "photos/curations/mount-tambourine/12.jpg",
        "photos/curations/mount-tambourine/13.jpg",
        "photos/curations/mount-tambourine/14.jpg",
        "photos/curations/mount-tambourine/15.jpg",
        "photos/curations/mount-tambourine/16.jpg",
        "photos/curations/mount-tambourine/17.jpg",
        "photos/curations/mount-tambourine/18.jpg",
        "photos/curations/mount-tambourine/19.jpg",
        "photos/curations/mount-tambourine/20.jpg",
        "photos/curations/mount-tambourine/21.jpg",
        "photos/curations/mount-tambourine/22.jpg",
        "photos/curations/mount-tambourine/23.jpg",
        "photos/curations/mount-tambourine/24.jpg",
        "photos/curations/mount-tambourine/25.jpg",
        "photos/curations/mount-tambourine/26.jpg",
        "photos/curations/mount-tambourine/27.jpg",
        "photos/curations/mount-tambourine/28.jpg",
      ],
    },

    {
      name: "Notre-Dame",
      date: "January 2019",
      description: "",
      quote: "",
      cover: "photos/curations/notre-dame/41.jpg",
      images: [
        "photos/curations/notre-dame/01.jpg",
        "photos/curations/notre-dame/02.jpg",
        "photos/curations/notre-dame/03.jpg",
        "photos/curations/notre-dame/04.jpg",
        "photos/curations/notre-dame/05.jpg",
        "photos/curations/notre-dame/06.jpg",
        "photos/curations/notre-dame/07.jpg",
        "photos/curations/notre-dame/08.jpg",
        "photos/curations/notre-dame/09.jpg",
        "photos/curations/notre-dame/10.jpg",
        "photos/curations/notre-dame/11.jpg",
        "photos/curations/notre-dame/12.jpg",
        "photos/curations/notre-dame/13.jpg",
        "photos/curations/notre-dame/14.jpg",
        "photos/curations/notre-dame/15.jpg",
        "photos/curations/notre-dame/16.jpg",
        "photos/curations/notre-dame/17.jpg",
        "photos/curations/notre-dame/18.jpg",
        "photos/curations/notre-dame/19.jpg",
        "photos/curations/notre-dame/20.jpg",
        "photos/curations/notre-dame/21.jpg",
        "photos/curations/notre-dame/22.jpg",
        "photos/curations/notre-dame/23.jpg",
        "photos/curations/notre-dame/24.jpg",
        "photos/curations/notre-dame/25.jpg",
        "photos/curations/notre-dame/26.jpg",
        "photos/curations/notre-dame/27.jpg",
        "photos/curations/notre-dame/28.jpg",
        "photos/curations/notre-dame/29.jpg",
        "photos/curations/notre-dame/30.jpg",
        "photos/curations/notre-dame/31.jpg",
        "photos/curations/notre-dame/32.jpg",
        "photos/curations/notre-dame/33.jpg",
        "photos/curations/notre-dame/34.jpg",
        "photos/curations/notre-dame/35.jpg",
        "photos/curations/notre-dame/36.jpg",
        "photos/curations/notre-dame/37.jpg",
        "photos/curations/notre-dame/38.jpg",
        "photos/curations/notre-dame/39.jpg",
        "photos/curations/notre-dame/40.jpg",
        "photos/curations/notre-dame/41.jpg",
        "photos/curations/notre-dame/42.jpg",
        "photos/curations/notre-dame/43.jpg",
        "photos/curations/notre-dame/44.jpg",
        "photos/curations/notre-dame/45.jpg",
        "photos/curations/notre-dame/46.jpg",
        "photos/curations/notre-dame/47.jpg",
        "photos/curations/notre-dame/48.jpg",
        "photos/curations/notre-dame/49.jpg",
        "photos/curations/notre-dame/50.jpg",
        "photos/curations/notre-dame/51.jpg",
        "photos/curations/notre-dame/52.jpg",
      ],
    },

    {
      name: "Painting in Light",
      date: "June 2019",
      description: "",
      quote: "",
      cover: "photos/curations/painting-in-light/01.jpg",
      images: [
        "photos/curations/painting-in-light/01.jpg",
        "photos/curations/painting-in-light/02.jpg",
        "photos/curations/painting-in-light/03.jpg",
        "photos/curations/painting-in-light/04.jpg",
        "photos/curations/painting-in-light/05.jpg",
        "photos/curations/painting-in-light/06.jpg",
        "photos/curations/painting-in-light/07.jpg",
        "photos/curations/painting-in-light/08.jpg",
        "photos/curations/painting-in-light/09.jpg",
        "photos/curations/painting-in-light/10.jpg",
        "photos/curations/painting-in-light/11.jpg",
        "photos/curations/painting-in-light/12.jpg",
        "photos/curations/painting-in-light/13.jpg",
        "photos/curations/painting-in-light/14.jpg",
        "photos/curations/painting-in-light/15.jpg",
        "photos/curations/painting-in-light/16.jpg",
        "photos/curations/painting-in-light/17.jpg",
        "photos/curations/painting-in-light/18.jpg",
        "photos/curations/painting-in-light/19.jpg",
        "photos/curations/painting-in-light/20.jpg",
        "photos/curations/painting-in-light/21.jpg",
        "photos/curations/painting-in-light/22.jpg",
        "photos/curations/painting-in-light/23.jpg",
        "photos/curations/painting-in-light/24.jpg",
        "photos/curations/painting-in-light/25.jpg",
        "photos/curations/painting-in-light/26.jpg",
        "photos/curations/painting-in-light/27.jpg",
        "photos/curations/painting-in-light/28.jpg",
        "photos/curations/painting-in-light/29.jpg",
        "photos/curations/painting-in-light/30.jpg",
        "photos/curations/painting-in-light/31.jpg",
        "photos/curations/painting-in-light/32.jpg",
        "photos/curations/painting-in-light/33.jpg",
        "photos/curations/painting-in-light/34.jpg",
        "photos/curations/painting-in-light/35.jpg",
        "photos/curations/painting-in-light/36.jpg",
        "photos/curations/painting-in-light/37.jpg",
        "photos/curations/painting-in-light/38.jpg",
        "photos/curations/painting-in-light/39.jpg",
        "photos/curations/painting-in-light/40.jpg",
        "photos/curations/painting-in-light/41.jpg",
        "photos/curations/painting-in-light/42.jpg",
        "photos/curations/painting-in-light/43.jpg",
        "photos/curations/painting-in-light/44.jpg",
        "photos/curations/painting-in-light/45.jpg",
        "photos/curations/painting-in-light/46.jpg",
        "photos/curations/painting-in-light/47.jpg",
        "photos/curations/painting-in-light/48.jpg",
        "photos/curations/painting-in-light/49.jpg",
        "photos/curations/painting-in-light/50.jpg",
        "photos/curations/painting-in-light/51.jpg",
        "photos/curations/painting-in-light/52.jpg",
        "photos/curations/painting-in-light/53.jpg",
        "photos/curations/painting-in-light/54.jpg",
        "photos/curations/painting-in-light/55.jpg",
        "photos/curations/painting-in-light/56.jpg",
        "photos/curations/painting-in-light/57.jpg",
        "photos/curations/painting-in-light/58.jpg",
        "photos/curations/painting-in-light/59.jpg",
        "photos/curations/painting-in-light/60.jpg",
        "photos/curations/painting-in-light/61.jpg",
        "photos/curations/painting-in-light/62.jpg",
        "photos/curations/painting-in-light/63.jpg",
        "photos/curations/painting-in-light/64.jpg",
      ],
    },

    {
      name: "Pantheon",
      date: "January 2019",
      description: "",
      quote: "",
      cover: "photos/curations/pantheon/03.jpg",
      images: [
        "photos/curations/pantheon/01.jpg",
        "photos/curations/pantheon/02.jpg",
        "photos/curations/pantheon/03.jpg",
        "photos/curations/pantheon/04.jpg",
        "photos/curations/pantheon/05.jpg",
        "photos/curations/pantheon/06.jpg",
      ],
    },

    {
      name: "Paris Cemetery",
      date: "December 2018",
      description: "",
      quote: "",
      cover: "photos/curations/paris-cemetery/09.jpg",
      images: [
        "photos/curations/paris-cemetery/01.jpg",
        "photos/curations/paris-cemetery/02.jpg",
        "photos/curations/paris-cemetery/03.jpg",
        "photos/curations/paris-cemetery/04.jpg",
        "photos/curations/paris-cemetery/05.jpg",
        "photos/curations/paris-cemetery/06.jpg",
        "photos/curations/paris-cemetery/07.jpg",
        "photos/curations/paris-cemetery/08.jpg",
        "photos/curations/paris-cemetery/09.jpg",
      ],
    },

    {
      name: "Reflections",
      date: "December 2018",
      description: "",
      quote: "",
      cover: "photos/curations/reflections/08.jpg",
      images: [
        "photos/curations/reflections/01.jpg",
        "photos/curations/reflections/02.jpg",
        "photos/curations/reflections/03.jpg",
        "photos/curations/reflections/04.jpg",
        "photos/curations/reflections/05.jpg",
        "photos/curations/reflections/06.jpg",
        "photos/curations/reflections/07.jpg",
        "photos/curations/reflections/08.jpg",
      ],
    },

    {
      name: "Rural France",
      date: "December 2018",
      description: "",
      quote: "",
      cover: "photos/curations/rural-france/32.jpg",
      images: [
        "photos/curations/rural-france/01.jpg",
        "photos/curations/rural-france/02.jpg",
        "photos/curations/rural-france/03.jpg",
        "photos/curations/rural-france/04.jpg",
        "photos/curations/rural-france/05.jpg",
        "photos/curations/rural-france/06.jpg",
        "photos/curations/rural-france/07.jpg",
        "photos/curations/rural-france/08.jpg",
        "photos/curations/rural-france/09.jpg",
        "photos/curations/rural-france/10.jpg",
        "photos/curations/rural-france/11.jpg",
        "photos/curations/rural-france/12.jpg",
        "photos/curations/rural-france/13.jpg",
        "photos/curations/rural-france/14.jpg",
        "photos/curations/rural-france/15.jpg",
        "photos/curations/rural-france/16.jpg",
        "photos/curations/rural-france/17.jpg",
        "photos/curations/rural-france/18.jpg",
        "photos/curations/rural-france/19.jpg",
        "photos/curations/rural-france/20.jpg",
        "photos/curations/rural-france/21.jpg",
        "photos/curations/rural-france/22.jpg",
        "photos/curations/rural-france/23.jpg",
        "photos/curations/rural-france/24.jpg",
        "photos/curations/rural-france/25.jpg",
        "photos/curations/rural-france/26.jpg",
        "photos/curations/rural-france/27.jpg",
        "photos/curations/rural-france/28.jpg",
        "photos/curations/rural-france/29.jpg",
        "photos/curations/rural-france/30.jpg",
        "photos/curations/rural-france/31.jpg",
        "photos/curations/rural-france/32.jpg",
        "photos/curations/rural-france/33.jpg",
      ],
    },

    {
      name: "Time",
      date: "December 2018 – January 2019",
      description: "",
      quote: "",
      cover: "photos/curations/time/10.jpg",
      images: [
        "photos/curations/time/01.jpg",
        "photos/curations/time/02.jpg",
        "photos/curations/time/03.jpg",
        "photos/curations/time/04.jpg",
        "photos/curations/time/05.jpg",
        "photos/curations/time/06.jpg",
        "photos/curations/time/07.jpg",
        "photos/curations/time/08.jpg",
        "photos/curations/time/09.jpg",
        "photos/curations/time/10.jpg",
        "photos/curations/time/11.jpg",
        "photos/curations/time/12.jpg",
        "photos/curations/time/13.jpg",
        "photos/curations/time/14.jpg",
        "photos/curations/time/15.jpg",
        "photos/curations/time/16.jpg",
        "photos/curations/time/17.jpg",
        "photos/curations/time/18.jpg",
        "photos/curations/time/19.jpg",
        "photos/curations/time/20.jpg",
        "photos/curations/time/21.jpg",
        "photos/curations/time/22.jpg",
        "photos/curations/time/23.jpg",
        "photos/curations/time/24.jpg",
        "photos/curations/time/25.jpg",
      ],
    },
  ],


  // --- PHOTOS (legacy flat grid — ARCHIVED) ---
  // Active array is empty so the flat grid no longer renders on the site.
  // The original 72-item list is preserved below (commented out) as a
  // backup. To restore it: copy the entries out of the /* ... */ block
  // back into the [] above, then bump the cache-buster on index.html.
  // The image files themselves still live in /photos/ on the repo.
  photos: [],
  /*
  PHOTOS_ARCHIVE: [
    { url: "photos/02.webp", caption: "" },
    { url: "photos/03.webp", caption: "" },
    { url: "photos/04.webp", caption: "" },
    { url: "photos/05.webp", caption: "" },
    { url: "photos/06.webp", caption: "" },
    { url: "photos/07.webp", caption: "" },
    { url: "photos/08.webp", caption: "" },
    { url: "photos/09.webp", caption: "" },
    { url: "photos/10.webp", caption: "" },
    { url: "photos/11.webp", caption: "" },
    { url: "photos/12.webp", caption: "" },
    { url: "photos/13.webp", caption: "" },
    { url: "photos/14.webp", caption: "" },
    { url: "photos/15.webp", caption: "" },
    { url: "photos/16.webp", caption: "" },
    { url: "photos/17.webp", caption: "" },
    { url: "photos/18.webp", caption: "" },
    { url: "photos/19.webp", caption: "" },
    { url: "photos/20.webp", caption: "" },
    { url: "photos/21.webp", caption: "" },
    { url: "photos/22.webp", caption: "" },
    { url: "photos/23.webp", caption: "" },
    { url: "photos/24.webp", caption: "" },
    { url: "photos/25.webp", caption: "" },
    { url: "photos/26.webp", caption: "" },
    { url: "photos/27.webp", caption: "" },
    { url: "photos/28.webp", caption: "" },
    { url: "photos/29.webp", caption: "" },
    { url: "photos/30.webp", caption: "" },
    { url: "photos/31.webp", caption: "" },
    { url: "photos/32.webp", caption: "" },
    { url: "photos/33.webp", caption: "" },
    { url: "photos/34.webp", caption: "" },
    { url: "photos/35.webp", caption: "" },
    { url: "photos/36.webp", caption: "" },
    { url: "photos/37.webp", caption: "" },
    { url: "photos/38.webp", caption: "" },
    { url: "photos/39.webp", caption: "" },
    { url: "photos/40.webp", caption: "" },
    { url: "photos/41.webp", caption: "" },
    { url: "photos/42.webp", caption: "" },
    { url: "photos/43.webp", caption: "" },
    { url: "photos/44.webp", caption: "" },
    { url: "photos/45.webp", caption: "" },
    { url: "photos/46.webp", caption: "" },
    { url: "photos/47.webp", caption: "" },
    { url: "photos/48.webp", caption: "" },
    { url: "photos/49.webp", caption: "" },
    { url: "photos/50.webp", caption: "" },
    { url: "photos/51.webp", caption: "" },
    { url: "photos/52.webp", caption: "" },
    { url: "photos/53.webp", caption: "" },
    { url: "photos/54.webp", caption: "" },
    { url: "photos/55.webp", caption: "" },
    { url: "photos/56.webp", caption: "" },
    { url: "photos/57.webp", caption: "" },
    { url: "photos/58.webp", caption: "" },
    { url: "photos/59.webp", caption: "" },
    { url: "photos/60.webp", caption: "" },
    { url: "photos/61.webp", caption: "" },
    { url: "photos/62.webp", caption: "" },
    { url: "photos/63.webp", caption: "" },
    { url: "photos/64.webp", caption: "" },
    { url: "photos/65.webp", caption: "" },
    { url: "photos/66.webp", caption: "" },
    { url: "photos/67.webp", caption: "" },
    { url: "photos/68.webp", caption: "" },
    { url: "photos/69.webp", caption: "" },
    { url: "photos/70.webp", caption: "" },
    { url: "photos/71.webp", caption: "" },
    { url: "photos/72.webp", caption: "" },
    { url: "photos/73.webp", caption: "" },
  ],
  */


  // --- WRITING ---
  // To add a piece: copy a block, fill in title / url / description.
  // The image is optional; leave it as an empty string to hide.
  writing: [
    {
      title: "Humboldt, the mind of a scientist and heart of a poet",
      url: "https://vosacreative.substack.com/p/humboldt-the-mind-of-a-scientist",
      description: "How the forgotten polymath Alexander von Humboldt's travels and writings paved the way for a new understanding of nature.",
      image: "https://substackcdn.com/image/fetch/$s_!g039!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe995462c-f8c4-4f02-9c40-ba5480970a36_705x1024.jpeg"
    },
    {
      title: "Absolute Idealism in Hegelianism and Advaita Vedanta",
      url: "https://vosacreative.substack.com/p/absolute-idealism-in-hegelianism",
      description: "Exploring the worldview of absolute idealism through Hegel and the philosophy of Advaita Vedanta.",
      image: "https://substackcdn.com/image/fetch/$s_!ftat!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fe00ef5-5b91-4ea5-a85b-a2454719254b_1280x1920.png"
    },
    {
      title: "Beyond Disciplines: The Transdisciplinary Approach",
      url: "https://vosacreative.substack.com/p/beyond-disciplines-the-transdisciplinary",
      description: "Tracing the history of disciplinary thinking — and what it means to think between, across, and beyond the disciplines.",
      image: "https://substackcdn.com/image/fetch/$s_!FOEW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8d23c1a2-82fe-413c-9ed9-28285e53d9bc_1064x1637.jpeg"
    },
    {
      title: "We Live Inside a Metaphor",
      url: "https://vosacreative.substack.com/p/we-live-inside-a-metaphor",
      description: "Tracing the evolution of metaphors surrounding technology across the Western imagination.",
      image: "https://substackcdn.com/image/youtube/w_728,c_limit/YeIB0uNhH3k"
    },
    {
      title: "The Invention of Time",
      url: "https://vosacreative.substack.com/p/the-invention-of-time",
      description: "How the mechanical clock restructured our experience of time.",
      image: "https://substackcdn.com/image/youtube/w_728,c_limit/X8QS6HN1XlU"
    },
    {
      title: "The Attention Economy",
      url: "https://vosacreative.substack.com/p/the-attention-economy",
      description: "The making of the modern digital attention economy.",
      image: "https://substackcdn.com/image/youtube/w_728,c_limit/EBBJVx-fyjU"
    },
  ],

};
