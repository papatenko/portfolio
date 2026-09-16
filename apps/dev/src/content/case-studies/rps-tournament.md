---
title: 'Rock Paper Scissors Tournament'
summary: 'Real-time competitive RPS tournament platform with a retro arcade theme, run live on campus.'
description: 'A real-time multiplayer tournament platform in React, TypeScript, and Socket.IO, with live brackets and a retro arcade UI. Run live on campus. Case study by Justin Kondratenko.'
ogImage: '/og/rps-tournament.png'
tech: ['TypeScript', 'React', 'Node.js', 'Socket.IO']
repoUrl: 'https://github.com/devaine/RPS-Tournament'
demoUrl: 'https://rps.papatenko.org/'
image: '/images/projects/rps-tournament.png'
order: 2
---

## Problem & user context

Campus events needed a familiar game with zero setup that worked on any student phone. Rock-paper-scissors fits. Running a fair, fast tournament with live brackets by hand does not scale past a handful of players.

## Constraints & tradeoffs

- Real-time on flaky campus Wi-Fi. Socket.IO reconnection handling keeps a dropped connection from forfeiting a match.
- Zero-install. Players join the web app from a URL without an account or app store download.
- Retro arcade theme. A deliberate CRT and arcade aesthetic makes a simple game feel like an event.

## Architecture

```text
Players (mobile browsers)
   │  Socket.IO
   ▼
Node.js game server ── match state, bracket progression, anti-cheat timing
   │
   ▼
React frontend ── lobby, live bracket display (big screen), match UI
```

## Screenshots

Watch the [showcase video](https://www.youtube.com/watch?v=pilOqmKyrKA) for the live tournament in action.

<!-- TODO: add screenshots to /public/images/case-studies/ and embed here -->

## Results & lessons

- Successfully hosted live tournaments on the Cy-Fair campus with a projected live bracket.
- Lesson: real-time state sync is 20% happy path and 80% reconnection and edge cases. Designing the state machine first saved the project.
