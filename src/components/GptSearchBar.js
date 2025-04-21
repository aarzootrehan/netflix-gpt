import React from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGES } from '../utils/langUtils';
import { openai } from '../utils/openai';

const GptSearchBar = () => {
    const appLanguage = useSelector((store) => store.app.language);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const searchQuery = e.target[0].value;
        console.log("Search query:", searchQuery);
        // Make API call to fetch search results from open api
        const result = await openai(searchQuery);
        console.log("Result from openai:", result);
    }
  return (
    <div>
        
        <form className="p-6 m-6" onSubmit={(e) => handleFormSubmit(e)}>
            <input type="text" placeholder={appLanguage ? LANGUAGES[appLanguage].search_placeholder: "Search...."} className="border-2 border-gray-300 rounded-xl p-2 w-[50%] h-[40px] mr-4" />
            <button type="submit" className=" text-white rounded-lg p-2 ml-2 h-[46px] ml-4">{appLanguage ? LANGUAGES[appLanguage].search_btn: "Search"}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
