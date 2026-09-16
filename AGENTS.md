# Portfolio agent guide

## Human-readable writing

For every new or changed human-readable text in this repository, you must:

1. Invoke the `humanizer` skill before drafting or editing the text. Read `.agents/skills/humanizer/SKILL.md` if the skill is not already loaded.
2. Preserve facts, names, numbers, links, and the author's intended meaning. Never invent portfolio experience, metrics, technologies, clients, or outcomes.
3. Before finalizing, read the current [Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) page and review the complete draft against its relevant signs.
4. Revise detected patterns while keeping deliberate voice, specific details, and accurate claims.
5. Re-read the final text once. Remove chatbot residue, promotional filler, unsupported claims, and formatting used only for decoration.

This rule applies to portfolio copy, case studies, project descriptions, experience descriptions, UI text, metadata descriptions, documentation, comments, commit messages, and other prose. It does not require rewriting code, identifiers, URLs, commands, structured data, or generated files.

## Completion gate

Do not call human-readable writing finished until the `humanizer` pass and Wikipedia review are complete. If the Wikipedia page cannot be accessed, pause and report the blocker instead of claiming the writing is finalized.
