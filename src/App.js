import './App.css';

const App= ()=> {

  const CountryName = [  //Array for the Country List.
    "Australia",
    "Bermuda",
    "Canada",
    "Cameroon",
    "Denmark",
    "France",
    "Finland",
    "Germany",
    
  ];

  const selectedCheckboxes = new Set(); //This variable will store lable for the selected checkboxes.


  const handleChange = (lable) => {        // function which handle all the selected checkboxes.
    if(selectedCheckboxes.has(lable)){
      selectedCheckboxes.delete(lable);
    }
    else{
      selectedCheckboxes.add(lable);
    }

  }

  const createCheckBox = (lable) => (     // function for create a checkbox.
    <Checkbox label={lable} onChange={handleChange}/>

  )
 
  return (                   //creqating a list for the checkbox.
    <div className="App">
      <div className ="checkbox-container">
      {CountryName.map(it =>
        createCheckBox(it))}
      </div>
    </div>
  );
}

const Checkbox = ({label,onChange}) => {   // Resuse tag for the checkbox creation.
  return(
    <div>
  <label>
    <input
      type="checkbox"
      value={label}
      onChange={onChange}
      className="common"
    />

    {label}
  </label>
</div>
  )
}




export default App;
