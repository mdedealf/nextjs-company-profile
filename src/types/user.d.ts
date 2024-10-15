type User = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    thumbnail: string;
  };
  email: string;
  phone: string;
  jobRole: string;
};

export { User };
