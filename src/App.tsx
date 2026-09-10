
function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 text-slate-50">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
          HabitLab
        </h1>
        <p className="mt-2 text-slate-400 text-center text-sm uppercase tracking-widest font-semibold">
          App Shell Initialized
        </p>
      </header>
      
      <main className="max-w-2xl text-center space-y-6">
        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-xl backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed">
            The repository has been successfully set up with React 19, Vite, Tailwind CSS 4, and Material UI.
            The feature-based architecture is ready for development.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
