import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import './Breed.css';



const AutoComplete = ({
  options,
  onSearch,
  onSelect,
  optionKey = "label",
  optionCount = 5,
  noOptionText = "No Items"
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const [allOption, setAllOption] = useState(options || []);

   let myBreed=selected;
  //  myBreed=document.getElementById("BreedInput").value;
   localStorage.setItem("Breed",myBreed);
  

  useEffect(() => {
    setAllOption(options);
  }, [options]);

  const selectHandle = (val) => {
    setSearchText("");
    setSelected(val[optionKey]);
    if (onSelect) {
      onSelect(val);
      return;
    }
  };

  const handleChange = ({ target }) => {
    setSearchText(target.value);
    if (onSearch) {
      onSearch(target.value, (data) => setAllOption(data));
      return;
    }

    let tempOptions = [...options];
    tempOptions = tempOptions.filter((obj) =>
      obj[optionKey]?.toLowerCase().includes(target.value?.toLowerCase())
    );
    setAllOption(tempOptions);
  };
  function BreedChecked(){
  localStorage.setItem("Breed","dont know this breed");
    
    let B = document.getElementById("breadDropDown").classList;

    let A = document.getElementById("BreedInput").classList;
    if(A.contains("d-none") && B.contains("d-none")){
      A.remove("d-none");
      B.remove("d-none");
    }
    else{
      A.add("d-none");
      B.add("d-none");

    }
  }

  return (
    <div className={styles.autoComplete}>
       {/* Checkbox */}
       <div class="row mt-3">
       
       <div class="col-md-12 text-center">
         <div class="Shpac mb-2">
          <input type="checkbox" id="BreedCheckBox" onClick={BreedChecked} />
          <label id="BreedBoxText" className='GtPara'>I don't know his breed</label>
        </div>

       </div>
      
     </div>
      <input
      id="BreedInput"
        className={styles.inputBox}
        onFocus={() => {
          setSelected("");
        }}
        value={selected || searchText}
        onChange={handleChange}
        style={{
          borderBottomLeftRadius: searchText ? 0 : "",
          borderBottomRightRadius: searchText ? 0 : ""
        }}
      />
      
      <div
      id="breadDropDown"
        className={styles.dropdown}
        style={{
          display: searchText ? "flex" : "none",
          // oneOption Height * count - 1st borderTop (1px)
          maxHeight: `${35 * optionCount - 1}px`
        }}
      >
        {!allOption.length ? (
          <div> {noOptionText} </div>
        ) : (
          allOption.map((option, index) => (
            <div key={`${index}`} onClick={() => selectHandle(option)}>
              {option[optionKey]}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default AutoComplete;
