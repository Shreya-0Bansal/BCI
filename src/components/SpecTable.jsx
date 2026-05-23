export default function SpecTable({ rows }) {
  return (
    <div className="spec-table">
      <table>
        <thead>
          <tr>
            <th>Reference Size</th>
            <th>Pitch / Diameter</th>
            <th>Inner Width</th>
            <th>Working Load</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.reference}>
              <td>{row.reference}</td>
              <td>{row.pitch}</td>
              <td>{row.width}</td>
              <td>{row.load}</td>
              <td>{row.material}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
