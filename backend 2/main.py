from collections import defaultdict, deque

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()


# -------------------------------------------------------
# CORS
# -------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------------------------------
# Models
# -------------------------------------------------------

class Pipeline(BaseModel):
    nodes: list
    edges: list


# -------------------------------------------------------
# Health Check
# -------------------------------------------------------

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


# -------------------------------------------------------
# DAG Check
# -------------------------------------------------------

def is_dag(nodes, edges):
    """
    Kahn's Algorithm
    """

    graph = defaultdict(list)
    indegree = defaultdict(int)

    # initialize indegree
    for node in nodes:
        indegree[node["id"]] = 0

    # build graph
    for edge in edges:
        source = edge["source"]
        target = edge["target"]

        graph[source].append(target)
        indegree[target] += 1

    queue = deque()

    for node in indegree:
        if indegree[node] == 0:
            queue.append(node)

    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1

        for neighbour in graph[current]:
            indegree[neighbour] -= 1

            if indegree[neighbour] == 0:
                queue.append(neighbour)

    return visited == len(nodes)


# -------------------------------------------------------
# Parse Pipeline
# -------------------------------------------------------

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges,
        ),
    }