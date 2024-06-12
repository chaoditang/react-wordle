export default function LetterTable() {
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
              4 Letter Words
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              5 Letter Words
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              6 Letter Words
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              7 Letter Words
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              8 Letter Words
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              9 Letter Words
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              10 Letter Words
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              11 Letter Words
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
