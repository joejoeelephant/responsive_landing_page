// Drawer.tsx
import React, {useState} from 'react';

interface DrawerProps {
  isOpen: boolean;
  navLinks: string[];
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, navLinks }) => {
    const drawerClasses = `transform transition-all duration-300 ease-in-out fixed top-0 left-0 w-64 h-full bg-white z-50 border-r border-slate-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
    }`;

    const [activeLink] = useState('First Link');

    return (
       <>
            {
                isOpen === true &&
                <div className='w-screen h-screen absolute top-0 left-0' onClick={onClose}></div>
            }
            <div className={drawerClasses}>
                <div className='p-2'>
                    <ul>
                        {
                            navLinks.map((el,i) => {
                                return (
                                    <li key={i} className={activeLink == el ? 'bg-primary rounded-sm p-2 text-white' : 'bg-white rounded-sm p-2'}>{el}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
       </>
  );
};

export default Drawer;
