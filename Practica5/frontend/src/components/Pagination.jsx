function Pagination({
  previous,
  next,
  loadPage
}) {
  return (
    <>
    <div className="pagination">
      <button
        disabled={!previous}
        onClick={() => loadPage(previous)}
      >
        Previous
      </button>

      <button
        disabled={!next}
        onClick={() => loadPage(next)}
      >
        Next
      </button>
      </div>
    </>
  )
}

export default Pagination