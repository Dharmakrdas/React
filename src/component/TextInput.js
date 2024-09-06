import React from 'react'

const TextInput = ({isSearchText,setSearchText,getResturentList}) => {
  return (
    <div>
         <input
        type="text"
        data-testid="search-input"
        value={isSearchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={() => getResturentList(isSearchText)}
        placeholder="Seach for Resturents or food"
        className="seach-input"
      />
    </div>
  )
}

export default TextInput
