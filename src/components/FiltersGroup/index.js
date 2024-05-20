import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getjobs} = props
    if (event.key === 'ENTER') {
      getjobs()
    }
  }

  const renderSearchInput = () => {
    const {getjobs, searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          id="searchButton"
          className="search-button"
          onClick={getjobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type Of Employment</h1>
        <ul className="employment-type-list-container">
          {employmentTypesList.map(eachEmployeeList => {
            const {changeEmployeeList} = props
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachEmployeeList.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeList.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeList.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployeeList.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeList.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props

    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalaryRange => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalaryRange.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalaryRange.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalaryRange.salaryRangeId}
                  name="salary"
                  className="salary-input"
                />
                <label
                  className="salary-label"
                  htmlFor={eachSalaryRange.salaryRangeId}
                >
                  {eachSalaryRange.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
