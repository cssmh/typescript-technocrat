{
  interface User<p, q> {
    name: string;
    email: string;
    phone: number;
    profileData: p;
    home: q;
  }

  const user: User<
    {
      bio: string;
    },
    string
  > = {
    name: "kala",
    email: "kala@dhola.com",
    phone: 1287821,
    profileData: {
      bio: "ok",
    },
    home: "ghatail",
  };

  const user2: User<
    {
      bio: number;
    },
    number
  > = {
    name: "kala",
    email: "kala@dhola.com",
    phone: 1287821,
    profileData: {
      bio: 74834782,
    },
    home: 7,
  };
}
