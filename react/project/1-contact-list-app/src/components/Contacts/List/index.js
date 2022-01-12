import "./style.css";
import { useState, useEffect } from "react";

function List({ contacts }) {
  useEffect(() => {
    // Select parent element
    const listItem = document.querySelector(".list");

    // Function that will run when click any contact item
    const handleClick = (e) => {
      if (e.target.classList.contains("list-item")) {
        const element = e.target;
        const elementCurrentInnerHTML = element.innerHTML;
        const elementPhoneNumber = element.children[1].textContent;

        element.innerHTML = `<div>📋 Phone Number Is Copied</div>`;
        // Copy phone number the contact
        navigator.clipboard.writeText(elementPhoneNumber);

        setTimeout(() => {
          element.innerHTML = elementCurrentInnerHTML;
        }, 1500);
      }
    };

    listItem.addEventListener("click", handleClick);
    // Cleanup
    return () => {
      listItem.removeEventListener("click", handleClick);
    };
  }, []);

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div className="list">
      <input
        className="filter-input"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      {filtered.map((item, i) => {
        const { fullname, number } = item;
        return (
          <div key={i} className="list-item">
            <span>{fullname}</span>
            <span>{number}</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
