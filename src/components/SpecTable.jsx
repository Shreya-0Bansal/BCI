function formatHeader(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatCellValue(value) {
  if (value == null || value === "") {
    return "—";
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => formatCellValue(item))
      .filter((item) => item !== "—")
      .join(", ") || "—";
  }

  if (typeof value === "object") {
    return Object.values(value)
      .map((item) => formatCellValue(item))
      .filter((item) => item !== "—")
      .join(", ") || "—";
  }

  return String(value);
}

function getRowKey(row, index, columns) {
  const candidateKeys = ["reference", "name", "title", "type", "gradeClass", "configType", "environment", "zone"];

  for (const key of candidateKeys) {
    if (row[key]) {
      return `${String(row[key])}-${index}`;
    }
  }

  for (const key of columns) {
    if (row[key]) {
      return `${String(row[key])}-${index}`;
    }
  }

  return `row-${index}`;
}

export default function SpecTable({ rows }) {
  const columns = Array.isArray(rows) ? Array.from(new Set(rows.flatMap((row) => Object.keys(row || {})))) : [];

  if (!rows?.length || !columns.length) {
    return null;
  }

  return (
    <div className="spec-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{formatHeader(column)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={getRowKey(row, index, columns)}>
              {columns.map((column) => (
                <td key={column}>{formatCellValue(row?.[column])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
