import React from 'react';
import { SpaceXLaunch } from '~/api/types';

interface ISpaceXCard {
  spaceXItem: SpaceXLaunch;
}

export const SpaceXCard: React.FC<ISpaceXCard> = ({ spaceXItem }) => {
  return (
    <div key={spaceXItem.id} className="card border border-white border-opacity-5 w-full bg-base-100 shadow-xl col-span-3 h-full">
      <figure className="p-4">
        <img className="w-36" src={spaceXItem.links.patch.large} alt={spaceXItem.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spaceXItem.name}</h2>
        <p>{spaceXItem.details}</p>
        <p className="font-light italic">{new Date(spaceXItem.date_utc).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
