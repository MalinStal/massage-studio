import React from "react";

export default function Form({
  titel1,
  inputType,
  titel2,
  inputType2,
  btntitel,
  btnClassName
}) {
  return (
    <form>
      <label> {titel1}</label>
      <input type={inputType} />
      <label> {titel2}</label>
      <input type={inputType2} />
      <button className={btnClassName}>{btntitel}</button>
    </form>
    
  );
}


/*export default function Form({
 form,
 handelChangeChange,
 HandelSubmit, 
 state1,
  setstate1,
  state1value,
 state2,
 setstate2,
 state2value
}) {

  const [{state1},{setstate1}] = useState({state1value});
  const [{state2},{setstate2}]= useState([]);  
  const {handelChange}= (event => {
    const { name, value } = event.target;
    {setstate1}(({state1}) => ({...{state1}, [name]: value}))
    
  })
 

  const {HandelSubmit} = event => {
   event.preventDefault() 
   {setstate2}([...{state2}, {state1}]);
    
   {setstate1}({state1value})
   
  }

  return (
   <>
   {form}
   </>
    
  );
}
*/