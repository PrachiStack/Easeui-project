interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900 transition-colors duration-200">
      <table className="w-full text-left">
        <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Prop
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Type
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Default
            </th>
            <th className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors"
            >
              <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400 font-medium">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-purple-600 dark:text-purple-400">
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-500 dark:text-gray-400">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
