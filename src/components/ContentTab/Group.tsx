import { ReactNode } from 'react';

import './main.scss';

interface IProps {
  children: ReactNode
}

const Group = ({ children }: IProps) => {
  return (
    <div className="tab-group">
      { children }
    </div>
  )
}

export default Group;