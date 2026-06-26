import React from 'react'
import sublinks from './data'
import { useGlobalContext } from './Context'

const SubMenu = () => {
  const { pageId ,setPageId} = useGlobalContext();
  
  // Find the currently hovered/selected page data
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const handleLeave = (e) =>{
    setPageId(null)
  }
  return (
    // You can dynamically add a 'show' class if a page is selected
    <div className={currentPage ? "sub-menu show-submenu" : "sub-menu"} onMouseLeave={handleLeave}>
      {/* Fix: Wrap in curly braces and use optional chaining to show the page label */}
      <h5>{currentPage?.page}</h5>
      
      {/* Fix: Corrected the optional chaining and ternary syntax for columns */}
      <div 
        className="submenu-links" 
        style={{
          gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr'
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a key={id} href={url}>
              {icon}
              <span className='svg'>
                  {label}
              </span>
                
            </a>
          );
        })}
      </div>
    </div>
  )
}

export default SubMenu;