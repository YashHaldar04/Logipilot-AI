import pandas as pd
import faiss
import pickle
from sentence_transformers import SentenceTransformer

df = pd.read_csv("data/hs_level6.csv")

# Keep detailed rows only
df = df[df["level"] >= 4]

# Clean text
df["text"] = (
    df["description"]
    .fillna("")
    .str.lower()
)

descriptions = df["text"].tolist()

print("Loading model...")
model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

print("Generating embeddings...")
embeddings = model.encode(
    descriptions,
    show_progress_bar=True
)

dimension = embeddings.shape[1]

index = faiss.IndexFlatL2(dimension)

index.add(embeddings)

faiss.write_index(
    index,
    "hs_index.faiss"
)

with open(
    "metadata.pkl",
    "wb"
) as f:
    pickle.dump(df, f)

print("Index created.")