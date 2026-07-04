import re

# Title page
title = """CULINARY CRESCENDO: THE SCARLET FOUNDATION
A Prequel to A Symphony of Love in the Big Easy

By Lejohn Richburg III

---

"""

def extract_manuscript(filepath, stop_markers):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Cut off at the first stop marker found
    for marker in stop_markers:
        idx = content.find(marker)
        if idx != -1:
            content = content[:idx]
    return content.strip()

def strip_file_headers(content):
    # Remove lines that are purely editor/file headers (first few lines before chapter starts)
    lines = content.split('\n')
    start = 0
    for i, line in enumerate(lines):
        if line.startswith('## CHAPTER') or line.startswith('# Chapter'):
            start = i
            break
    return '\n'.join(lines[start:])

# --- Chapters 0 through Prologue ---
ch0_prologue = extract_manuscript(
    r"C:\Users\richb\Desktop\Publishing Team\outputs\edited-chapters-0-prologue.md",
    ["## CHANGE LOG", "## FLAGS FOR AUTHOR REVIEW", "---\n\n## CHANGE"]
)
ch0_prologue = strip_file_headers(ch0_prologue)

# --- Chapters 1 through 8 (stop before Chapter 9 in that file) ---
ch1_8 = extract_manuscript(
    r"C:\Users\richb\Desktop\Publishing Team\outputs\edited-chapters-1-9.md",
    ["## CHAPTER 9: ROE VELVET", "## CHANGE LOG"]
)
ch1_8 = strip_file_headers(ch1_8)

# --- Chapter 9 (author's corrected version) ---
with open(r"C:\Users\richb\Desktop\Publishing Team\Chapter_9_corrected.md.txt", 'r', encoding='utf-8') as f:
    ch9 = f.read().strip()
ch9 = "## CHAPTER 9: ROE VELVET\n\n" + ch9

# --- Chapters 10 and 11 ---
ch10_11 = extract_manuscript(
    r"C:\Users\richb\Desktop\Publishing Team\outputs\chapters-10-11-draft.md",
    ["*End of Prequel*", "---\n\n*End"]
)
ch10_11 = strip_file_headers(ch10_11)

# --- Closing line ---
closing = """

---

*End of Prequel*

---

*The story continues in*
*Culinary Crescendo: A Symphony of Love in the Big Easy*
"""

# --- Author note placeholder for Katrina ---
katrina_note = """

[AUTHOR'S NOTE — TO BE ADDED: The Katrina passage in Chapter Zero. Baron's father. Written by the author in his own time and words.]

"""

# Assemble full manuscript
# Insert katrina note into ch0_prologue at the right spot
katrina_marker = "[AUTHOR EXPANSION NEEDED HERE"
if katrina_marker in ch0_prologue:
    ch0_prologue = ch0_prologue.replace(
        next(line for line in ch0_prologue.split('\n') if katrina_marker in line),
        katrina_note
    )

full_manuscript = title + ch0_prologue + "\n\n---\n\n" + ch1_8 + "\n\n---\n\n" + ch9 + "\n\n---\n\n" + ch10_11 + closing

output_path = r"C:\Users\richb\Desktop\Publishing Team\outputs\Scarlet_Foundation_FULL_DRAFT_v1.md"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(full_manuscript)

# Word count of final manuscript
words = len([w for w in full_manuscript.split() if w.strip()])
print(f"Manuscript compiled successfully.")
print(f"Output: {output_path}")
print(f"Total words: {words:,}")
print(f"Estimated reading time: {words // 238} minutes")
