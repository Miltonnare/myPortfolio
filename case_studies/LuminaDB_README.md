# LuminaDB — Transactional Relational Database Engine in C++17

[![C++17](https://img.shields.io/badge/C%2B%2B-17-00599C?style=flat&logo=c%2B%2B)](https://isocpp.org/)
[![CMake](https://img.shields.io/badge/CMake-Build-064F8C?style=flat&logo=cmake)](https://cmake.org/)
[![ClusterFuzzLite](https://img.shields.io/badge/Fuzzing-ClusterFuzzLite-10b981?style=flat)](https://github.com/google/clusterfuzzlite)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

LuminaDB is a transactional relational database engine implemented from scratch in **C++17**. It manages record persistence via slotted-page files, performs \(O(\log n)\) primary-key lookups using an in-memory B+Tree, provides crash consistency and rollback mechanics through an ARIES-style Write-Ahead Log (WAL), and executes SQL queries through a recursive-descent lexer and AST execution tree.

---

## 📑 Table of Contents
1. [Core Architecture](#-core-architecture)
2. [Component Deep-Dive](#-component-deep-dive)
3. [Transaction & Crash Recovery (ARIES WAL)](#-transaction--crash-recovery-aries-wal)
4. [Storage Engine & Slotted-Page Layout](#-storage-engine--slotted-page-layout)
5. [B+Tree Primary Index](#-btree-primary-index)
6. [SQL Parser & Execution Engine](#-sql-parser--execution-engine)
7. [Fuzz Testing & Verification](#-fuzz-testing--verification)
8. [Build & Installation Guide](#-build--installation-guide)
9. [Known Limitations & Roadmap](#-known-limitations--roadmap)

---

## 🏗️ Core Architecture

```
+-------------------------------------------------------------+
|                      SQL Client / REPL                      |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                     SQL Parser & Lexer                      |
|       (Recursive Descent Tokenizer -> AST Generation)       |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                      Execution Engine                       |
|           (SeqScan, IndexScan, Insert, Filter Nodes)         |
+-------------------------------------------------------------+
               /                              \
              v                                v
+-----------------------------+  +----------------------------+
|        B+Tree Index         |  |   Transaction & WAL Engine |
| (O(log n) PK Lookup & Scan) |  |   (Redo/Undo, LSN, ARIES)  |
+-----------------------------+  +----------------------------+
              \                                /
               v                              v
+-------------------------------------------------------------+
|                Slotted-Page Storage Manager                 |
|   (4KB Pages, Slot Arrays, Page Headers, Variable Records)   |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                    OS Filesystem Blocks                     |
+-------------------------------------------------------------+
```

---

## 🔍 Component Deep-Dive

### 1. Storage Engine & Slotted-Page Layout
Physical disk files are segmented into **4KB virtual page slots**. Each slotted page contains:
* **Page Header:** Tracks page ID, Log Sequence Number (LSN), slot count, and free space pointer.
* **Slot Array:** Grows forward from the header, storing offsets and lengths for each record.
* **Tuple Storage:** Variable-length records grow backward from the end of the page toward the slot array.

### 2. Transaction & Crash Recovery (ARIES WAL)
* Every data mutation writes an append-only log record containing: `LSN`, `PrevLSN`, `TxnID`, `Type (BEGIN, UPDATE, COMMIT, ABORT)`, and `Before/After Images`.
* **WAL Flush Guarantee:** Dirty buffer pages are never flushed to disk until the corresponding WAL records have been forced to non-volatile storage (`FlushToDisk(LSN)`).
* **Recovery Pass:** On reboot after an unexpected shutdown, LuminaDB scans the log buffer to Redo all committed transactions and Undo all uncommitted transactions.

### 3. B+Tree Primary Index
* Handles fast point queries and range-based index scans.
* Internal nodes split dynamically when capacity is exceeded, preserving tree balance and \(O(\log n)\) search complexity.

---

## 🛠️ Build & Installation Guide

### Prerequisites
* GCC 9+ or Clang 10+ (C++17 support required)
* CMake 3.16+
* Make or Ninja build tools

### Compilation Steps
```bash
# 1. Clone repository
git clone https://github.com/Miltonnare/LuminaDB.git
cd LuminaDB

# 2. Create build directory
mkdir build && cd build

# 3. Generate Makefiles and compile
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --parallel

# 4. Run unit test suite
ctest --output-on-failure
```

---

## 🧪 Fuzz Testing with ClusterFuzzLite

LuminaDB incorporates **ClusterFuzzLite** and **LLVM LibFuzzer** harnesses in the `.clusterfuzzlite` and `fuzz/` directories to continuously test binary serialization, TLV decoders, and SQL lexer edge cases against arbitrary, malicious inputs.

Run fuzz target locally:
```bash
./build/fuzz/sql_lexer_fuzzer -max_total_time=60
```

---

## 🗺️ Known Limitations & Roadmap
* **Current Limitation:** B+Tree currently runs in-memory; page-backed B+Tree node persistence is scheduled for v0.4.
* **Roadmap:** Concurrent 2-Phase Locking (2PL) and Multi-Version Concurrency Control (MVCC) isolation.
