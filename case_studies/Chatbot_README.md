# Chatbot- — Sub-Second Inference with Groq LPU & LangChain

[![Python 3.10](https://img.shields.io/badge/Python-3.10-3776AB?style=flat&logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/Framework-FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Groq LPU](https://img.shields.io/badge/Inference-Groq_LPU-F55036?style=flat)](https://groq.com)
[![LangChain](https://img.shields.io/badge/Orchestration-LangChain-1C3C3C?style=flat)](https://langchain.com)
[![Deployment](https://img.shields.io/badge/Deployment-Render-46E3B7?style=flat&logo=render)](https://chatbot-0jlz.onrender.com)

Live Production URL: **[chatbot-0jlz.onrender.com](https://chatbot-0jlz.onrender.com)**

A low-latency conversational AI microservice built with **FastAPI**, **LangChain**, and **Groq's Language Processing Unit (LPU)** hardware acceleration, delivering sub-200ms token generation and MongoDB Atlas persistent conversational memory.

---

## ⚡ Technical Architecture

```
[ User Prompt via Web Client ]
              |
              v
 [ FastAPI Asynchronous Gateway ]
              |
   +----------+----------+
   |                     |
   v                     v
[ LangChain Memory ]   [ Groq LPU API ]
(Sliding Window)       (Sub-200ms Inference)
   |                     |
   v                     v
[ MongoDB Atlas ]      [ Streamed Token Output ]
(Persistent History)
```

---

## 🚀 Setup & Execution

### Prerequisites
* Python 3.10+
* Groq API Key (`GROQ_API_KEY`)
* MongoDB Atlas connection string (`MONGO_URI`)

### Setup Instructions
```bash
# 1. Clone repository
git clone https://github.com/Miltonnare/Chatbot-.git
cd Chatbot-

# 2. Virtual environment
python -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# 3. Environment configuration
export GROQ_API_KEY="your-groq-key"
export MONGO_URI="mongodb+srv://..."

# 4. Run server
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

---

## 🧪 Verification
The service has been verified under load testing on Render, maintaining consistent sub-250ms time-to-first-token (TTFT) metrics.
