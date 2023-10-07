/* eslint-disable react/prop-types */
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="shadow-emerald-500/30 hover:text-emerald-100 hover:bg-emerald-400 rounded-full border border-emerald-400  px-4 pb-1 pt-2 font-semibold uppercase leading-none text-emerald-800 shadow-lg transition-all duration-200 hover:scale-105 sm:text-xl">
      {children}
    </button>
  );
}
