# AuthenticityAI — Evidence-First Political Statement Registry & NLI Engine

[![Python 3.11](https://img.shields.io/badge/Python-3.11-3776AB?style=flat&logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/Framework-FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Docker Compose](https://img.shields.io/badge/Orchestration-Docker_Compose-2496ED?style=flat&logo=docker)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An open-source, evidence-first public statement registry tracking political assertions over time. Powered by **Natural Language Inference (NLI)** and **semantic vector similarity search**, the platform identifies contradictions across historical speeches and hansards without editorial bias.

---

## 🏛️ System Architecture

```
[ Hansards / Speech Audio / Transcripts ]
                   |
                   v
   [ 1. Ingestion & SHA-256 Hashing ]
                   |
                   v
[ 2. Sentence-Transformers Vector Embedding ]
                   |
                   v
 [ 3. Cosine Similarity Index Top-K Search ]
                   |
                   v
 [ 4. Cross-Encoder NLI Classification Engine ]
    ├── Entailment (Consistent Claim)
    ├── Neutral (Unrelated Context)
    └── Contradiction (Discrepancy Score)
                   |
                   v
  [ Evidence Panel with Verified Timestamps ]
```

---

## ⚡ Core Engineering Highlights

* **Objective Evidence Pipeline:** Unlike traditional fact-checkers that assert binary truth, AuthenticityAI displays raw premise/hypothesis scoring, exact transcript timestamps, and confidence intervals.
* **Dense Vector Search:** High-dimensional sentence embeddings allow cross-year thematic matching even when exact keywords differ.
* **Asynchronous FastAPI Backend:** Background workers process dense embeddings without starving synchronous HTTP request threads.
* **Tamper-Resistant Log:** Ingested statements are hashed with SHA-256 and paired with immutable source references.

---

## 🛠️ Installation & Setup

### Prerequisites
* Python 3.10+
* Docker & Docker Compose
* PostgreSQL with pgvector extension (or Docker container)

### Quickstart
```bash
# 1. Clone repository
git clone https://github.com/Miltonnare/AuthenticityAI.git
cd AuthenticityAI

# 2. Launch services with Docker Compose
docker compose up -d

# 3. Access Interactive Swagger API Docs
open http://localhost:8000/docs
```

### Manual Python Environment Setup
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r backend/requirements.txt

# Run migrations and start API server
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 🧪 Testing & Verification

```bash
# Run test suite
pytest tests/ -v --cov=backend
```
Validates vector search nearest-neighbor retrieval accuracy, sentence tokenizer edge cases, and NLI threshold calibrations.
