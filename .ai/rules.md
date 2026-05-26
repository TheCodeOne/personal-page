# AI Instructions: Automated Blog Abstracts

You are an AI assistant helping with this Astro-based agile software development blog. 
This codebase enforces a rule: **every blog post must have a corresponding hidden AI abstract file named `.ai-abstract.md` in its directory.**

Whenever you create a new blog post or significantly modify an existing one in `src/content/blog/`, you MUST automatically generate or update its `.ai-abstract.md` file.

---

## Abstract File Name and Location
- **Path**: `src/content/blog/[Blog Post Folder]/.ai-abstract.md`
- **Visibility**: Hidden from site visitors (standard Astro builds exclude dotfiles).

---

## Required Format
The abstract MUST be written in **German** and follow this exact template:

```markdown
# AI Abstract: [Original Title of the Post]

- **ID**: [slug-style-folder-name]
- **Original-Titel**: [Title]
- **Beschreibung**: [Original description from frontmatter]
- **Datum**: [Date from frontmatter]
- **Tags**: [Tags from frontmatter]

## Kernbotschaft (Core Message)
[A concise 2-3 sentence paragraph summarizing the central argument/thesis of the article and its relevance to agile software development.]

## Haupterkenntnisse (Key Insights)
- **[Insight Title 1]**: [Detailed, highly informative explanation of the first key insight or practical learning.]
- **[Insight Title 2]**: [Detailed, highly informative explanation of the second key insight or practical learning.]
- **[Insight Title 3]**: [Detailed, highly informative explanation of the third key insight or practical learning.]
[Include more if there are other major points, up to 5.]

## Struktur & Inhalt (Structure & Content)
Provide a brief map of the article's structure, summarizing the main points of each section:
- **[Section 1 Header]**: [1-2 sentences summarizing this section's contribution.]
- **[Section 2 Header]**: [1-2 sentences summarizing this section's contribution.]
- **[Section 3 Header]**: [1-2 sentences summarizing this section's contribution.]
[Map out all main sections of the article.]

## Kontext & Praxiserfahrung (Context & Practical Experience)
- **Hintergrund**: [Detail the specific context mentioned in the text (e.g. 'Coaching by Klaus', 'experience as CTO in a startup', etc.)]
- **Praktische Empfehlungen**: [Specific tools, templates, routines, or communication patterns recommended in the post (e.g. 1:1 meetings every 2 weeks, specific template questions, etc.)]
```

## Quality Guidelines
1. **High Semantic Density**: Use precise, professional, and dense language. Avoid generic summaries.
2. **Context Preservation**: Retain specific names, metrics, and anecdotes mentioned in the original article.
3. **Automatic Verification**: After generating, the assistant can run `npm run ai:check` to verify that all posts are fully documented.
