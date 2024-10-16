import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import TeamMembers from "./index"; // Adjust import as necessary
import useRandomUser from "@/hooks/useRandomUser"; // Adjust import as necessary

jest.mock("@/hooks/useRandomUser");

const mockUsers = [
  {
    name: { first: "John", last: "Doe" },
    picture: { large: "https://example.com/johndoe.jpg" },
    email: "johndoe@example.com",
    jobRole: "Software Engineer",
  },
];

describe("TeamMembers Component", () => {
  test("renders loading state", () => {
    (useRandomUser as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<TeamMembers />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders team members correctly", () => {
    (useRandomUser as jest.Mock).mockReturnValue({
      data: mockUsers,
      isLoading: false,
      error: null,
    });

    render(<TeamMembers />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("johndoe@example.com")).toBeInTheDocument();

    const img = screen.getByAltText("John");
    expect(img).toHaveAttribute("src", expect.stringContaining("johndoe.jpg"));
  });
});
