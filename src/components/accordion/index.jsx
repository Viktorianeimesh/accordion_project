import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {

  const [selected, setSelected] = useState(null);
  const [enabledMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(currentId)
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1)
    }

    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnabledMultiSelection(!enabledMultiSelection)}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {
          (data && data.length > 0)
            ? (data.map(dataItem => (
              <div className="item" key={dataItem.id}>
                <div 
                  onClick={
                    enabledMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                   <span>+</span>
                </div>
                {enabledMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )}
              </div>
            )))
            : (<div>No data found</div>)
        }
      </div>
    </div>
  )

}