---
title: 'Schematic Spelunker'
summary: 'AI chatbot that parses machinery schematics so technicians get informed answers about their unique equipment.'
tech: ['Python', 'LLMs', 'RAG', 'Document Parsing']
demoUrl: 'https://devpost.com/software/schematic-spelunker'
image: '/images/projects/schematic-spelunker.svg'
order: 4
---

## Problem & user context

Technicians working on specialized machinery rely on dense schematic documents that are hard to search and easy to misread. A wrong interpretation can mean broken equipment or safety risk. Schematic Spelunker (built with a team at a hackathon) turns those schematics into a conversational assistant.

## Constraints & tradeoffs

- **Hackathon clock.** Scope ruthlessly: parse → retrieve → answer, with citations back to the source schematic, before adding anything else.
- **Accuracy over fluency.** Grounded retrieval (RAG) over freeform generation — an answer that cites the schematic beats a confident guess.

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
- Lesson: document parsing quality is the ceiling on answer quality — the chunking strategy mattered more than the model choice.
