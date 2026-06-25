function FilterBar({
  search,
  setSearch,
  availability,
  setAvailability
}) {
  return (
    <>
    <div className="filters">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <select
        value={availability}
        onChange={(e)=>setAvailability(e.target.value)}
      >
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="sold">Sold</option>
      </select>
      </div>
    </>
  )
}

export default FilterBar