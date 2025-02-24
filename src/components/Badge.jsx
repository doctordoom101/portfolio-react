function Badge({ children }) {
  return <span className="bg-green hover:shadow-[2px_2px_0px_1px] transition-all cursor-pointer shadow-[4px_4px_0px_1px] px-3 py-1 mx-1 border border-black">{children}</span>;
}

export default Badge;
