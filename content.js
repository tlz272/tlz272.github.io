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
  // Standalone — Valves
  { title: "Valves",                      src: "audio/valves.mp3",                      artwork: "audio/art/valves.jpg" },

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

  // Group 4 — Nebula Mandala
  { title: "Nebula Mandala",              src: "audio/a5-nebula-mandala.mp3",           artwork: "audio/art/a5-nebula-mandala.jpg",          group: "Nebula Mandala" },
  { title: "Texture 92",                  src: "audio/texture-92.mp3",                  artwork: "audio/art/texture-92.jpg",                 group: "Nebula Mandala" },
  { title: "Sketches for Sunken Hammers", src: "audio/sketches-for-sunken-hammers.mp3", artwork: "audio/art/sketches-for-sunken-hammers.jpg", group: "Nebula Mandala" },

  // Group 5 — Shadows Dance
  { title: "Shadows Dance",               src: "audio/shadows-dance.mp3",               artwork: "audio/art/shadows-dance.jpg",              group: "Shadows Dance" },
  { title: "Immolation",                  src: "audio/immolation.mp3",                  artwork: "audio/art/immolation.jpg",                 group: "Shadows Dance" },
  { title: "Moongaze Railways",           src: "audio/moongaze-railways.mp3",           artwork: "audio/art/moongaze-railways.jpg",          group: "Shadows Dance" },
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


  // --- FILMS (dual-screen synced player) ---
  // For two-channel films originally designed for installation. Each entry
  // shows two videos side-by-side with one shared audio track. Audio is the
  // master clock — the player snaps the videos back to audio.currentTime if
  // they drift more than ~0.18 seconds.
  //
  // To add a film:
  //   1. Drop two compressed MP4s into /films/ (e.g. room-service-left.mp4
  //      and room-service-right.mp4). See conversion recipe in chat history.
  //      Each file must be UNDER 100 MB (GitHub's per-file limit).
  //   2. Drop the mixed audio as MP3 into /films/.
  //   3. Add a block below with the paths. Flip `ready: true` once files
  //      are in place. Leave `ready: false` to show a "Video coming soon"
  //      placeholder while the audio-only mix is still being prepared.
  films: [
    {
      title:       "Room Service",
      credit:      "Fremantle Biennale, 2025 — dual-channel film-poem",
      description: "A two-channel film-poem co-directed, filmed, edited, and scored by Tobias Leigh Robertson for the Room Service exhibition at the Fremantle Biennale (2025). Originally presented across two facing walls of the installation space; the dual channels play synchronously here as a single field of attention.",
      leftSrc:     "films/room-service-left.mp4",
      rightSrc:    "films/room-service-right.mp4",
      audioSrc:    "films/room-service.mp3",
      ready:       true,   // set to false to show a placeholder until the MP4s are uploaded
    },
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
      name: "Shadow Bird",
      date: "",
      description: "A single frame. Bird and shadow caught in passage, each refusing to belong wholly to the other.",
      quote: "",
      cover: "photos/curations/shadow-bird/01.jpg",
      images: [
        "photos/curations/shadow-bird/01.jpg",
      ],
    },

    {
      name: "Moonlight",
      date: "November 2018",
      description: "Photographs made beneath the moon, where colour drains and silver remains.",
      quote: "",
      cover: "photos/curations/moonlight/01.jpg",
      images: [
        "photos/curations/moonlight/01.jpg",
        "photos/curations/moonlight/02.jpg",
      ],
    },

    {
      name: "Painting with Light",
      date: "June 2019",
      description: "Long-exposure studies where the camera becomes a brush. Light gathered, smeared, drawn — held briefly on the sensor.",
      quote: "",
      cover: "photos/curations/painting-with-light/01.jpg",
      images: [
        "photos/curations/painting-with-light/01.jpg",
        "photos/curations/painting-with-light/02.jpg",
        "photos/curations/painting-with-light/03.jpg",
        "photos/curations/painting-with-light/04.jpg",
        "photos/curations/painting-with-light/05.jpg",
        "photos/curations/painting-with-light/06.jpg",
        "photos/curations/painting-with-light/07.jpg",
        "photos/curations/painting-with-light/08.jpg",
        "photos/curations/painting-with-light/09.jpg",
        "photos/curations/painting-with-light/10.jpg",
        "photos/curations/painting-with-light/11.jpg",
        "photos/curations/painting-with-light/12.jpg",
        "photos/curations/painting-with-light/13.jpg",
      ],
    },

    {
      name: "Cathedrals",
      date: "January 2019",
      description: "Vaulted air, columns of stone made luminous. Studies in the way light enters a sacred space and is shaped by it.",
      quote: "",
      cover: "photos/curations/cathedrals/01.jpg",
      images: [
        "photos/curations/cathedrals/01.jpg",
        "photos/curations/cathedrals/02.jpg",
        "photos/curations/cathedrals/03.jpg",
        "photos/curations/cathedrals/04.jpg",
        "photos/curations/cathedrals/05.jpg",
        "photos/curations/cathedrals/06.jpg",
      ],
    },

    {
      name: "Gargoyles",
      date: "",
      description: "Stone watchers carved into Gothic facades. Studies in the grotesque and the grace it acquires through centuries.",
      quote: "",
      cover: "photos/curations/gargoyles/01.jpg",
      images: [
        "photos/curations/gargoyles/01.jpg",
        "photos/curations/gargoyles/02.jpg",
        "photos/curations/gargoyles/03.jpg",
        "photos/curations/gargoyles/04.jpg",
        "photos/curations/gargoyles/05.jpg",
        "photos/curations/gargoyles/06.jpg",
        "photos/curations/gargoyles/07.jpg",
        "photos/curations/gargoyles/08.jpg",
        "photos/curations/gargoyles/09.jpg",
        "photos/curations/gargoyles/10.jpg",
        "photos/curations/gargoyles/11.jpg",
      ],
    },

    {
      name: "Burgundy",
      date: "December 2018",
      description: "Vineyards and the slow farmhouses of eastern France. Quiet country in shorter winter light.",
      quote: "",
      cover: "photos/curations/burgundy/01.jpg",
      images: [
        "photos/curations/burgundy/01.jpg",
        "photos/curations/burgundy/02.jpg",
        "photos/curations/burgundy/03.jpg",
        "photos/curations/burgundy/04.jpg",
        "photos/curations/burgundy/05.jpg",
        "photos/curations/burgundy/06.jpg",
        "photos/curations/burgundy/07.jpg",
        "photos/curations/burgundy/08.jpg",
        "photos/curations/burgundy/09.jpg",
        "photos/curations/burgundy/10.jpg",
        "photos/curations/burgundy/11.jpg",
        "photos/curations/burgundy/12.jpg",
      ],
    },

    {
      name: "Epoché",
      date: "January 2020",
      description: "A phenomenological pause — bracketing the familiar to see again what was always there.",
      quote: "",
      cover: "photos/curations/epoche/01.jpg",
      images: [
        "photos/curations/epoche/01.jpg",
        "photos/curations/epoche/02.jpg",
        "photos/curations/epoche/03.jpg",
        "photos/curations/epoche/04.jpg",
        "photos/curations/epoche/05.jpg",
        "photos/curations/epoche/06.jpg",
        "photos/curations/epoche/07.jpg",
      ],
    },

    {
      name: "Kinetic Roots",
      date: "",
      description: "Movement and stillness in dialogue — the unseen choreographies of the natural world.",
      quote: "",
      cover: "photos/curations/kinetic-roots/01.jpg",
      images: [
        "photos/curations/kinetic-roots/01.jpg",
        "photos/curations/kinetic-roots/02.jpg",
        "photos/curations/kinetic-roots/03.jpg",
        "photos/curations/kinetic-roots/04.jpg",
        "photos/curations/kinetic-roots/05.jpg",
        "photos/curations/kinetic-roots/06.jpg",
        "photos/curations/kinetic-roots/07.jpg",
        "photos/curations/kinetic-roots/08.jpg",
        "photos/curations/kinetic-roots/09.jpg",
        "photos/curations/kinetic-roots/10.jpg",
        "photos/curations/kinetic-roots/11.jpg",
        "photos/curations/kinetic-roots/12.jpg",
        "photos/curations/kinetic-roots/13.jpg",
      ],
    },

    {
      name: "The Pantheon",
      date: "January 2019",
      description: "Beneath the oculus, where rain still falls indoors. A study in the geometry of awe.",
      quote: "",
      cover: "photos/curations/pantheon/03.jpg",
      images: [
        "photos/curations/pantheon/01.jpg",
        "photos/curations/pantheon/02.jpg",
        "photos/curations/pantheon/03.jpg",
        "photos/curations/pantheon/04.jpg",
        "photos/curations/pantheon/05.jpg",
      ],
    },

    {
      name: "Untitled",
      date: "December 2018",
      description: "Stone, weather, and the long patience of architecture. Walls remembering centuries of light.",
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
      ],
    },

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
      name: "Untitled",
      date: "December 2018 – January 2019",
      description: "An attempt at what cannot quite be photographed — duration, weathering, the slow passage of light across surfaces.",
      quote: "",
      cover: "photos/curations/time-miscellaneous/10.jpg",
      images: [
        "photos/curations/time-miscellaneous/01.jpg",
        "photos/curations/time-miscellaneous/02.jpg",
        "photos/curations/time-miscellaneous/03.jpg",
        "photos/curations/time-miscellaneous/04.jpg",
        "photos/curations/time-miscellaneous/05.jpg",
        "photos/curations/time-miscellaneous/06.jpg",
        "photos/curations/time-miscellaneous/07.jpg",
        "photos/curations/time-miscellaneous/08.jpg",
        "photos/curations/time-miscellaneous/09.jpg",
        "photos/curations/time-miscellaneous/10.jpg",
        "photos/curations/time-miscellaneous/11.jpg",
        "photos/curations/time-miscellaneous/12.jpg",
        "photos/curations/time-miscellaneous/13.jpg",
        "photos/curations/time-miscellaneous/14.jpg",
        "photos/curations/time-miscellaneous/15.jpg",
        "photos/curations/time-miscellaneous/16.jpg",
        "photos/curations/time-miscellaneous/17.jpg",
        "photos/curations/time-miscellaneous/18.jpg",
        "photos/curations/time-miscellaneous/19.jpg",
        "photos/curations/time-miscellaneous/20.jpg",
        "photos/curations/time-miscellaneous/21.jpg",
        "photos/curations/time-miscellaneous/22.jpg",
        "photos/curations/time-miscellaneous/23.jpg",
        "photos/curations/time-miscellaneous/24.jpg",
        "photos/curations/time-miscellaneous/25.jpg",
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
