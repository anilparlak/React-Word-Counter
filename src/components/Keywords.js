import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Keywords = () => {
  const { value, getText } = useSelector((state) => state.word);
  const [keywordCount, setKeywordCount] = useState({});

  const duplicate = () => {
    return (getText + "").split(" ").reduce((count, word) => {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;

      return count;
    }, {});
  };

  useEffect(() => {
    if (value === 0) {
      setKeywordCount({});
    }
    const countList = duplicate();
    setKeywordCount(countList);
  }, [getText]);
  return (
    <div className="keywords">
      <h3 className="keywords__title">Keywords</h3>

      <ul className="keywords__list">
        {Object.keys(keywordCount).length
          ? Object.entries(keywordCount)
              .sort(([, a], [, b]) => b - a)
              .map(([data, key], index) =>
                data !== "" && key ? (
                  <li key={index} className="keywords__item">
                    <div className="keywords__name">{data}</div>
                    <div className="keywords__data">
                      <span className="keywords__count">{key}</span>
                      <span className="keywords__ratio">
                        {Math.floor(value ? (key / value) * 100 : "")}%
                      </span>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )
          : null}
      </ul>
    </div>
  );
};

export default Keywords;
