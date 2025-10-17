// import { useState } from "react";
// function ControlledForm(){
//     const [name,setName]=useState('');
//     function handleSubmit(e){
//         e.preventDefault();
//         if(!name){
//             alert("please enter your name");
//         }
//         else{
//         console.log(name);
//         alert("Hello!, "+name);
        
//         setName('')
//         }
//     }

//     return(
//         <>
//         <form id="form"onSubmit={handleSubmit}>
//             <input type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}></input>
//             <button type="submit">Submit</button>
//         </form>
//         </>
//     )
// }

// export default ControlledForm;


import { useState } from "react";

function ControlledForm(){
    const[formData,setFormData]=useState({
        name:'',
        age:'',
        phoneNo:''
    })

    function handleSubmit(event){
        event.preventDefault();
        let pattern=/[0-9]/;
        if(pattern.test(formData.name))
            alert("name cannot have numbers");
        else if(formData.age<18)
            alert("you are too young");
        else if(formData.phoneNo.length<10)
            alert("Please enter valid phone number!")
        else {
            alert("Form submitted successfully!")
            console.log(formData)
            setFormData({
                name:'',
                age:'',
                phoneNo:''
            })
        }

    }
    function handleChange(e){
        const{name, value}=e.target;
        setFormData(prev=>({
            ...prev,
            [name]:name==='age'?Number(value):value
        }));
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input 
                    name="name" 
                    type="text" 
                    placeholder="Please enter your name!" 
                    value={formData.name}
                    onChange={handleChange}>
                    </input>
                </label>

                <label htmlFor="age">
                    <input name="age" 
                    type="number" 
                    placeholder="Please enter your age!" 
                    value={formData.age}
                    onChange={handleChange}>
                    </input>
                </label>

                <label htmlFor="phoneNo">
                    <input name="phoneNo" 
                    type="text" 
                    placeholder="Please enter your phone No!" 
                    value={formData.phoneNo}
                    onChange={handleChange}>
                    </input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )

}
export default ControlledForm;