export default function StatusPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Live System Status</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-gray-400">System</p>
          <p className="text-green-400 font-semibold">Operating</p>
        </div>
        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-gray-400">AI Agents</p>
          <p className="text-green-400 font-semibold">Running</p>
        </div>
        <div className="p-6 bg-[#121821] border border-gray-800 rounded">
          <p className="text-gray-400">Public Logs</p>
          <p className="text-yellow-400 font-semibold">Partial Open</p>
        </div>
      </div>
    </section>
  );
}
