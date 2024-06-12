export default function FunTable() {
  return (
    <div className="mx-4 overflow-hidden rounded-lg shadow-lg md:mx-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-center font-bold uppercase text-gray-600"></th>
            <th className="w-1/4 py-4 px-6 text-left text-center font-bold uppercase text-gray-600"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Coworlde
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Square word
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Moviedle
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Infinite Wordle
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Country wordle
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Wordle Answer Finder
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
