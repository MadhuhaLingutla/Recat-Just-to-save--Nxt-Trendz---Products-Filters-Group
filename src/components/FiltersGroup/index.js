import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, updateCategoryID, updateratingID} = props

  const sendCategoryID = event => {
    updateCategoryID(event.target.textContent)
  }

  const sendratingID = event => {
    updateratingID(event.target.src)
  }

  return (
    <div className="filters-group-container">
      <div className="category-filters">
        <h1 className="category-heading">Category</h1>
        <ul className="category-filters-list">
          {categoryOptions.map(each => (
            <li className="category-item">
              <button
                className="category-button"
                type="button"
                onClick={sendCategoryID}
              >
                {each.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="ratings-filters">
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-filters-list">
          {ratingsList.map(each => {
            const altClassName = `rating ${each.id}`
            return (
              <li className="rating-item">
                <button
                  className="rating-button"
                  type="button"
                  onClick={sendratingID}
                >
                  <img
                    src={each.imageUrl}
                    className="rating-image"
                    alt={altClassName}
                  />
                  <p className="rating-description">&Up</p>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <button className="clear-button" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
