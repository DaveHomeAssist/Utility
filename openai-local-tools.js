(function (global) {
  async function openaiRequestText({ apiKey, model, systemPrompt, userPrompt, maxOutputTokens }) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: model || 'gpt-4.1-mini',
        messages: [
          { role: 'system', content: systemPrompt || '' },
          { role: 'user', content: userPrompt || '' }
        ],
        max_tokens: maxOutputTokens || 80,
        temperature: 0.7
      })
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error('OpenAI ' + res.status + ': ' + (body || res.statusText));
    }
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || '';
    return { text };
  }

  async function geminiRequestText({ apiKey, model, systemPrompt, userPrompt, maxOutputTokens }) {
    const targetModel = model || 'gemini-2.5-flash';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
      encodeURIComponent(targetModel) + ':generateContent?key=' + encodeURIComponent(apiKey);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: systemPrompt ? { parts: [{ text: systemPrompt }] } : undefined,
        contents: [{ role: 'user', parts: [{ text: userPrompt || '' }] }],
        generationConfig: { maxOutputTokens: maxOutputTokens || 80, temperature: 0.7 }
      })
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error('Gemini ' + res.status + ': ' + (body || res.statusText));
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '';
    return { text };
  }

  async function requestText(opts) {
    if (!opts || !opts.apiKey) throw new Error('API key required');
    const provider = (opts.provider || 'openai').toLowerCase();
    if (provider === 'gemini') return geminiRequestText(opts);
    return openaiRequestText(opts);
  }

  global.LocalOpenAIPrototype = { requestText };
})(typeof window !== 'undefined' ? window : globalThis);
