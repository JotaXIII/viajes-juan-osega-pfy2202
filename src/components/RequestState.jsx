export function RequestState({ loading, error, empty, onRetry, children }) {
  if (loading) return <p className="request-state" role="status">{loading}</p>
  if (error) {
    return (
      <div className="request-state">
        <p role="alert">{error}</p>
        {onRetry && <button type="button" onClick={onRetry}>Reintentar</button>}
      </div>
    )
  }
  if (empty) return <p>{empty}</p>
  return children
}
