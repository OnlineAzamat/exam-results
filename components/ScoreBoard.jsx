import scores from "../data/scores.json";

const ScoreBoard = () => {
  return (
    <div>
      <p className="mt-4 mb-2 text-2xl">Nátiyje</p>

      <table className="max-w-[650px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">№</th>
            <th scope="col" className="px-6 py-3">F.A.A</th>
            <th scope="col" className="px-6 py-3">Durıs sanı ({scores.exam.totalTest} testten)</th>
            <th scope="col" className="px-6 py-3">Ósimlik sanı (Jazba: {scores.exam.totalPlant} ósimlik)</th>
          </tr>
        </thead>
        <tbody>
          {
            scores.data.map((item, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.order}</th>
                <td className="px-6 py-2">{item.name}</td>
                <td className="px-6 py-2">{scores.exam.totalTest - item.incorrect + "/" + scores.exam.totalTest}</td>
                <td className="px-6 py-2">{item.plant}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ScoreBoard