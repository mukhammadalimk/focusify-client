const GridSection = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-2 gap-2.5 my-6 last:mt-6 last:mb-[14px] break_400:gap-3 break_600:gap-4 break_550:grid-cols-3">
    {children}
  </div>
);

export default GridSection;
