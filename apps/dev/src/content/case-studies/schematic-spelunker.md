---
title: 'Schematic Spelunker'
summary: 'AI chatbot that parses machinery schematics so technicians get informed answers about their unique equipment.'
description: 'A retrieval-augmented chatbot that parses machinery schematics with React, Rust, and the Gemini API. Built in 24 hours with a team of four. Case study by Justin Kondratenko.'
ogImage: '/og/schematic-spelunker.png'
tech: ['React', 'Rust', 'Gemini API', 'RAG', 'Document Parsing']
image: '/images/projects/schematic-spelunker.png'
order: 4
---

## Problem & user context

Technicians working on specialized machinery rely on dense schematic documents that are hard to search and easy to misread. A wrong interpretation can mean broken equipment or safety risk. Schematic Spelunker (built with a team at a hackathon) turns those schematics into a conversational assistant.

## Constraints & tradeoffs

- Hackathon clock. Scope was parse, retrieve, and answer, with citations back to the source schematic.
- Accuracy over fluency. Grounded retrieval (RAG) takes priority over freeform generation. An answer that cites the schematic beats a confident guess.

## Architecture

```text
Schematic PDFs ──► parser / chunker ──► vector store
                                            │  retrieval
User question ──► LLM (grounded prompt) ◄──┘
                     │
                     ▼
             Answer + schematic citations
```

## Results & lessons

- Working demo shipped within the hackathon window with a 4-person team.
- Lesson: document parsing quality sets the ceiling for answer quality. The chunking strategy mattered more than the model choice.
