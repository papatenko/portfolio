/**
 * ALL EDITABLE CONTENT for the creative site lives in this one file.
 */

export const site = {
  name: 'Papatenko',
  realName: 'Justin Kondratenko',
  tagline: 'video editor · thumbnail goblin · logo maker · motion tinkerer',
  email: 'justinkondratenko@proton.me',
  devSite: 'https://justinkondratenko.dev',
  social: {
    youtube: 'https://www.youtube.com/@papatenko',
    instagram: 'https://www.instagram.com/papatenk0/',
    github: 'https://github.com/papatenko',
    upwork: 'https://www.upwork.com/freelancers/~01e832daf1053cb695',
  },
  marquee: [
    'VIDEO EDITING',
    'THUMBNAILS',
    'LOGOS',
    'POSTERS',
    'COLOR GRADING',
    'MOTION',
    'DAVINCI RESOLVE',
    'PREMIERE PRO',
    'AFTER EFFECTS',
    'PHOTOSHOP',
    'BLENDER',
  ],
};

/**
 * VIDEO WORK — client cards with lite YouTube embeds.
 * `videoId` is the YouTube ID; thumbnails load from i.ytimg.com.
 */
export interface Video {
  client: string;
  channelUrl: string;
  title: string;
  videoId: string;
  role: string; // what Justin did
  blurb: string;
}

export const videos: Video[] = [
  {
    client: 'Continuously Sidetracked',
    channelUrl: 'https://youtube.com/@continuouslysidetracked',
    title: 'How did Miles Morales get so popular?',
    videoId: '0tvIZ_-Arcw',
    role: 'Editing · Pacing · Engagement cuts',
    blurb: 'Video-essay editing tuned for retention — strategic pacing boosted average viewer retention 25% across this channel\'s uploads.',
  },
  {
    client: 'ColleagueUs',
    channelUrl: 'https://www.youtube.com/channel/UCE0SF1iJ7XrUUGMxBH0R5rQ',
    title: 'ColleagueUs Commercial',
    videoId: 'qEDCe1ukFgY',
    role: 'Production · Direction · Edit',
    blurb: 'Full commercial production: coordinated and filmed interviews with 6+ people, directed on-camera talent, cut the final spot for YouTube + Instagram.',
  },
  {
    client: 'Today Talk',
    channelUrl: 'https://m.youtube.com/@TodayTalkPodcast/videos',
    title: 'Today Talk Podcast',
    videoId: 'lnkh_uTqz3M',
    role: 'End-to-end edit · Color grade · Graphics',
    blurb: '7+ podcast episodes edited end-to-end in DaVinci Resolve and Premiere — consistent pacing, audio sync, and an on-brand color grade.',
  },
  {
    client: 'Abdo',
    channelUrl: 'https://m.youtube.com/@AbdoM3',
    title: 'Abdo',
    videoId: 'tmcs74AyYYI',
    role: 'Editing',
    blurb: 'Engagement-focused cuts and pacing for a growing creator channel.',
  },
  {
    client: 'Sti1tches',
    channelUrl: 'https://www.youtube.com/@Sti1tches',
    title: 'valorant but its unhinged...',
    videoId: 'Eg0Nb_gPgik',
    role: 'Thumbnail art',
    blurb: 'Thumbnail design only on this one (the edit is all Sti1tches) — part of a run of thumbnails that drove 1,000+ views per video for the channel.',
  },
  {
    client: 'Papatenko (me!)',
    channelUrl: 'https://www.youtube.com/@papatenko',
    title: 'Borderlands out of Context',
    videoId: 'zGq9FSzoMlY',
    role: 'Everything',
    blurb: 'My own channel\'s highest-grossing video. Chaos, but curated chaos.',
  },
];

/**
 * ART GALLERY — most recent pieces from the papatenko archive.
 * Local files live in public/art/. kind: thumbnail | poster | logo.
 */
export interface Art {
  title: string;
  year: number;
  kind: 'thumbnail' | 'poster' | 'logo';
  src: string;
  desc: string;
  link?: string;
  /** sticker rotation in deg — part of the fun */
  tilt: number;
}

export const art: Art[] = [
  {
    title: 'Stitches Mc',
    year: 2024,
    kind: 'thumbnail',
    src: '/art/stitches_mc.png',
    desc: 'Minecraft thumbnail for Sti1tches.',
    tilt: -2,
  },
  {
    title: 'Marvel Rivals',
    year: 2024,
    kind: 'thumbnail',
    src: '/art/marvel_rivals.png',
    desc: 'Gameplay thumbnail — big shapes, bigger drama.',
    link: 'https://www.youtube.com/watch?v=Ne-pKvfFAGk',
    tilt: 1.5,
  },
  {
    title: 'Game Workshop',
    year: 2024,
    kind: 'poster',
    src: '/art/game_workshop.png',
    desc: 'CS Club game-dev workshop poster.',
    tilt: 2,
  },
  {
    title: 'Developer Roadmap',
    year: 2024,
    kind: 'poster',
    src: '/art/developer_roadmap.png',
    desc: 'Meeting poster for the CS Club roadmap talk.',
    tilt: -1.5,
  },
  {
    title: 'Website Workshop',
    year: 2024,
    kind: 'poster',
    src: '/art/website_workshop.png',
    desc: 'Poster for the club\'s web-dev workshop.',
    tilt: 1,
  },
  {
    title: 'CS Club Logo',
    year: 2023,
    kind: 'logo',
    src: '/art/cs_club.png',
    desc: 'Official logo of the Lone Star CyFair Computer Science Club — my proudest logo work.',
    tilt: -2.5,
  },
  {
    title: 'One Piece — Sidetracked',
    year: 2023,
    kind: 'thumbnail',
    src: '/art/sidetracked.png',
    desc: 'Thumbnail for Continuously Sidetracked.',
    link: 'https://www.youtube.com/watch?v=3dTJMtK_4Ew',
    tilt: 2.5,
  },
  {
    title: 'Power of No CGI (unused)',
    year: 2023,
    kind: 'thumbnail',
    src: '/art/power_no_cgi.png',
    desc: 'The client never used it. Their loss.',
    tilt: -1,
  },
  {
    title: 'Papatenko Pixel PFP',
    year: 2026,
    kind: 'logo',
    src: '/art/pixel-pfp.png',
    desc: 'The current me, pixel-swapped — curls, gold shades, sunset gradient. Evolution of the fake-NFT bit.',
    tilt: 3,
  },
];
