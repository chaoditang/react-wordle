export default function LangTable() {
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
              English(US)
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              English(UK)
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Español
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Français
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Deutsch
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Português
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Italiano
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Nederlands
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Italiano
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Nederlands
            </td>
          </tr>
          <tr>
            <td className="border-b border-gray-200 py-4 px-6 text-center">
              Русский
            </td>
            <td className="truncate border-b border-gray-200 py-4 px-6 text-center">
              Polski
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
