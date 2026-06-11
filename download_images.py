import os
import requests
from duckduckgo_search import DDGS
from pathlib import Path

def download_images(query, output_dir, file_prefix, count=5):
    print(f"Searching images for: {query}")
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    with DDGS() as ddgs:
        results = list(ddgs.images(
            query,
            size="Large",
            layout="Portrait",
            license_image="any",
            max_results=count * 3
        ))
        
    downloaded = 0
    for i, res in enumerate(results):
        if downloaded >= count:
            break
            
        url = res.get('image')
        if not url:
            continue
            
        try:
            print(f"Downloading {url}")
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                file_path = os.path.join(output_dir, f"{file_prefix}-{downloaded + 1}.jpg")
                with open(file_path, 'wb') as f:
                    f.write(response.content)
                downloaded += 1
                print(f"Saved to {file_path}")
        except Exception as e:
            print(f"Failed to download {url}: {e}")

if __name__ == "__main__":
    base_dir = "public/images/products"
    
    # Oversized T-shirts
    download_images(
        query="men oversized streetwear t-shirt fashion model photography studio white background",
        output_dir=os.path.join(base_dir, "oversized-tshirts"),
        file_prefix="oversized",
        count=5
    )
    
    # Baggy Jeans
    download_images(
        query="men baggy jeans streetwear fashion model photography studio white background",
        output_dir=os.path.join(base_dir, "baggy-jeans"),
        file_prefix="baggy",
        count=5
    )
    
    print("Done downloading images.")
