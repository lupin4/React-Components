import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (clickedIndex) => {
      if (expandedIndex === clickedIndex) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(clickedIndex);
      }
    };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>
    );

    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
            {isExpanded && <div className="border-b p-5">{item.content || "No content provided" } </div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
