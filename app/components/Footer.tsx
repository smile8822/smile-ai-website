export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-semibold text-slate-700">
              SMILE AI GROUP
            </div>
            <p className="mt-2 max-w-md leading-relaxed">
              AI operates automatically. Humans focus on value.
              <br />
              All operations are managed by KAIO based on data,
              logs, and verifiable indicators.
            </p>
          </div>

          <div className="text-right">
            <p>© {year} SMILE AI GROUP</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
