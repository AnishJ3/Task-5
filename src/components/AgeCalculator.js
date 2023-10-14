import React,{useState} from 'react';

function AgeCalculator()
{
    const [birthdate,setBirthDate] = useState('');
    const [age,setAge] = useState(0);

    const handleChange =(e) =>
    {
        
        if(birthdate === "")
        {
            alert("Enter a birthdate");
        }
        else
        {
            const today = new Date();
            const birthDate = new Date(birthdate);

            let Age = today.getFullYear() - birthDate.getFullYear();

            const monthDiff = today.getMonth() - birthDate.getMonth();

            if(monthDiff < 0 || (monthDiff == 0 && today.getDate() < birthDate.getDate()))
            {
                Age--;
            }

            setAge(Age);


        }
    }
    
    return (

        <div className='container'>

            <h1>Age Calculator</h1>

            <p>Enter your date of birth</p>

            <input className='date' type="date" value={birthdate} onChange={e => setBirthDate(e.target.value)}/>

            <br></br>
            <button type="submit" onClick ={handleChange} className='submit'>Calculate Age</button>

            <p className='result'>You are {age > 0 ? `${age}` : 0} years old</p>

        </div>

    )
}

export default AgeCalculator;