const Ai = async () => {
    const apiKey = import.meta.env.VITE_OPENROUTER_KEY
    console.log('funciona: ', apiKey)
  
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'bebidas-pinia',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: '?',
          },
        ],
      }),
    })
  
    const data = await res.json()
    return data?.choices?.[0]?.message?.content ?? 'No hubo respuesta'
  }
  
  export default Ai
  