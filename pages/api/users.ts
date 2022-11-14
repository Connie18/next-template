import { NextApiRequest, NextApiResponse } from 'next';

// Study
// https://reffect.co.jp/react/next-js-api-route
// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await response.json();
  res.status(200).json({ users });
};
