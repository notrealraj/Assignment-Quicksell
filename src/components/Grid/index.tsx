import React, { useMemo } from 'react';
import './grid.css';
import Column from '../Column/Column';
import { Ticket, User } from '../../interfaces';

interface GridProps {
  gridData: Record<string, Ticket[]>;
  grouping: string;
  userIdToData: Record<string, User>;
}

const Grid: React.FC<GridProps> = ({ gridData, grouping, userIdToData }) => {
  const keys: string[] = useMemo(() => Object.keys(gridData), [gridData]);

  return (
    <div className='grid'>
      {keys.length ? (
        keys.map((key) => (
          <Column
            key={key}
            tickets={gridData[key]}
            grouping={grouping}
            groupBy={key}
            userIdToData={userIdToData}
          />
        ))
      ) : (
        <p className='no-data-message'>No data available</p> /* Display message if no data */
      )}
    </div>
  );
};

export default Grid;
