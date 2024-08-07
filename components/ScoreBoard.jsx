
const ScoreBoard = () => {
  return (
    <div>
      <p>Score Board</p>

      <table className="w-[550px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">№</th>
            <th scope="col" className="px-6 py-3">F.A.A</th>
            <th scope="col" className="px-6 py-3">Durıs sanı</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
            <td className="px-6 py-2">Yakubbaev Azamat</td>
            <td className="px-6 py-2">12/20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScoreBoard