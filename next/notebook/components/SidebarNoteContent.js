'use client'; // 客户端
import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // 集成了路由

export default function SidebarNoteContent({
  id,
  title,
  children,
  expandedChildren
}) {
  const router = useRouter(); 
  const pathname = usePathname();
  const selectedId = pathname?.split('/')[2] || null;
  const [isExpanded, setIsExpanded] = useState(false);
  const itemRef = useRef(null)
  const [isPending] = useTransition()
  const isActive = id === selectedId;

  useEffect(() => {
    // setInterval(() => {
    //   itemRef.current.classList.add('flash');
    // }, 3000)
  }, [])
  // console.log(selectedId, '////')
  // list 没有去到详情
  // 详情 id
  // 展开收起
  return (
    <div 
      ref={itemRef}
      onAnimationEnd={() => {
        // itemRef.current.classList.remove('flash');
      }}
      className={[
      'sidebar-note-list-item',
      isExpanded? 'note-expanded': ''
    ].join(' ')}>
    {children}
      <button 
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
          ?'var(--gray-80)'
          :isActive
          ?'var(--tertiary-blue)':'',
          border: isActive ? 
          '1px solid var(--primary-border)':'1px solid transparent'
        }}
        onClick={
          () => {
            router.push(`/note/${id}`)
          }
        }
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {
          isExpanded ? (
            <img 
              src="/chevron-down.svg"
              width="10px"
              height="10px"
              alt="Collapse"
            />
          ): (
            <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand"/>
          )
        }
      </button>
      { isExpanded && expandedChildren }
    </div>
  )
}