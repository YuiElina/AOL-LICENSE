---

# Authentic Open License (AOL)

## TL;DR

AOL is a **file-level copyleft license** with **objective, measurable standards** and **practical exemptions**. It protects your code from license “infection,” while giving authors explicit control over their work.

Use AOL if you want:

* File-level copyleft (only applies to files marked as AOL)
* Explicit protection from GPL “infection”
* Small team exemptions (<25 people)
* Clear, measurable compliance rules
* Relicensing rights for substantial modifications

---

## Why Not Traditional Licenses?

### MIT / BSD / Apache (Permissive)

* **Issue:** Anyone can take your code, make it proprietary, and redistribute it without giving back.
* **Result:** Your contributions benefit corporations, not the open source community.

### GPL / AGPL (Strong Copyleft)

* **Issue:** Claims the entire project must adopt GPL if it uses GPL code.
* **Problem:** GPL cannot legally override your independently-written files.
* **Result:** Your copyright control is compromised, even though GPL applies only to their own files.

### MPL 2.0 (File-Level Copyleft)

* **Issue:** Does not explicitly reject GPL “infection.”
* **Problem:** Small team exemptions are not included; wording can be ambiguous.
* **Result:** Close to AOL, but less practical and less explicit.

---

## Key Benefits of AOL

### 1. File-Level Licensing

* Only files explicitly licensed under AOL are covered.
* Dependencies or external libraries retain their own licenses.

**Example:**

```
project/
├── core.ts (AOL)       <- Stays AOL
├── utils.ts (AOL)      <- Stays AOL
├── helper.ts (MIT)     <- Can be MIT
└── node_modules/
```

From **AOL Section 13.1**:

> "AOL applies ONLY to AOL-Licensed Files. Dependencies, system libraries, and other licenses remain unaffected."

---

### 2. Objective Standards

* Measurable thresholds, not vague terms.
* Examples:

    * <25 people = limited sharing (no compliance)
    * > 50% of original lines rewritten = relicensing eligible
    * Specific platforms listed for public distribution (GitHub, GitLab, etc.)

---

### 3. Small Team Exemption

* Personal use and sharing with fewer than 25 people: No attribution or compliance needed.
* Public distribution: Full compliance required.

**Example:**

* Sharing with classmates (10 people) ✅
* Small startup team (15 people) ✅
* Posting to GitHub publicly ❌ (requires compliance)

---

### 4. Explicit GPL Rejection

* GPL cannot override your independently-written AOL files.
* Your code stays AOL even if you use GPL dependencies.

**Example:**

```
project/
├── LICENSE (AOL)
├── src/
│   └── main.ts (AOL)
└── vendor/
    └── gpl-lib/ (GPL)
```

* **main.ts stays AOL**
* **gpl-lib stays GPL**
* **No cross-infection**

---

### 5. Relicensing Rights

* If you substantially modify AOL files, you may relicense under a different license.

**Conditions (must meet 3 of 5):**

* Rewrites >50% of lines
* Changes core algorithms
* Adds >200 lines of new logic
* Modifies architecture/design
* Integrates with new systems

**Attribution must be preserved** for public distribution:

```javascript
/*
 * Portions originally from [Original Project] by [Author(s)]
 * Original license: Authentic Open License (AOL)
 * Substantially modified by [Your Name]
 * Current license: [New License]
 */
```

---

### 6. Patent Grant

* Explicit worldwide, royalty-free patent license granted by contributors.
* Covers all use, modification, and distribution of the software.

---

### 7. Jurisdiction Neutral

* Works internationally.
* Interpreted according to local copyright laws, not tied to any single country.

---

## Comparison Table

| Feature                  | MIT        | GPL v3   | Apache 2.0 | MPL 2.0    | **AOL**              |
|--------------------------|------------|----------|------------|------------|----------------------|
| **Copyleft**             | None       | Strong   | None       | File-level | File-level           |
| **File-level licensing** | Yes        | No       | Yes        | Yes        | Yes                  |
| **GPL protection**       | Permissive | IS GPL   | Permissive | Implicit   | **Explicit**         |
| **Small team exemption** | No         | No       | No         | No         | **Yes (<25)**        |
| **Relicensing allowed**  | Yes        | No       | Yes        | Limited    | **Yes (conditions)** |
| **Patent grant**         | No         | Implicit | Yes        | Yes        | Yes                  |
| **Objective standards**  | Vague      | Vague    | Some       | Some       | **Measurable**       |
| **Recognition**          | High       | High     | High       | Medium     | New                  |

---

## When to Choose AOL

* Copyleft protection without project-wide restrictions
* File-level flexibility with other licenses
* Explicit GPL protection
* Small team exemptions (<25)
* Measurable compliance rules
* Relicensing for substantial modifications

**Not suitable for:**

* Maximum corporate adoption
* Strongest project-wide copyleft
* Zero restrictions (MIT/BSD style)

---

## Adopting AOL

### For New Projects

1. **Add LICENSE file**
    * Copy full AOL text to `LICENSE` or `LICENSE.txt`.
2. **Add file headers**:

```javascript
/*
 * This file is part of [Project Name], licensed under the
 * Authentic Open License (AOL).
 *
 * Personal use and limited sharing (<25 people) is permitted
 * without license compliance requirements.
 *
 * Public distribution requires full compliance including attribution
 * and copyleft for AOL-licensed files only.
 *
 * Copyright (c) 2025 Your Name
 *
 * See LICENSE file for details.
*/
```

3. **Update README section**:

```markdown
## License

This project is licensed under the Authentic Open License (AOL).

- Personal use and sharing with <25 people: No compliance required
- Public distribution: Full compliance required
- Dependencies retain their original licenses
```

### For Existing Projects

* Ensure you own or have consent from all contributors
* Update LICENSE and file headers
* Update documentation for compliance
* Notify your community if publicly distributing

---

## Philosophy

* Copyright holders control their own files
* Practical small team exemptions (<25)
* Clear, measurable standards
* File-level open source with boundaries
* Explicit GPL infection rejection

---

## FAQ (Key Points)

**Q: Isn’t this just MPL 2.0?**

* Similar, but AOL explicitly rejects GPL infection, includes small-team exemptions, measurable standards, and relicensing conditions.

**Q: Can companies use AOL?**

* Yes, but medium/large enterprises may need legal review.

**Q: Can I change to another license later?**

* Yes, via contributor consent, substantial modification, or new files (file-level).

---

**Choose AOL if you want developers to retain control over their own code and prevent external licenses from overriding independent work.**

**Full license text:** [LICENSE](./LICENSE)
**Last updated:** January 2026

---