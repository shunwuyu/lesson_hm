function formatBytes(size) {
  const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    +(size / Math.pow(1024, i)).toFixed(2) * 1 +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
}
// 组件场景题
// Stateless 组件
export default function Progress({ text, percentage, total }) {
  // 空值合并赋值运算符 ES2021 
  // 包装类 new Number(2)  toFixed
  percentage ??= 0

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 text-left rounded-lg overflow-hidden mb-0.5">
      <div 
        class="bg-blue-400 whitespace-nowrap px-1 text-sm"
        style={{width: `${percentage}%`}}
      >
        {text} {percentage.toFixed(2)} %
        { isNaN(total) ? '' : ` of ${formatBytes(total)}`}
      </div>
    </div>
  )
}