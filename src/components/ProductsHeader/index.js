import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId, updateSearchInput} = props
  let searchInput = ''

  const searchInputChange = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      console.log(searchInput)
      updateSearchInput(searchInput)
    } else {
      searchInput = searchInput + event.key
    }
  }

  return (
    <div className="products-header">
      <form onSubmit={searchInputChange}>
        <input
          type="search"
          className="search-field"
          placeholder="Search"
          onKeyDown={searchInputChange}
        />
      </form>
      <div className="heading-sort-container">
        <h1 className="products-list-heading">All Products</h1>
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={onChangeSortby}
          >
            {sortbyOptions.map(eachOption => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductsHeader
