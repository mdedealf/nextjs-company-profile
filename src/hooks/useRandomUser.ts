import {
  API_GENERATE_RANDOM_USERS,
  API_NUMBER_USERS,
} from "@/constant/apiRoutes";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

const techRoles = [
  "Software Engineer",
  "Data Scientist",
  "Product Manager",
  "DevOps Engineer",
  "UX/UI Designer",
  "Backend Developer",
  "Frontend Developer",
  "Mobile Developer",
  "Cloud Architect",
  "Cybersecurity Specialist",
];

const useRandomUser = () => {
  const fetchRandomUser = async (): Promise<User[]> => {
    const response = await fetch(
      `${API_GENERATE_RANDOM_USERS}${API_NUMBER_USERS}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data.results.map((user: User) => ({
      name: {
        first: user.name.first,
        last: user.name.last,
      },
      picture: {
        large: user.picture.large,
        thumbnail: user.picture.thumbnail,
      },
      email: user.email,
      phone: user.phone,
      jobRole: techRoles[Math.floor(Math.random() * techRoles.length)],
    }));
  };

  return useQuery<User[]>({
    queryKey: ["randomUser"],
    queryFn: fetchRandomUser,
  });
};

export default useRandomUser;
