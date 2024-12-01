// api.ts
const useData = async (url: string, options?: RequestInit): Promise<any> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default useData;
