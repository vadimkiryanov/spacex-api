import axios from 'axios';
import { SpaceXLaunchData } from './types';

export const fetchGetSpaceX = async ({ page, sort }: { page: number; sort: 'asc' | 'desc' }) => {
  const { data } = await axios<SpaceXLaunchData>({
    method: 'POST',
    baseURL: `https://api.spacexdata.com/v5/launches/query`,
    data: {
      query: {
        date_utc: {
          $gte: '2015-01-01T00:00:00.000Z',
          $lte: '2019-01-01T00:00:00.000Z',
        },
      },
      options: {
        page: page,
        sort: {
          date_utc: sort,
        },
      },
    },
  });

  return data;
};
