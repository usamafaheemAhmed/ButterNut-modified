import React from 'react';
import IssuesNames from './IssuesNames';
const OPTION=[
    {name: "Pancreatitis"},
    {name: "Diabetes"},
    {name: "IBD"},
    {name: "KIDNEY DIESASE "},
    {name: "Struvite stones"},
    {name: "LIVER PROBLEMS"},
    {name: "Skin or coat issues"},
    {name: "Joint problems"},
    {name: "Cancer"},
    {name: "Obesity"},
    {name: "Sensitive stomach"},
    {name: "Heart condition"},
    {name: "Epilepsy"}
    ];

function HealthFilter() {
    const handleSearch = (value, cb) => {
        // just to explian API call
        let tempOptions = [...OPTION, { name: "piyush" }];
        tempOptions = tempOptions.filter((item) =>
          item["name"]?.toLowerCase().includes(value.toLowerCase())
        );
        // setOptions
        cb(tempOptions);
      };
  return (
    <div style={{ width: 300, margin: "auto" }}>
      <IssuesNames options={OPTION}
        noOptionText={"No Match Found"}
        onSearch={handleSearch}
        optionKey={"name"}
        optionCount={5}/>
    </div>
  )
}

export default HealthFilter