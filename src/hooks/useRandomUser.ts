import {
  API_GENERATE_RANDOM_USERS,
  API_NUMBER_USERS,
} from "@/constant/apiRoutes";
import { useQuery } from "@tanstack/react-query";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const useRandomUser = () => {
  const fetchRandomUser = async (): Promise<User[]> => {
    const response = await fetch(
      `${API_GENERATE_RANDOM_USERS}${API_NUMBER_USERS}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.results;
  };

  return useQuery<User[]>({
    queryKey: ["randomUser"],
    queryFn: fetchRandomUser,
  });
};

export default useRandomUser;
