import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE } from "store/filter/action";

const FilterTask = (props) => {
  return (
    <div>
      <select className="mdb-select md-form colorful-select dropdown-primary" onChange={(e) => props.setVisibilityFilter(e.target.value)}>
        <option value={SHOW_ALL}>All task</option>
        <option value={SHOW_ACTIVE}>Active task</option>
        <option value={SHOW_COMPLETE}>Completed task</option>
      </select>
    </div>
  )
}

export default connect(null, { setVisibilityFilter })(FilterTask);