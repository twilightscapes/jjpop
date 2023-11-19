
import React, { useState } from "react"

const ChatGPT = () => {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")

  const sendMessage = async (event) => {
    event.preventDefault()
  
    // Call OpenAI's API
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer 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",
},

      body: JSON.stringify({
        prompt: message,
        max_tokens: 50,
        n: 1,
        stop: "\n",
      }),
    })
  
    console.log("API response:", response)
    console.log(process.env.OPENAI_API_KEY);
  
    const data = await response.json()
    console.log("API data:", data)
  
    const choice = data.choices && data.choices[0]
    setResponse(choice ? choice.text.trim() : "")
    setMessage("")
  }
  
  
  

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  )
}

export default ChatGPT
