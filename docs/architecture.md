# Architecture

> Status: Foundation. Frontend scaffolded; backend services in progress.

## Overview

The frontend sends requests to an API gateway (FastAPI). The gateway orchestrates four services: Discovery, Analysis, Experiment and Critic. All services read and write a shared Research Memory.

## System architecture

```mermaid
flowchart TD
    FE[Frontend] --> GW[API / Gateway]
    GW --> D[Discovery Service]
    GW --> A[Analysis Service]
    GW --> E[Experiment Service]
    GW --> C[Critic Service]
    D --> AP[Academic APIs / Search]
    A --> PDF[PDF / Text Extraction]
    A --> KG[Claim DB + Knowledge Graph]
    E --> SB[Sandbox - Docker]
    C --> VR[Validation Reports]
    AP & KG & SB --> M[(Research Memory<br/>PostgreSQL, pgvector,<br/>Object Storage, Knowledge Graph)]
```

## Research pipeline

```mermaid
flowchart TD
    Q[Research Question] --> DM[Discovery: query planning, search, collection]
    DM --> AM[Analysis: extraction, RAG, synthesis]
    AM --> G[Research Gap Detection]
    G --> H[Hypothesis Generation]
    H --> C1{Critic Stage 1}
    C1 -- fail / revise --> H
    C1 -- pass --> EX[Experiment: plan, dataset, baseline, code]
    EX --> SBX[Docker Sandbox: run, metrics, ablation]
    SBX --> R[Results & Analysis]
    R --> C2{Critic Stage 2}
    C2 -- fail / revise --> EX
    C2 -- accept --> OUT[Final Output: report, notebook, charts, citations]
```

## Components

| Component | Responsibility | Location in repo | Owner |
|---|---|---|---|
| Frontend | Research workflow interface, results views, auth pages | `frontend/` | TBD |
| API / Gateway | Service endpoints and request orchestration | `backend/` | TBD |
| Discovery, Analysis, Experiment, Critic | Agent services | `backend/` | TBD |

## Key decisions

| Decision | Alternatives considered | Reason | Date |
|---|---|---|---|
| Separate `frontend/` and `backend/` folders | Single `src/` | Different runtimes and CI jobs | 2026-10-10 |

## Open questions

- Auth flow between Supabase and FastAPI
- Backend endpoint contract
