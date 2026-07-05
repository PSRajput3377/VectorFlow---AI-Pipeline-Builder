# 🚀 VectorFlow - AI Pipeline Builder

A visual workflow builder for creating AI pipelines using a drag-and-drop interface.

This project was built as part of a frontend/backend engineering assessment. It allows users to construct pipelines using reusable nodes, connect them visually, and validate the resulting graph through a FastAPI backend.

---

## ✨ Features

### Frontend

- 🎯 Drag-and-drop workflow editor using React Flow
- ♻️ Reusable `BaseNode` architecture
- 🧩 9 custom node types
  - Input
  - Output
  - Text
  - LLM
  - API
  - Database
  - Image
  - Condition
  - Delay
- 🎨 Modern sidebar UI
- 🔗 Interactive node connections
- 📝 Dynamic Text Node supporting variable detection
- ⚡ Automatic creation of input handles for `{{variables}}`

### Backend

- 🚀 FastAPI REST API
- 📊 Counts pipeline nodes
- 🔗 Counts pipeline edges
- 🌳 Detects whether the pipeline forms a Directed Acyclic Graph (DAG)
- 📦 Returns structured JSON response

---

# 🛠 Tech Stack

## Frontend

- React
- React Flow
- Zustand
- JavaScript
- CSS

## Backend

- FastAPI
- Python
- Pydantic

---

# 📂 Project Structure

```
frontend/
│
├── src/
│   ├── Components/
│   │   ├── BaseNode.js
│   │   └── NodeField.js
│   │
│   ├── nodes/
│   │   ├── inputNode.js
│   │   ├── outputNode.js
│   │   ├── textNode.js
│   │   ├── llmNode.js
│   │   ├── apiNode.js
│   │   ├── imageNode.js
│   │   ├── databaseNode.js
│   │   ├── conditionNode.js
│   │   └── delayNode.js
│   │
│   ├── App.js
│   ├── toolbar.js
│   ├── ui.js
│   ├── submit.js
│   └── store.js
│
└── package.json

backend/
│
├── main.py
└── requirements.txt
```

---

# ▶️ Running the Project

## Clone

```bash
git clone <repository-url>
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs on

```
http://localhost:3000
```

---

## Backend

Create a virtual environment

```bash
python3 -m venv .venv
```

Activate it

Mac/Linux

```bash
source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

API Documentation

```
http://127.0.0.1:8000/docs
```

---

# 📖 Usage

1. Drag nodes from the sidebar.
2. Connect nodes to create a pipeline.
3. Use the Text node to define prompts.
4. Enter variables using

```
{{variable}}
```

which automatically creates corresponding input handles.

5. Click **Submit Pipeline** to analyze the workflow.

Example response

```json
{
    "num_nodes": 3,
    "num_edges": 2,
    "is_dag": true
}
```

---

# 🧠 Design Decisions

The project was designed around a reusable `BaseNode` component to minimize duplicated UI logic.

Each node only manages its own state and configuration, while rendering is delegated to the shared component.

Benefits:

- Cleaner code
- Easier maintenance
- Faster creation of new node types
- Consistent user interface

---

# 📷 Demo

The demo showcases:

- Drag-and-drop node creation
- Dynamic connections
- Variable detection
- Automatic input handle generation
- Backend pipeline validation
- DAG detection

---

# 👨‍💻 Author

Prashant Singh Rajput
