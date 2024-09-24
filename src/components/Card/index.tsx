import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getStatusIcon } from '../../utils/helper';

interface CardProps {
  ticket: Ticket;
  userData: User;
  hideStatusIcon?: boolean;
  hideProfileIcon?: boolean;
}

const Card: React.FC<CardProps> = ({ ticket, userData, hideStatusIcon = false, hideProfileIcon = false }) => {
  return (
    <div className="card">
      {/* Top Section */}
      <div className="top-container">
        <div className="ticket-id">{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>

      {/* Middle Section */}
      <div className="middle-container">
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className="title">{ticket.title}</div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-container">
        <div className="more-icon-container">
          <LuMoreHorizontal color="#797d84" />
        </div>
        {ticket.tag.map((tag) => (
          <div key={tag} className="tag-container">
            <div className="tag-icon"></div>
            <div className="tag-text">{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
