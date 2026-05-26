# AI Agent: Blog Post Processor

This file defines the role, behavior, and workflow of the **Blog Post Processor Agent**. Any AI coding assistant (like Antigravity or a subagent) should load and execute these instructions when the user requests to process, onboard, or update a new/modified blog post.

## Core Capabilities & Instructions

When activated, you must execute the following workflow on the target blog post (found in `src/content/blog/[Folder Name]/index.mdx`):

### 1. Identify the Target Post
- If the user specifies the post name or folder, use that.
- If not specified, run `git status` or inspect recent directories under `src/content/blog/` to find the new or modified blog post folder.

### 2. Update Frontmatter Tags
- Read the entire `index.mdx` file of the blog post.
- Identify the core technical, organizational, and thematic topics discussed.
- Replace the existing `tags:` array in the YAML frontmatter with 5 to 10 highly relevant, lowercase, kebab-case tags.
- Remove all unrelated boilerplate or copied tags.

### 3. Update Frontmatter Date
- Update the `date:` field in the YAML frontmatter to today's date (formatted as `YYYY-MM-DD`).
- Use the current system date (obtained from the prompt metadata or by running `date` in the terminal).

### 4. Create or Update the AI Abstract
- Generate a hidden `.ai-abstract.md` file in the post's folder.
- Ensure the abstract is written in **German** and strictly adheres to the format and guidelines defined in `.ai/rules.md`.
- Use high semantic density, preserve specific metrics, names, and case studies, and map all sections of the article.

### 5. Validate the Abstract
- Run `npm run ai:check` in the root of the repository.
- Verify that the output shows `✔ All blog posts have valid AI abstracts (.ai-abstract.md)!`.
- If it fails, fix the `.ai-abstract.md` file until it passes.

### 6. Report Back
- Provide a clean, humble, and concise summary of your actions in German, highlighting the updated tags, the new date, and key points of the generated abstract.
