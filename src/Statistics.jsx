import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, sum, average, positive }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticsLine text="Good" value={good} />
          </tr>
          <tr>
            <StatisticsLine text="Neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticsLine text="Bad" value={bad} />
          </tr>
          <tr>
            <StatisticsLine text="All" value={sum} />
          </tr>
          <tr>
            <StatisticsLine text="Average" value={average} />
          </tr>
          <tr>
            <StatisticsLine text="Positive" value={positive} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
