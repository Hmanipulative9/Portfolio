export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold font-display tracking-tighter">
          HBE<span className="text-accent">.</span>
        </div>
        
        <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Hasnayen Bin Emrun. All rights reserved.
        </p>
        
        <div className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          Built with precision.
        </div>
      </div>
    </footer>
  );
}
