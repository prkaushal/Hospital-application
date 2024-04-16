import React ,{useState} from 'react'
import Sidebar from './Sidebar';
import Content from './Content';



const UserPage = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };

  return (
    <div className='app flex flex-row'>
    <Sidebar onOptionClick={handleOptionClick} selectedOption={selectedOption} />
    <Content selectedOption={selectedOption} />
    </div>
  )
}

export default UserPage