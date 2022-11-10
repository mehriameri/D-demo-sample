import React, { useState } from "react";

function SelectInpute({ selectList }) {
  const selectListArray = [];
  for (const key in selectList) {
    selectListArray.push(selectList[key]);
  }
  const firstSelectBoxArray = [];
  for (const key in selectList) {
    firstSelectBoxArray.push(selectList[key].question);
  }
  const secondSelectBoxArray = [];
  selectListArray.forEach((value) => {
    value.title.map((item) =>
      secondSelectBoxArray.push({
        question: value.question,
        title: item,
      })
    );
  });
  const [firstSelectBox, setFirstSelectBox] = useState(firstSelectBoxArray[0]);
  const [secondSelectBox, setSecondSelectBox] = useState();

  return (
    <div className="flex">
      <select
        onChange={(event) => setFirstSelectBox(event.target.value)}
        value={firstSelectBox}
        className="outline-none border border-gray-300 rounded-md text-xs text-gray-600 w-1/2 p-4 ml-2"
      >
        {firstSelectBoxArray.map((item) => <option value={item}>{item}</option>)}
      </select>
      <select
        onChange={(event) => setSecondSelectBox(event.target.value)}
        value={secondSelectBox}
        className="outline-none border border-gray-300 rounded-md text-xs text-gray-600 w-1/2 p-4"
      >
        {secondSelectBoxArray
          .filter(item => { return item.question == firstSelectBox })
          .map(item => <option value={item.title}>{item.title}</option>
          )}
      </select>
    </div>
  );
}

export default SelectInpute;
