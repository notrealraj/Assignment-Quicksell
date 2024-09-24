import React, { useMemo } from 'react';
import Card from '../Card';
import './column.css';
import AddIcon from '../icons_FEtask/add.svg';
import DotMenuIcon from '../icons_FEtask/3 dot menu.svg';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

interface ColumnProps {
  tickets: Ticket[];
  grouping: string;
  groupBy: string;
  userIdToData: Record<string, User>;
}

const Column: React.FC<ColumnProps> = ({ tickets, grouping, groupBy, userIdToData }) => {
  const title = useMemo(() => {
    switch (grouping) {
      case 'status':
      case 'priority':
        return groupBy;
      case 'user':
        return userIdToData[groupBy]?.name;
      default:
        return '';
    }
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    switch (grouping) {
      case 'status':
        return getStatusIcon(groupBy);
      case 'priority':
        return getPriorityIcon(groupBy);
      case 'user':
        return <UserIcon name={userIdToData[groupBy]?.name} available={userIdToData[groupBy]?.available} />;
      default:
        return null;
    }
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title">
            {title}
            <span className="count">({tickets.length})</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <img src={AddIcon} alt="Add" width={16} height={16} />
          <img src={DotMenuIcon} alt="Menu" width={16} height={16} />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket: Ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === 'status'}
            hideProfileIcon={grouping === 'user'}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
