import React, { useState } from 'react'

const Task3 = () => {
  const [taskInput, setTaskInput] = useState('')
  const [subString, setSubString] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    function largestSubstring(s) {
      let start = 0;
      let maxLength = 0;
      let maxSubstring = '';
      const charIndexMap = {};

      for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (char in charIndexMap && charIndexMap[char] >= start) {
          start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = end;

        if (end - start + 1 > maxLength) {
          maxLength = end - start + 1;
          maxSubstring = s.substring(start, end + 1);
        }
      }

      return { length: maxLength, substring: maxSubstring };
    }

    const result = largestSubstring(taskInput);
    setSubString(result.substring + " " + result.length);
  }
  return (
    <>
      <div style={{ paddingTop: '50px' }}>Task3: Find Substring</div>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto'
      }}>
        <input type="text" name="task"
          value={taskInput} onChange={(e) => { setTaskInput(e.target.value) }} placeholder="Enter 
        alphabets to find subString" style={{
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px'
          }} />
        <button type="submit" style={{
          padding: '10px',
          margin: '10px 0',
          borderRadius: '5px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}>Submit</button>
        {subString && <>SubString: {subString}</>}
      </form>
    </>)
}

export default Task3