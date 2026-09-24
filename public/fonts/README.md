# Fonts

Self-hosted, trimmed copies of two Google Fonts (SIL Open Font License):

| File | Font | Kept |
|---|---|---|
| `fraunces.woff2` | Fraunces (regular) | weights 500–600, all optical sizes, ASCII + the accented letters and punctuation the site uses |
| `fraunces-italic.woff2` | Fraunces Italic | weights 500–600, letters, digits and basic punctuation only |
| `manrope.woff2` | Manrope | weights 400–700, Latin-1 + common punctuation |

If new text needs a character or weight that isn't in these files, the browser
falls back to Georgia / the system font for it. Re-trim from the full fonts with
fontTools (`varLib.instancer` for the weight range, `pyftsubset` for characters).
