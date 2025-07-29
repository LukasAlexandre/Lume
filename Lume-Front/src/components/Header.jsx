import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Lume</h1>
      <h1 className="text-4xl font-bold text-purple-600">Tailwind funcionando 🎉</h1>
      <div className="p-6 bg-gray-900 text-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold">Bem-vindo ao Lume</h2>
        <p className="mt-2 text-gray-300">Essa interface está estilizada com Tailwind!</p>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 max-w-sm w-full transition-all hover:scale-105 duration-500">
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold tracking-wide mb-2">Lume X</h1>
            <p className="text-gray-300 mb-4">Experiência visual elevada com Tailwind CSS</p>
            <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold shadow-lg transition-all duration-300">
              Testar Agora 🚀
            </button>
            <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
  Testar Agora 🚀
</button>

          </div>
        </div>
      </div>
    </header>
  );
}