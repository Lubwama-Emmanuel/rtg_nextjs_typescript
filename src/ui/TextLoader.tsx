export default function TextLoader() {
  return (
    <div className="max-w-sm space-y-7 animate-pulse">
      <div className="h-4.5 bg-emerald-50 rounded-full dark:bg-emerald-100 w-48 mb-4"></div>
      <div className="h-4 bg-emerald-50 rounded-full dark:bg-emerald-100 max-w-[360px] mb-4.5"></div>
      <div className="h-4 bg-emerald-50 rounded-full dark:bg-emerald-100 mb-4.5"></div>
      <div className="h-4 bg-emerald-50 rounded-full dark:bg-emerald-100 max-w-[330px] mb-4.5"></div>
      <div className="h-4 bg-emerald-50 rounded-full dark:bg-emerald-100 max-w-[300px] mb-4.5"></div>
      <div className="h-4 bg-emerald-50 rounded-full dark:bg-emerald-100 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
