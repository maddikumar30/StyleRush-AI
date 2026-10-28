class NanoBananaService:

    def recommend_outfit(self, shirt_color):
        if shirt_color.lower() == "black":
            return {
                "pants": "Blue Jeans",
                "shoes": "White Sneakers",
                "match_score": 96
            }

        return {
            "pants": "Black Jeans",
            "shoes": "Casual Shoes",
            "match_score": 85
        }