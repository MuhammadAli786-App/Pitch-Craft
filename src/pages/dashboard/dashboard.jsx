


import React, { useState } from "react";

export default function Dashboard() {
  const [idea, setIdea] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!idea) return alert("Please write an idea first!");
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful AI startup pitch generator." },
            { role: "user", content: `Pitch an idea for: ${idea}` },
          ],
        }),
      });

      const data = await res.json();

      if (data?.choices?.[0]?.message?.content) {
        setOutput(data.choices[0].message.content);
      } else {
        setOutput("No response from AI. Try again!");
      }
    } catch (err) {
      console.error("❌ API error:", err);
      alert("Error connecting to OpenRouter API. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        PitchCraft AI 🚀
      </h1>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        <textarea
          className="w-full p-5 rounded-2xl border border-gray-300 bg-white/80 backdrop-blur-sm 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-lg resize-none h-36 
          text-gray-700 placeholder-gray-400 transition duration-300"
          placeholder="Write your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`self-end ${
            loading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          } cursor-pointer text-white font-semibold py-3 px-7 rounded-2xl shadow-md transition duration-300 transform hover:-translate-y-1`}
        >
          {loading ? "Generating..." : "Generate Pitch"}
        </button>
      </div>

      {output && (
        <div className="w-full max-w-3xl mt-10 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl 
        border border-gray-200 transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">AI Response</h2>
          <pre className="text-gray-700 whitespace-pre-line leading-relaxed">{output}</pre>
        </div>
      )}
    </div>
  );
}
