"use server";
// app/components/PopularSearch.tsx

import { Box, Typography } from "@mui/material";

// Define TypeScript type for the fetched data
type SearchItem = {
  id: number;
  title: string;
};

// Fetch data function using fetch and JSONPlaceholder API
async function fetchPopularSearches(): Promise<SearchItem[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch popular searches");
  }

  const data: SearchItem[] = await response.json();
  return data.slice(0, 5); // Limit to first 5 items for demonstration
}

const PopularSearch = async () => {
  // Fetch the popular searches server-side
  const popularSearches = await fetchPopularSearches();

  return (
    <Box sx={{ paddingTop: 3 }}>
      <Typography variant="h6" component="div">
        جستجوهای محبوب :
      </Typography>
      <Box sx={{ display: "inline" }}>
        {popularSearches.map((item) => (
          <Typography
            key={item.id}
            variant="h6"
            component="span"
            sx={{ color: "inherit", textDecoration: "underline", marginX: 1 }}
          >
            {item.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default PopularSearch;
