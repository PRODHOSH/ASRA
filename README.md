# ASRA

**Autonomous Scientific Research Agent**

> An AI research agent that can find papers, analyse evidence, identify research gaps, validate claims, and run experiments in a controlled environment.

Part of the [MIC AIML Build Cycle 2026-27](https://github.com/MIC-AIML-Build-Cycle-2026-27), the AIML Department's project cycle at Microsoft Innovation Club.

| | |
|---|---|
| **Project** | 2 |
| **Status** | Foundation |
| **Current milestone** | Review 1 (31 Oct – 3 Nov 2026) |
| **Project Leads** | `<add GitHub username>`, `<add GitHub username>` |
| **Project board** | [Team board](https://github.com/orgs/MIC-AIML-Build-Cycle-2026-27/projects/2) (org members) |
| **Handbook** | [build-cycle-handbook](https://github.com/MIC-AIML-Build-Cycle-2026-27/build-cycle-handbook) |

---

## Overview

An AI research agent that can find papers, analyse evidence, identify research gaps, validate claims, and run experiments in a controlled environment.

TBD: expand this into a short plain-language explanation once the team has finalised scope.

## Problem Statement

TBD. What problem exists today, who has it, and why existing approaches are not good enough.

## Objective

TBD. What the project aims to achieve by the end of the Build Cycle. Keep it concrete and checkable.

## Proposed Solution

TBD. The approach the team is taking, at a high level. Note the main alternatives you considered and why you chose this one.

## Architecture

A React frontend talks to a FastAPI gateway, which routes requests to four services (Discovery, Analysis, Experiment, Critic). The services share a Research Memory layer (PostgreSQL + pgvector, object storage, knowledge graph).

More detail and diagrams: [`docs/architecture.md`](docs/architecture.md)


## Key Features

- Discovery: query planning and multi-source paper search (Semantic Scholar, arXiv, Crossref)
- Analysis: PDF/text extraction, RAG evidence retrieval, literature synthesis, research gap detection
- Experiment: hypothesis-driven experiments run safely in a Docker sandbox
- Critic: two-stage validation of hypotheses and results, with revise/accept loops


## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React / Next.js |
| Backend | Python, FastAPI |
| LLM | Llama 3 |
| Agent framework | CrewAI |
| Academic APIs | Semantic Scholar, arXiv, Crossref |
| Document parsing | PyMuPDF, Docling |
| RAG / Vector DB | Embeddings + pgvector |
| Experiment sandbox | Docker |
| Database | PostgreSQL |
| Analysis | NumPy, Pandas, Matplotlib |
| Storage / Auth | Supabase Storage, Supabase Auth |
| Deployment | AWS / Vercel |


## Repository Structure

```
.
├── .github/          # Issue templates, PR template, CI workflow, CODEOWNERS
├── frontend/         # Next.js web app
├── backend/          # Python FastAPI services
├── docs/             # Architecture, decisions, weekly updates, review material
├── tests/            # Automated tests
├── CONTRIBUTING.md   # How to contribute
├── SECURITY.md       # Secrets and security reporting
└── README.md
```

Update this tree as the project grows. Add folders such as `experiments/`, `evaluation/`, `notebooks/`, `data/`, `frontend/` or `backend/` when the project needs them. See the [handbook](https://github.com/MIC-AIML-Build-Cycle-2026-27/build-cycle-handbook/blob/main/docs/development-workflow.md#adapting-the-repository-structure) for guidance.

## Getting Started

### Prerequisites

- Node.js 22+ (frontend)
- Python 3.12+ (backend, coming soon)

### Installation

```bash
git clone <repo-url>
cd asra-aiml

# Frontend
cd frontend
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in your own values if the project needs API keys or other configuration. Never commit `.env`.

## Usage

TBD. How to run the project and a minimal example of it working.

## Development Workflow

1. Pick or create an issue on the project board.
2. Create a branch from `main`: `feature/<name>`, `fix/<name>`, `research/<name>`, `experiment/<name>` or `docs/<name>`.
3. Commit small, focused changes.
4. Open a pull request linked to the issue.
5. Get at least one review and passing CI, then merge.

Full details are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Testing

TBD. How to run the tests, for example:

```bash
# TBD: test command
```

## Evaluation

TBD. How the team measures whether the system works: datasets, metrics, baselines and how to reproduce the results. Define metrics before claiming results.

## Current Progress

| Area | Status | Notes |
|---|---|---|
| Architecture / setup | Not started | |
| Proof of concept | Not started | |
| Core workflow | Not started | |
| Testing | Not started | |
| Evaluation | Not started | |
| Documentation | In progress | |

## Build Cycle Milestones

### Review 1 (31 Oct – 3 Nov 2026): Foundation + Proof of Concept

- [ ] Architecture and repository set up
- [ ] Core modules started
- [ ] Working proof of concept demonstrating the main idea
- [ ] TBD: team-specific targets set by Project Leads

### Review 2 (20 – 24 Dec 2026): MVP

- [ ] Main components connected
- [ ] Core workflow working end-to-end
- [ ] Initial testing / evaluation / results
- [ ] TBD: team-specific targets set by Project Leads

### Final Review (25 – 29 Jan 2027): Complete Project + Evaluation + Demo

Final completion deadline: **30 January 2027**

- [ ] Complete working system
- [ ] Testing
- [ ] Evaluation
- [ ] Documentation
- [ ] Deployment (where applicable)
- [ ] Final demonstration
- [ ] TBD: team-specific targets set by Project Leads

## Roadmap

`Foundation → Proof of Concept → Core Build → MVP → Integration & Evaluation → Finalisation`

TBD: team-specific roadmap.

## Team

| Name | GitHub | Responsibility |
|---|---|---|
| TBD | `<add GitHub username>` | TBD |

## Project Leads

| Name | GitHub |
|---|---|
| TBD | `<add GitHub username>` |
| TBD | `<add GitHub username>` |

## Documentation

- [`docs/`](docs/): project documentation
- [`docs/architecture.md`](docs/architecture.md): system design
- [`docs/updates/`](docs/updates/): weekly updates
- [Build Cycle Handbook](https://github.com/MIC-AIML-Build-Cycle-2026-27/build-cycle-handbook): department-wide guidelines

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening your first pull request. Never commit secrets. See [SECURITY.md](SECURITY.md).

## License

TBD. See [LICENSE](LICENSE).
