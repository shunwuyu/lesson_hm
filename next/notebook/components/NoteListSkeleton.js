// 骨架屏
// 和最终结果相似 用户体验的升级
export default function NoteListSkeleton() {
  return (
    <div>
      <ul className="notes-list skeleton-container">
        <li className="v-stack">
          <div 
            className="sidebar-note-list-item skeleton"
            style={{height:'5em'}}
          />
        </li>
        <li className="v-stack">
          <div 
            className="sidebar-note-list-item skeleton"
            style={{height:'5em'}}
          />
        </li>
        <li className="v-stack">
          <div 
            className="sidebar-note-list-item skeleton"
            style={{height:'5em'}}
          />
        </li>
      </ul>
    </div>
  )
}