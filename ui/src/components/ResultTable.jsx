import "../styles/ResultTable.scss"



const ResultTable = () => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Attempted</td>
                <td>Earn Points</td>
                <td>Result</td>
            </tr>
        </thead>
        <tbody>
                <td>Sidhya</td>
                <td>4</td>
                <td>20</td>
                <td>Failed</td>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
