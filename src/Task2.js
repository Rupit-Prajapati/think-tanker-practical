import React, { useState } from 'react'


const Task2 = () => {
  const [taskInput, setTaskInput] = useState('')
  const [palindrome, setPalindrome] = useState('')

  function largePalindrome(s) {
    if (s.length === 0) return "";

    let start = 0;
    let maxLength = 0;

    const checkFromCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      const length = right - left - 1;
      if (length > maxLength) {
        start = left + 1;
        maxLength = length;
      }
    };

    for (let i = 0; i < s.length; i++) {
      checkFromCenter(i, i);
      checkFromCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPalindrome(largePalindrome(taskInput))

  }
  return (
    <>
      <div style={{ paddingTop: '50px' }}>Task2: Find Palindrome</div>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto'
      }}>
        <input type="text" name="task"
          value={taskInput} onChange={(e) => { setTaskInput(e.target.value) }} placeholder="Enter 
        alphabets to find palindrome" style={{
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
        {palindrome && <>Palindrome String: {palindrome}</>}
      </form>
    </>
  )
}

export default Task2