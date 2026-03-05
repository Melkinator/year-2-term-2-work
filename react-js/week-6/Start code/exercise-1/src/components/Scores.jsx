function Scores({ courseName, courseResults }) {
    return (
        <>
            <main className="scores-container">
                <div className="scores">
                    <h1>{courseName}</h1>

                    <table>
                        <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {courseResults.map((result) => (
                            <tr key={result.id}>
                                <td>{result.firstName}</td>
                                <td>{result.lastName}</td>
                                <td id="score" className={result.score < 50 ? "warning" : ""}>{result.score}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Scores;