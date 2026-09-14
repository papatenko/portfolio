#!/usr/bin/env python3
"""
Generate the Open Graph card images in public/og/.

These are committed PNGs, not a build step — the site has no image
pipeline and OG cards change about twice a year. Re-run this script
when a title or the metric row changes:

    python3 scripts/generate-og.py

Requires Pillow and JetBrains Mono. Set OG_FONT_DIR if the font lives
somewhere other than the default below.
"""
import os
import pathlib

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "og"

FONT_DIR = os.environ.get(
    "OG_FONT_DIR", "/mnt/skills/examples/canvas-design/canvas-fonts"
)
MONO_B = os.path.join(FONT_DIR, "JetBrainsMono-Bold.ttf")
MONO_R = os.path.join(FONT_DIR, "JetBrainsMono-Regular.ttf")

# Dark-theme palette from src/styles/global.css
BG = (30, 28, 29)
SURFACE = (42, 39, 40)
TEXT = (242, 238, 238)
MUTED = (183, 174, 176)
ACCENT = (242, 160, 184)  # pastel hibiscus
GOLD = (246, 199, 120)  # pastel mango
GREEN = (52, 211, 153)

# Cards: filename -> (kicker, title, subtitle, footer chips)
CARDS = {
    "default": (
        "~$ whoami",
        "Justin Kondratenko",
        "AI systems, full-stack web apps, and the\nself-hosted infrastructure underneath them.",
        ["54 sites audited", "60+ agent skills", "20+ stacks", "99%+ uptime"],
    ),
    "momenta-os": (
        "~$ cat case-studies/momenta-os",
        "Momenta OS",
        "An agent operating system on a\ngoverned Drive vault, with 60+ versioned skills.",
        ["Agent Harnesses", "MCP", "Agent Skills", "Governance"],
    ),
    "homelab": (
        "~$ cat case-studies/homelab",
        "Proxmox Homelab",
        "Five hosts, 20+ container stacks under GitOps,\nand backups I have actually restored from.",
        ["Proxmox", "Docker", "GitOps", "99%+ uptime"],
    ),
    "rps-tournament": (
        "~$ cat case-studies/rps-tournament",
        "RPS Tournament",
        "Real-time multiplayer brackets in React and\nSocket.IO, run live on campus.",
        ["TypeScript", "React", "Socket.IO"],
    ),
    "schematic-spelunker": (
        "~$ cat case-studies/schematic-spelunker",
        "Schematic Spelunker",
        "A retrieval-augmented chatbot that parses\nmachinery schematics. Built in 24 hours.",
        ["React", "Rust", "Gemini", "RAG"],
    ),
    "shako-kabob-pos": (
        "~$ cat case-studies/shako-kabob-pos",
        "Foodtruck POS",
        "Point-of-sale and online ordering, from the\ndatabase schema to automated deploys.",
        ["React", "Node.js", "MySQL", "Docker"],
    ),
}


def fit(text, font_path, max_width, start, draw, minimum=34):
    """Largest size at or below `start` that keeps `text` inside max_width."""
    size = start
    while size > minimum:
        font = ImageFont.truetype(font_path, size)
        if draw.textlength(text, font=font) <= max_width:
            return font
        size -= 2
    return ImageFont.truetype(font_path, minimum)


def render(name, kicker, title, subtitle, chips):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # Soft accent glow, bottom-right — matches the site's backdrop.
    glow = Image.new("RGB", (W, H), BG)
    gd = ImageDraw.Draw(glow)
    for i in range(26):
        r = 520 - i * 18
        t = i / 25
        gd.ellipse(
            [W - 200 - r, H - 60 - r, W - 200 + r, H - 60 + r],
            fill=(
                int(BG[0] + (90 - BG[0]) * t * 0.55),
                int(BG[1] + (40 - BG[1]) * t * 0.55),
                int(BG[2] + (60 - BG[2]) * t * 0.55),
            ),
        )
    img = Image.blend(glow, img, 0.55)
    d = ImageDraw.Draw(img)

    PAD = 76

    # Accent rule down the left edge
    d.rectangle([0, 0, 10, H], fill=ACCENT)

    # Terminal window chrome
    for i, c in enumerate([(230, 90, 110), (246, 199, 120), GREEN]):
        d.ellipse([PAD + i * 26, PAD - 6, PAD + i * 26 + 14, PAD + 8], fill=c)

    f_kick = ImageFont.truetype(MONO_R, 24)
    d.text((PAD, PAD + 34), kicker, font=f_kick, fill=GOLD)

    f_title = fit(title, MONO_B, W - PAD * 2, 76, d)
    d.text((PAD, PAD + 84), title, font=f_title, fill=TEXT)

    f_sub = ImageFont.truetype(MONO_R, 27)
    d.multiline_text(
        (PAD, PAD + 190), subtitle, font=f_sub, fill=MUTED, spacing=14
    )

    # Chip row
    f_chip = ImageFont.truetype(MONO_R, 22)
    x, y = PAD, H - 168
    for chip in chips:
        w = d.textlength(chip, font=f_chip)
        box = [x, y, x + w + 36, y + 48]
        d.rounded_rectangle(box, radius=24, fill=SURFACE, outline=(70, 60, 64))
        d.text((x + 18, y + 11), chip, font=f_chip, fill=ACCENT)
        x += w + 36 + 14

    # Footer
    f_foot = ImageFont.truetype(MONO_B, 26)
    d.text((PAD, H - 88), "justinkondratenko.dev", font=f_foot, fill=TEXT)
    f_foot_r = ImageFont.truetype(MONO_R, 22)
    tag = "Katy, TX · graduating May 2027"
    d.text(
        (W - PAD - d.textlength(tag, font=f_foot_r), H - 84),
        tag,
        font=f_foot_r,
        fill=MUTED,
    )

    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{name}.png"
    img.save(path, optimize=True)
    print(f"{path}  {path.stat().st_size // 1024} KB")


# ── Project card art ────────────────────────────────────────────────
# 16:9 placeholders for the two projects that have no screenshot to
# show (client work, and infrastructure that is mostly a diagram).
# Replace either with a real screenshot whenever one exists.
ART_OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images" / "projects"

ART = {
    "billing-platform": (
        "usage-based billing",
        [
            "partner SaaS  ──►  metered lead events",
            "               │",
            "               ▼",
            "  dedupe · integer-cent pricing · idempotent cycles",
            "               │",
            "               ▼",
            "        Stripe  ──►  automated invoices",
        ],
        "in progress",
    ),
    "agent-infrastructure": (
        "self-hosted agent infra",
        [
            "3 AI clients  ──►  OAuth MCP context server",
            "                    │   (SSO · wildcard TLS)",
            "                    ▼",
            "          semantic recall over a shared KB",
            "                    │",
            "                    ▼",
            "     git-backed stacks  ──►  rebuildable estate",
        ],
        None,
    ),
}


def render_art(name, caption, lines, badge):
    aw, ah = 1200, 675
    img = Image.new("RGB", (aw, ah), BG)
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 8, ah], fill=ACCENT)

    for i, c in enumerate([(230, 90, 110), (246, 199, 120), GREEN]):
        d.ellipse([64 + i * 26, 56, 64 + i * 26 + 14, 70], fill=c)

    f_cap = ImageFont.truetype(MONO_R, 22)
    d.text((64 + 3 * 26 + 18, 52), caption, font=f_cap, fill=MUTED)

    f_line = ImageFont.truetype(MONO_R, 26)
    y = 150
    for line in lines:
        color = GOLD if "──►" in line and "│" not in line else MUTED
        d.text((72, y), line, font=f_line, fill=color)
        y += 58

    if badge:
        f_badge = ImageFont.truetype(MONO_B, 22)
        w = d.textlength(badge, font=f_badge)
        d.rounded_rectangle(
            [aw - 72 - w - 36, 44, aw - 72, 92], radius=24, outline=GOLD
        )
        d.text((aw - 72 - w - 18, 56), badge, font=f_badge, fill=GOLD)

    ART_OUT.mkdir(parents=True, exist_ok=True)
    path = ART_OUT / f"{name}.png"
    img.save(path, optimize=True)
    print(f"{path}  {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    for name, args in CARDS.items():
        render(name, *args)
    for name, args in ART.items():
        render_art(name, *args)
