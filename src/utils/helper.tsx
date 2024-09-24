import  Backlog  from '../icons_FEtask/Backlog.svg';
import  Todo  from '../icons_FEtask/To-do.svg';
import  Cancelled  from '../icons_FEtask/Cancelled.svg';
import  Nopriority  from '../icons_FEtask/No-priority.svg';
import  TbProgress  from '../icons_FEtask/in-progress.svg';
import  Done  from '../icons_FEtask/Done.svg';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import Medium  from '../icons_FEtask/Img - Medium Priority.svg';
import High  from '../icons_FEtask/Img - High Priority.svg';
import Low  from '../icons_FEtask/Img - Low Priority.svg';
import Urgent  from '../icons_FEtask/SVG - Urgent Priority colour.svg';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <img src={ Nopriority} alt="In Progress" width={16} height={16} />;
        case "Low": return <img src={ Low} alt="In Progress" width={16} height={16} />;
        case "Medium": return <img src={ Medium} alt="In Progress" width={16} height={16} />;
        case "High": return <img src={ High} alt="In Progress" width={16} height={16} />;
        case "Urgent": return <img src={ Urgent} alt="In Progress" width={16} height={16} />;
        default: return <AiFillWarning color='#fc7840' size={14} />
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog":  return <img src={Backlog} alt="In Progress" width={16} height={16} />;
        case "Todo": return <img src={Todo} alt="In Progress" width={16} height={16} />;
        case "In progress":  return <img src={TbProgress} alt="In Progress" width={16} height={16} />;
        case "Done": return <img src={Done} width={16} height={16} />
        case "Canceled": return <img src={Cancelled} alt="In Progress" width={16} height={16} />;
        default: return <AiFillCloseCircle color='#94a2b3' size={16} />
    }
}