import pickle
import faiss

from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

index = faiss.read_index(
    "modules/hs_index.faiss"
)

with open(
    "modules/metadata.pkl",
    "rb"
) as f:

    df = pickle.load(f)


def predict_hs(query):

    embedding = model.encode(
        [query]
    )

    distances, ids = index.search(
        embedding,
        3
    )

    results = []

    for rank, i in enumerate(ids[0]):

        row = df.iloc[i]

        distance = distances[0][rank]

        confidence = (
            1 / (1 + distance)
        ) * 100

        results.append({

            "hscode": row["hscode"],

            "description":
            row["description"],

            "confidence":
            round(confidence, 2)

        })

    return results