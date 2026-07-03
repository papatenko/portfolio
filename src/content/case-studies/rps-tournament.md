---
title: 'Rock Paper Scissors Tournament'
summary: 'Real-time competitive RPS tournament platform with a retro arcade theme, run live on campus.'
tech: ['TypeScript', 'React', 'Node.js', 'Socket.IO']
repoUrl: 'https://github.com/devaine/RPS-Tournament'
demoUrl: 'https://rps.papatenko.org/'
image: '/images/projects/rps-tournament.png'
order: 2
---

## Problem & user context

Campus events needed a game everyone already knows how to play, with zero setup, that works on whatever phone a student pulls out of their pocket. Rock-paper-scissors fits — but running a fair, fast tournament with live brackets by hand doesn't scale past a handful of players.

## Constraints & tradeoffs

- **Real-time on flaky campus Wi-Fi.** Socket.IO with reconnection handling so a dropped connection doesn't forfeit a match.
- **Zero-install.** Pure web app — players join from a URL, no accounts, no app store.
- **Retro arcade theme.** Deliberate CRT/arcade aesthetic to make a simple game feel like an event.

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
- Lesson: real-time state sync is 20% happy path, 80% reconnection and edge cases — designing the state machine first saved the project.
