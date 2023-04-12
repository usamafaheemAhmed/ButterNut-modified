import React from 'react'
import AutoComplete from "./index";


const OPTION=[
    {name: "Affenpinscher"},
    {name: "Afghan Hound"},
    {name: "Airedale Terrier"},
    {name: "Akita"},
    {name: "Alaskan Malamute"},
    {name: "American Staffordshire Terrier"},
    {name: "American Water Spaniel"},
    {name: "Australian Cattle Dog"},
    {name: "Australian Shepherd"},
    {name: "Australian Terrier"},
    {name: "Basenji"},
    {name: "Basset Hound"},
    {name: "Bedlington Terrier"},
    {name: "Bernese Mountain Dog"},
    {name: "Bichon Frise"},
    {name: "Black And Tan Coonhound"},
    {name: "Bloodhound"},
    {name: "Border Collie"},
    {name: "Border Terrier"},
    {name: "Borzoi"},
    {name: "Boston Terrier"},
    {name: "Bouvier Des Flandres"},
    {name: "Boxer"},
    {name: "Briard"},
    {name: "Brittany"},
    {name: "Brussels Griffon"},
    {name: "Bull Terrier"},
    {name: "Bulldog"},
    {name: "Bullmastiff"},
    {name: "Cairn Terrier"},
    {name: "Canaan Dog"},
    {name: "Chesapeake Bay Retriever"},
    {name: "Chihuahua"},
    {name: "Chinese Crested"},
    {name: "Chinese Shar-pei"},
    {name: "Chow Chow"},
    {name: "Clumber Spaniel"},
    {name: "Cocker Spaniel"},
    {name: "Collie"},
    {name: "Curly-coated Retriever"},
    {name: "Dachshund"},
    {name: "Dalmatian"},
    {name: "Doberman Pinscher"},
    {name: "English Cocker Spaniel"},
    {name: "English Setter"},
    {name: "English Springer Spaniel"},
    {name: "English Toy Spaniel"},
    {name: "Eskimo Dog"},
    {name: "Finnish Spitz"},
    {name: "Flat-coated Retriever"},
    {name: "Fox Terrier"},
    {name: "Foxhound"},
    {name: "French Bulldog"},
    {name: "German Shepherd"},
    {name: "German Shorthaired Pointer"},
    {name: "German Wirehaired Pointer"},
    {name: "Golden Retriever"},
    {name: "Gordon Setter"},
    {name: "Great Dane"},
    {name: "Greyhound"},
    {name: "Irish Setter"},
    {name: "Irish Water Spaniel"},
    {name: "Irish Wolfhound"},
    {name: "Jack Russell Terrier"},
    {name: "Japanese Spaniel"},
    {name: "Keeshond"},
    {name: "Kerry Blue Terrier"},
    {name: "Komondor"},
    {name: "Kuvasz"},
    {name: "Labrador Retriever"},
    {name: "Lakeland Terrier"},
    {name: "Lhasa Apso"},
    {name: "Maltese"},
    {name: "Manchester Terrier"},
    {name: "Mastiff"},
    {name: "Mexican Hairless"},
    {name: "Newfoundland"},
    {name: "Norwegian Elkhound"},
    {name: "Norwich Terrier"},
    {name: "Otterhound"},
    {name: "Papillon"},
    {name: "Pekingese"},
    {name: "Pointer"},
    {name: "Pomeranian"},
    {name: "Poodle"},
    {name: "Pug"},
    {name: "Puli"},
    {name: "Rhodesian Ridgeback"},
    {name: "Rottweiler"},
    {name: "Saint Bernard"},
    {name: "Saluki"},
    {name: "Samoyed"},
    {name: "Schipperke"},
    {name: "Schnauzer"},
    {name: "Scottish Deerhound"},
    {name: "Scottish Terrier"},
    {name: "Sealyham Terrier"},
    {name: "Shetland Sheepdog"},
    {name: "Shih Tzu"},
    {name: "Siberian Husky"},
    {name: "Silky Terrier"},
    {name: "Skye Terrier"},
    {name: "Staffordshire Bull Terrier"},
    {name: "Soft-coated Wheaten Terrier"},
    {name: "Sussex Spaniel"},
    {name: "Spitz"},
    {name: "Tibetan Terrier"},
    {name: "Vizsla"},
    {name: "Weimaraner"},
    {name: "Welsh Terrier"},
    {name: "West Highland White Terrier"},
    {name: "Whippet"},
    {name: "Yorkshire Terrier"}
    ];
const MyAutoComponent = () => {

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
    <div className="App">
    <div style={{ width: 300, margin: "auto" }}>
      <AutoComplete
        options={OPTION}
        noOptionText={"No Match Found"}
        onSearch={handleSearch}
        optionKey={"name"}
        optionCount={5}
      />
    </div>
  </div>
  )
}

export default MyAutoComponent