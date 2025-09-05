import React from 'react';

interface Props {
  children?: React.ReactNode,
  title: string
}

const SidebarSection: React.FC<Props> = ({children, title}) => {
  return <section className="flex flex-col gap-2">

    <h3 className="text-sm font-bold m-0">{title}</h3>

    <div className="grid grid-cols-2 gap-2">
      {children}
    </div>
  </section>;
};

export default SidebarSection;
